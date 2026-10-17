import {
  docsVisibleTo,
  type DocsAudience,
} from '~/components/docs/docs-audience';
import { component$, Slot, useSignal } from '@qwik.dev/core';
import { routeLoader$, useLocation } from '@qwik.dev/router';
import { Breadcrumbs } from '~/components/docs/Breadcrumbs';
import { DocsSidebar } from '~/components/docs/SideBar';
import Contributors from '~/components/docs/Contributors';
import { OnThisPage } from '~/components/docs/ThisPage';

import {
  type MarkdownItems,
  type GuideMetadata,
} from '~/components/docs/types';
export type { MarkdownItems } from '~/components/docs/types';

export const getMarkdownItems = async (audience: DocsAudience = 'website') => {
  const rawData = await Promise.all(
    Object.entries(
      import.meta.glob<{ frontmatter?: GuideMetadata }>(
        '/src/routes/docs/**/*.{md,mdx}'
      )
    ).map(async ([k, v]) => {
      return [
        k
          .replace('/src/routes', '')
          .replace('index.mdx', '')
          .replace('index.md', ''),
        await v(),
      ] as const;
    })
  );

  const markdownItems: MarkdownItems = {};
  rawData.forEach(([k, v]) => {
    // skip marksdown cheatsheet and extras
    if (k.includes('extras')) return;
    if (v.frontmatter && docsVisibleTo(v.frontmatter.audience, audience)) {
      markdownItems[k] = {
        title: v.frontmatter.title,
        audience: v.frontmatter.audience,
        icon: v.frontmatter.icon,
        extra_buttons: v.frontmatter.extra_buttons,
        description: v.frontmatter.description,
        keywords: v.frontmatter.keywords,
        contributors: v.frontmatter.contributors,
        date_created: v.frontmatter.date_created,
        last_updated: v.frontmatter.last_updated,
      };
    }
  });
  return markdownItems;
};

export const useMarkdownItems = routeLoader$(async ({ url, error }) => {
  const metadata = await getMarkdownItems();
  const path = `${url.pathname.replace(/\/$/, '')}/`;
  if (!metadata[path]) {
    const gameMetadata = await getMarkdownItems('minecraft');
    if (gameMetadata[path]?.audience === 'minecraft')
      throw error(404, 'Guide not available on the website');
  }
  return metadata;
});

export default component$(() => {
  const sideMenuOpen = useSignal(false);
  const markdownItems = useMarkdownItems();
  const { url } = useLocation();
  const currentPath = `${url.pathname.replace(/\/$/, '')}/`;
  const currentItem = Object.entries(markdownItems.value).find(([k]) => {
    return currentPath == k;
  });
  const title = currentItem ? currentItem[1].title : 'Docs';
  return (
    <div class="min-h-dvh pt-20 lg:pl-[calc(100%/6+3rem)] xl:pr-[calc(100%/6+3rem)]">
      <DocsSidebar sideMenuOpen={sideMenuOpen} />
      <Breadcrumbs sideMenuOpen={sideMenuOpen} />
      <main class="markdown mx-auto w-full max-w-4xl min-w-0 px-4 pt-24 pb-24 sm:px-6">
        <article class="docs-content min-w-0 wrap-break-word [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_pre]:max-w-full [&_pre]:overflow-x-auto">
          <h1 class="border-b border-gray-700 pb-4 text-center font-bold">
            {title}
          </h1>
          <Slot />
          <Contributors />
        </article>
      </main>
      <OnThisPage />
    </div>
  );
});
