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
          { title, icon },
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
    const introduction = feed.pages.find(
      (page: { path: string }) => page.path === '/docs/'
    ).markdown;
    expect(introduction).not.toContain('The sidebar');
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
