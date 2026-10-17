/// <reference types="vite/client" />
import { describe, expect, it } from 'vite-plus/test';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { filterDocsAudience } from '../src/components/docs/docs-audience';
import { remarkDocsAudience } from '../src/components/docs/remark-docs-audience';

const source = `Shared introduction.
{/* audience:website */}
Use the sidebar.
{/* /audience */}
{/* audience:minecraft */}
Use /guide.
{/* /audience */}
Shared ending.
`;

describe('documentation audiences', () => {
  it('has valid audience sections throughout the documentation', () => {
    const files = import.meta.glob<string>(
      '/src/routes/docs/**/index.{md,mdx}',
      { query: '?raw', import: 'default', eager: true }
    );
    expect(Object.keys(files).length).toBeGreaterThan(50);
    for (const [file, source] of Object.entries(files)) {
      for (const audience of ['website', 'minecraft'] as const) {
        const filtered = filterDocsAudience(source, audience);
        expect(filtered.trim(), `${file}: ${audience}`).not.toBe('');
        expect(filtered, file).not.toMatch(/\{\/\*\s*(?:audience:|\/audience)/);
        if (audience === 'minecraft') {
          expect(filtered, file).not.toMatch(/<img\b/);
          expect(filtered, file).not.toMatch(/\]\(\/(?!docs\/)/);
          expect(filtered, file).not.toContain(
            'The sidebar groups related guides'
          );
        }
      }
    }
  });

  it('keeps shared content and selects either audience', () => {
    for (const audience of ['website', 'minecraft'] as const) {
      const result = filterDocsAudience(source, audience);
      expect(result).toContain('Shared introduction.');
      expect(result).toContain('Shared ending.');
      expect(result).not.toContain('{/*');
      expect(result).toContain(audience === 'website' ? 'sidebar' : '/guide');
      expect(result).not.toContain(
        audience === 'website' ? '/guide' : 'sidebar'
      );
    }
  });
  it('preserves literal markers inside code fences and accepts CRLF', () => {
    const example =
      '```md\n{/* audience:minecraft */}\nexample\n{/* /audience */}\n```\n';
    expect(filterDocsAudience(example, 'website')).toBe(example);
    expect(
      filterDocsAudience(source.replaceAll('\n', '\r\n'), 'minecraft')
    ).toContain('/guide');
  });
  it('rejects unmatched markers', () => {
    expect(() => filterDocsAudience('{/* /audience */}', 'website')).toThrow();
    expect(() =>
      filterDocsAudience('{/* audience:website */}', 'website')
    ).toThrow();
  });
  it('removes Minecraft content from the website Markdown tree', () => {
    const processor = unified().use(remarkParse).use(remarkDocsAudience);
    const tree = processor.runSync(processor.parse(source), { value: source });
    const rendered = JSON.stringify(tree);
    expect(rendered).toContain('Use the sidebar.');
    expect(rendered).not.toContain('Use /guide.');
  });
});
