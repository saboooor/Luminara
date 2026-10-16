import { $, component$, useOnDocument, useSignal } from '@qwik.dev/core';
import { useContent, useDocumentHead } from '@qwik.dev/router';
import Clock from 'lucide-icons-qwik/icons/Clock';

const formatDate = (dateStr: unknown): string => {
  if (typeof dateStr !== 'string' || !dateStr) return 'Unknown';

  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return 'Unknown';
  }
};

export const OnThisPage = component$(() => {
  const { headings } = useContent();
  const contentHeadings = headings?.filter((h) => h.level <= 3) || [];
  const { frontmatter } = useDocumentHead();
  const created = formatDate(frontmatter.date_created);
  const updated = formatDate(frontmatter.last_updated);

  const activeId = useSignal<string | null>(null);
  const itemIds = contentHeadings.map((h) => h.id);
  useOnDocument(
    'scroll',
    $(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeId.value = entry.target.id;
            }
          });
        },
        { rootMargin: '0% 0% -80% 0%' }
      );

      itemIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      return () => {
        itemIds.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    })
  );

  return (
    <aside class="lum-card lum-grad-bg-gray-900/50 fixed inset-y-24 right-12 z-[40] hidden w-1/6 px-0 pt-14 pb-0 backdrop-blur-lg sm:px-6 sm:pt-20 xl:flex">
      {contentHeadings.length > 0 ? (
        <>
          <h6 class="border-b border-b-gray-700 py-3">On this page</h6>
          <div class="relative flex flex-col gap-1 overflow-y-scroll">
            {contentHeadings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                class={{
                  'lum-btn lum-bg-transparent text-left text-ellipsis whitespace-normal': true,
                  'text-pink-300!': activeId.value === h.id,
                  'text-xl font-bold': h.level == 1,
                  'text-lg font-medium': h.level == 2,
                  'text-base font-normal': h.level == 3,
                }}
              >
                {h.text}
              </a>
            ))}
          </div>
        </>
      ) : null}

      {updated !== 'Unknown' && updated !== created && (
        <div class="lum-btn lum-bg-transparent hover:lum-bg-transparent text-lum-text-secondary text-left text-ellipsis">
          <Clock size={20} />
          <span>
            Last Updated:
            <br />
            {updated}
          </span>
        </div>
      )}
    </aside>
  );
});
