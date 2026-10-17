import type { RequestHandler } from '@qwik.dev/router';
import { getMarkdownItems } from '../../docs/layout';
import { buildMenu } from '~/components/docs';

/** Versioned public handbook feed. Markdown is bundled at build time, never read from user paths. */
export const onGet: RequestHandler = async ({ json, cacheControl }) => {
  const metadata = await getMarkdownItems();
  const sources = import.meta.glob<string>(
    '/src/routes/docs/**/index.{md,mdx}',
    {
      query: '?raw',
      import: 'default',
      eager: true,
    }
  );
  const pages = Object.entries(sources).flatMap(([file, source]) => {
    const path = file.replace('/src/routes', '').replace(/index\.mdx?$/, '');
    const entry = metadata[path];
    if (!entry) return [];
    return [
      {
        path,
        ...entry,
        markdown: source.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, ''),
      },
    ];
  });
  cacheControl({ public: true, maxAge: 300 });
  json(200, { version: 1, menu: buildMenu(metadata), pages });
};
