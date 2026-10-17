import { describe, expect, it, vi } from 'vite-plus/test';
import { globSync, readFileSync } from 'node:fs';

vi.mock('../src/routes/docs/layout', () => ({
  getMarkdownItems: () =>
    Object.fromEntries(
      globSync('src/routes/docs/**/index.md').map((file) => {
        const source = readFileSync(file, 'utf8');
        const title = source.match(/^title: ['"]?(.*?)['"]?$/m)?.[1] || 'Guide';
        const icon = source.match(/^icon: ['"]?(.*?)['"]?$/m)?.[1];
        return [
          file.replace('src/routes', '').replace('index.md', ''),
          {
            title,
            audience: source.match(
              /^audience: ['"]?(website|minecraft|both)['"]?$/m
            )?.[1],
            icon,
            extra_buttons: [
              ...source.matchAll(
                /^  - label: '((?:[^']|'')+)'\r?\n    href: '([^']+)'/gm
              ),
            ].map((match) => ({
              label: match[1].replaceAll("''", "'"),
              href: match[2],
            })),
          },
        ];
      })
    ),
}));

import { onGet } from '../src/routes/api/docs';

describe('in-game docs API', () => {
  it('publishes Markdown bodies and matching navigation without frontmatter', async () => {
    const json = vi.fn();
    const cacheControl = vi.fn();
    await (onGet as Function)({ json, cacheControl });
    const [status, feed] = json.mock.calls[0];
    expect(status).toBe(200);
    expect(feed.version).toBe(1);
    const joining = '/docs/getting-started/joining/';
    expect(
      feed.pages.some((page: { path: string }) => page.path === joining)
    ).toBe(false);
    expect(JSON.stringify(feed.menu)).not.toContain(joining);
    expect(
      JSON.stringify(
        feed.pages.map((page: { extra_buttons: unknown }) => page.extra_buttons)
      )
    ).not.toContain(joining);
    const introduction = feed.pages.find(
      (page: { path: string }) => page.path === '/docs/'
    ).markdown;
    expect(introduction).not.toContain('The sidebar');
    expect(introduction).not.toContain('Join the server');
    expect(introduction).not.toContain('## Find a guide');
    expect(introduction).not.toContain('What you want to do');
    const home = feed.pages.find(
      (page: { path: string }) => page.path === '/docs/'
    );
    expect(home.extra_buttons.length).toBeGreaterThanOrEqual(19);
    expect(home.extra_buttons[0]).toEqual({
      label: 'Get home or meet a friend',
      href: '/docs/travel/homes-and-requests/',
    });
    for (const button of home.extra_buttons)
      expect(
        feed.pages.some((page: { path: string }) => page.path === button.href)
      ).toBe(true);
    expect(introduction).not.toContain('{/* audience:');
    expect(introduction).toContain(
      'Use the search field in the handbook dialog'
    );
    expect(feed.pages.length).toBeGreaterThan(50);
    expect(feed.menu.length).toBeGreaterThan(5);
    expect(cacheControl).toHaveBeenCalledWith({ public: true, maxAge: 300 });
    for (const page of feed.pages) {
      expect(page.icon).toMatch(/^minecraft:item\/[a-z0-9_]+$/);
      expect(page.path).toMatch(/^\/docs\/(?:[a-z0-9-]+\/)*$/);
      expect(page.markdown).not.toMatch(/^---/);
      expect(page.markdown.trim()).not.toBe('');
      const targets = new Set<string>();
      for (const button of page.extra_buttons) {
        expect(button.label.length).toBeLessThanOrEqual(100);
        expect(targets.has(button.href)).toBe(false);
        targets.add(button.href);
        expect(
          feed.pages.some(
            (target: { path: string }) => target.path === button.href
          )
        ).toBe(true);
      }
    }
    expect(
      feed.pages.find(
        (page: { path: string }) => page.path === '/docs/travel/waystones/'
      ).icon
    ).toBe('minecraft:item/ender_pearl');
    expect(
      feed.pages.find(
        (page: { path: string }) => page.path === '/docs/travel/waystones/'
      ).markdown
    ).toContain('/docs/travel/warp-scrolls/');
  });
});
