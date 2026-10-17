import {
  component$,
  useStore,
  useSignal,
  $,
  useVisibleTask$,
  useOnDocument,
  type Signal,
} from '@qwik.dev/core';
import { type ContentMenu, Link, useLocation } from '@qwik.dev/router';
import { useMarkdownItems } from '~/routes/docs/layout';
import { buildMenu, searchGuides } from '.';
import { MenuItems } from './Menuitems';
import Book from 'lucide-icons-qwik/icons/Book';
import Search from 'lucide-icons-qwik/icons/Search';

export const DocsSidebar = component$<{ sideMenuOpen: Signal<boolean> }>(
  ({ sideMenuOpen }) => {
    const store = useStore({
      scrollPosition: 0,
    });

    const { url } = useLocation();
    const markdownItems = useMarkdownItems();
    const menuItems = buildMenu(markdownItems.value);
    const query = useSignal('');
    const pathname = `${url.pathname.replace(/\/$/, '')}/`;
    const searching = query.value.trim().length > 0;
    const results = searching
      ? searchGuides(markdownItems.value, query.value)
      : [];

    const saveScrollPosition = $(() => {
      sideMenuOpen.value = false;
      try {
        const scrollTop =
          document.getElementById('docs-sidebar')?.scrollTop || 0;
        sessionStorage.setItem('docs-sidebar', String(scrollTop));
        store.scrollPosition = scrollTop;
      } catch (err) {
        console.error('Error saving sidebar scroll position:', err);
      }
    });

    // oxlint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
      try {
        const val = sessionStorage.getItem('docs-sidebar');
        const savedScroll = !val || /null|NaN/.test(val) ? 0 : +val;
        const el = document.getElementById('docs-sidebar');
        if (el) {
          el.scrollTop = savedScroll;
          store.scrollPosition = savedScroll;
        }

        const handleResize = () => {
          if (window.innerWidth >= 1024 && sideMenuOpen.value) {
            sideMenuOpen.value = false;
          }
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      } catch (err) {
        console.error('Error loading sidebar scroll position:', err);
      }
    });

    useOnDocument(
      'click',
      $((event) => {
        if (!sideMenuOpen.value) return;
        const insideMenu = event
          .composedPath()
          .some(
            (target) =>
              target instanceof Element &&
              (target.id === 'docs-sidebar' || target.id === 'docs-menu-toggle')
          );
        if (!insideMenu) sideMenuOpen.value = false;
      })
    );
    useOnDocument(
      'keydown',
      $((event) => {
        if (event.key === 'Escape') sideMenuOpen.value = false;
      })
    );

    return (
      <aside class="lg:lum-card lg:lum-grad-bg-gray-900/50 fixed top-40 left-4 z-40 max-w-[calc(100vw-2rem)] px-0 pt-0 pb-0 lg:inset-y-24 lg:top-24 lg:left-12 lg:w-1/6 lg:px-6 lg:pt-20 lg:backdrop-blur-lg">
        <div
          id="docs-sidebar"
          class="relative flex min-h-0 flex-col lg:h-full lg:gap-4 lg:overflow-y-auto"
        >
          <div class="hidden items-center gap-3 border-b border-gray-700 px-2 py-3 lg:flex">
            <Book />
            <h5 class="flex-1">Documentation</h5>
          </div>
          <div
            class={{
              'lum-card lum-grad-bg-gray-900/50 lg:lum-bg-transparent absolute top-full left-0 mt-0 flex max-h-[calc(100dvh-14rem)] w-72 max-w-[calc(100vw-2rem)] gap-3 overflow-y-auto p-4 backdrop-blur-lg transition-all lg:static lg:mt-0 lg:max-h-none lg:w-full lg:max-w-full lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-none lg:p-0 lg:backdrop-blur-none': true,
              'pointer-events-none -translate-y-2 opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100':
                !sideMenuOpen.value,
            }}
          >
            <div class="flex items-center gap-3">
              <Search size={24} />
              <input
                type="search"
                aria-label="Search player guides"
                placeholder="Search guides..."
                bind:value={query}
                aria-controls="docs-search-results"
                class="lum-input lum-btn-p-1 w-full"
              />
            </div>

            {searching ? (
              <div id="docs-search-results" class="flex flex-col gap-2">
                <p role="status" class="text-sm text-gray-400">
                  {results.length
                    ? `${results.length} guides found`
                    : 'No guides found. Try travel, claims, fishing, or tags.'}
                </p>
                {results.map(([href, item]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick$={saveScrollPosition}
                    class="lum-btn lum-bg-transparent flex-col items-start text-left"
                    aria-current={href === pathname ? 'page' : undefined}
                  >
                    <span>{item.title}</span>
                    <span class="text-xs text-gray-400">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            ) : menuItems.length > 0 ? (
              <MenuItems
                key={pathname}
                items={menuItems}
                pathname={pathname}
                markdownItems={markdownItems.value}
                onClick$={saveScrollPosition}
              />
            ) : (
              <div class="py-4 text-center">
                <p>No documentation found</p>
                <p class="mt-2 text-sm">
                  Add markdown files to your docs directory
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    );
  }
);

export function createBreadcrumbs(
  menu: ContentMenu | undefined,
  pathname: string
) {
  if (!menu?.items) return [];

  function findPath(
    items: ContentMenu[],
    path: ContentMenu[] = []
  ): ContentMenu[] | null {
    for (const item of items) {
      if (item.href === pathname) {
        return [...path, item];
      }

      if (item.items?.length) {
        const result = findPath(item.items, [...path, item]);

        if (result) return result;
      }
    }

    return null;
  }

  const result = findPath(menu.items);
  return result || [];
}
