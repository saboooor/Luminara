import type { RequestHandler } from '@qwik.dev/router';
import { getMarkdownItems } from '../../docs/layout';
import { buildMenu } from '~/components/docs';
import {
  docsVisibleTo,
  filterDocsAudience,
} from '~/components/docs/docs-audience';

/** Versioned public handbook feed. Markdown is bundled at build time, never read from user paths. */
export const onGet: RequestHandler = async ({ json, cacheControl }) => {
  const allMetadata = await getMarkdownItems('minecraft');
  const metadata = Object.fromEntries(
    Object.entries(allMetadata).filter(([, entry]) =>
      docsVisibleTo(entry.audience, 'minecraft')
    )
  );
  const visiblePaths = new Set(Object.keys(metadata));
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
        extra_buttons: entry.extra_buttons?.filter((button) =>
          visiblePaths.has(button.href)
        ),
        markdown: filterDocsAudience(
          source.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, ''),
          'minecraft'
        ),
      },
    ];
  });
  cacheControl({ public: true, maxAge: 300 });
  json(200, { version: 1, menu: buildMenu(metadata), pages });
};
