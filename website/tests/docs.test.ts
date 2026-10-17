import { describe, expect, it } from 'vite-plus/test';
import { globSync, readFileSync } from 'node:fs';
import { buildMenu, searchGuides } from '../src/components/docs';
import type { MarkdownItems } from '../src/components/docs/types';

const files = globSync('src/routes/docs/**/index.md');
const metadata = (text: string, key: string) => {
  const value = text.match(new RegExp(`^${key}: (.*)$`, 'm'))?.[1] || '';
  return value.replace(/^['"]|['"]$/g, '').replaceAll("''", "'");
};
const guides: MarkdownItems = Object.fromEntries(
  files.map((path) => {
    const content = readFileSync(path, 'utf8');
    return [
      path.replace('src/routes', '').replace('index.md', ''),
      {
        title: metadata(content, 'title'),
        description: metadata(content, 'description'),
        keywords: metadata(content, 'keywords'),
      },
    ];
  })
);

describe('player documentation', () => {
  it('has valid metadata and no placeholder pages', () => {
    expect(files.length).toBeGreaterThan(50);
    for (const file of files) {
      const text = readFileSync(file, 'utf8');
      expect(metadata(text, 'title'), file).not.toBe('');
      expect(metadata(text, 'description'), file).not.toBe('');
      expect(metadata(text, 'date_created'), file).toMatch(
        /^\d{4}-\d{2}-\d{2}$/
      );
      expect(metadata(text, 'last_updated'), file).toMatch(
        /^\d{4}-\d{2}-\d{2}$/
      );
      expect(text, file).not.toMatch(/\bwip\b|hello :3|TODO|coming soon/i);
    }
  });

  it('resolves every handbook link and heading anchor', () => {
    for (const file of files) {
      const text = readFileSync(file, 'utf8');
      for (const match of text.matchAll(/\]\((\/docs\/[^)\s]*)\)/g)) {
        const [path, anchor] = match[1].split('#');
        expect(guides[path], `${file}: ${path}`).toBeDefined();
        if (anchor) {
          const target = readFileSync(`src/routes${path}index.md`, 'utf8');
          const headings = [...target.matchAll(/^#{1,6} (.+)$/gm)].map(
            (heading) =>
              heading[1]
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s/g, '-')
          );
          expect(headings, `${file}: ${match[1]}`).toContain(anchor);
        }
      }
    }
  });

  it('keeps every real guide reachable in the menu, including category overviews', () => {
    const seen: string[] = [];
    const walk = (items: ReturnType<typeof buildMenu>) =>
      items.forEach((item) => {
        if (item.href) seen.push(item.href);
        if (item.items) walk(item.items);
      });
    walk(buildMenu(guides));
    expect(new Set(seen).size).toBe(seen.length);
    expect(seen.sort()).toEqual(Object.keys(guides).sort());
    expect(buildMenu(guides)[0].href).toBe('/docs/');
    expect(buildMenu(guides)[1].text).toBe('Getting Started');
  });

  it('uses frontmatter titles and handles children without an explicit category index', () => {
    const menu = buildMenu({
      '/docs/': { title: 'Player handbook' },
      '/docs/travel/deep/scrolls/': { title: 'Emergency travel' },
      '/docs/travel/waystones/': { title: 'Discovering destinations' },
    });
    const travel = menu.find((item) => item.text === 'Travel');
    expect(
      travel?.items?.find((item) => item.href === '/docs/travel/waystones/')
        ?.text
    ).toBe('Discovering destinations');
    expect(
      travel?.items?.find((item) => item.text === 'Deep')?.items?.[0].text
    ).toBe('Emergency travel');
  });

  it('finds player terms, descriptions, and technical aliases without a case-sensitive match', () => {
    expect(
      searchGuides(guides, ' ANGELCHESTS ').map(([path]) => path)
    ).toContain('/docs/gameplay/angelchests/');
    expect(
      searchGuides(guides, 'shelves chest').map(([path]) => path)
    ).toContain('/docs/building/shelf-displays/');
    expect(searchGuides(guides, 'lumiview').map(([path]) => path)).toEqual([
      '/docs/building/shelf-displays/',
    ]);
    expect(searchGuides(guides, 'not-a-real-feature')).toEqual([]);
  });

  it('keeps AngelChests as the public name and includes the shelf behavior', () => {
    expect(guides['/docs/gameplay/angelchests/'].title).toBe('AngelChests');
    const shelf = readFileSync(
      'src/routes/docs/building/shelf-displays/index.md',
      'utf8'
    );
    expect(shelf).toContain('in front of the chest');
    expect(shelf).not.toContain('/lumiview');
  });
});
