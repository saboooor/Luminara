import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useTask$,
  type Signal,
} from '@qwik.dev/core';
import { type ContentMenu, Link, useLocation } from '@qwik.dev/router';
import { createBreadcrumbs } from '~/components/docs/SideBar';
import { buildMenu } from '.';
import { useMarkdownItems } from '~/routes/docs/layout';
import ChevronDown from 'lucide-icons-qwik/icons/ChevronDown';
import ChevronRight from 'lucide-icons-qwik/icons/ChevronRight';
import Book from 'lucide-icons-qwik/icons/Book';
import Home from 'lucide-icons-qwik/icons/Home';

const BreadcrumbItem = component$<{
  item: ContentMenu;
  choices: ContentMenu[];
  pathname: string;
  current?: boolean;
  home?: boolean;
}>(({ item, choices, pathname, current, home }) => {
  const opened = useSignal(false);
  const container = useSignal<HTMLElement>();
  const toggle = useSignal<HTMLButtonElement>();
  const id = `docs-breadcrumb-${home ? 'home' : item.href?.replace(/[^a-z0-9]/gi, '-')}`;

  useTask$(({ track }) => {
    track(() => pathname);
    opened.value = false;
  });

  useOnDocument(
    'click',
    $((event) => {
      if (!event.composedPath().includes(container.value!))
        opened.value = false;
    })
  );

  return (
    <div
      ref={container}
      class="flex min-w-0 items-center gap-1"
      onKeyDown$={(event) => {
        if (event.key === 'Escape' && opened.value) {
          opened.value = false;
          toggle.value?.focus();
        }
      }}
      onFocusOut$={(event) => {
        if (!container.value?.contains(event.relatedTarget as Node | null)) {
          opened.value = false;
        }
      }}
    >
      {!home && <ChevronRight class="h-4 w-4 shrink-0 text-gray-400" />}
      <Link
        href={item.href}
        aria-label={home ? 'Documentation home' : undefined}
        aria-current={current ? 'page' : undefined}
        class={{
          'lum-btn rounded-lum-1 min-w-0 text-sm whitespace-normal': true,
          'lum-bg-transparent': !current,
          'lum-grad-bg-lum-accent/30': !!current,
        }}
      >
        {home ? <Home size={19} /> : item.text}
      </Link>
      {choices.length > 0 && (
        <>
          <button
            ref={toggle}
            id={`${id}-toggle`}
            type="button"
            class="lum-btn lum-bg-transparent rounded-lum-1 shrink-0 p-1"
            aria-label={
              home ? 'Browse documentation sections' : `Navigate ${item.text}`
            }
            aria-expanded={opened.value}
            aria-controls={id}
            onClick$={() => {
              opened.value = !opened.value;
            }}
          >
            <ChevronDown size={16} class={opened.value ? 'rotate-180' : ''} />
          </button>
          <div
            id={id}
            hidden={!opened.value}
            style={{ display: opened.value ? undefined : 'none' }}
            aria-labelledby={`${id}-toggle`}
            class="lum-card lum-grad-bg-gray-900 absolute top-full left-0 mt-2 max-h-[min(24rem,60dvh)] w-80 max-w-[calc(100vw-2rem)] overflow-y-auto p-2 shadow-xl"
          >
            {choices.map((choice) => (
              <Link
                key={choice.href}
                href={choice.href}
                aria-current={choice.href === pathname ? 'page' : undefined}
                class={{
                  'lum-btn rounded-lum-1 w-full justify-start text-left text-sm whitespace-normal': true,
                  'lum-bg-transparent': choice.href !== pathname,
                  'lum-grad-bg-lum-accent/30': choice.href === pathname,
                }}
                onClick$={() => {
                  opened.value = false;
                }}
              >
                {choice.text}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
});

export const Breadcrumbs = component$<{ sideMenuOpen: Signal<boolean> }>(
  ({ sideMenuOpen }) => {
    const { url } = useLocation();
    const markdownItems = useMarkdownItems();
    const pathname = `${url.pathname.replace(/\/$/, '')}/`;
    const menuItems = buildMenu(markdownItems.value);
    const breadcrumbs = createBreadcrumbs(
      { text: 'Root', items: menuItems },
      pathname
    );

    return (
      <nav
        class="lum-card lum-grad-bg-gray-900/50 lum-btn-p-2 fixed top-24 left-4 z-50 w-fit max-w-[calc(100vw-2rem)] flex-row items-center gap-1 p-2 text-sm backdrop-blur-lg lg:left-[calc(100%/6+4rem)] lg:max-w-[calc(100vw-24rem)]"
        aria-label="Breadcrumb"
      >
        <button
          id="docs-menu-toggle"
          type="button"
          class="lum-btn lum-bg-transparent rounded-lum-1 shrink-0 p-2 lg:hidden"
          aria-label="Toggle documentation menu"
          aria-expanded={sideMenuOpen.value}
          aria-controls="docs-sidebar"
          onClick$={() => {
            sideMenuOpen.value = !sideMenuOpen.value;
          }}
        >
          <Book size={19} />
        </button>
        <div class="flex min-w-0 flex-wrap items-center gap-1">
          <BreadcrumbItem
            home
            item={{ text: 'Documentation', href: '/docs/' }}
            choices={menuItems}
            pathname={pathname}
            current={pathname === '/docs/'}
          />
          {breadcrumbs
            .filter((crumb) => crumb.href !== '/docs/')
            .map((crumb, index) => (
              <BreadcrumbItem
                key={crumb.href}
                item={crumb}
                choices={
                  (index === 0 ? menuItems : breadcrumbs[index - 1].items) || []
                }
                pathname={pathname}
                current={crumb.href === pathname}
              />
            ))}
        </div>
      </nav>
    );
  }
);
