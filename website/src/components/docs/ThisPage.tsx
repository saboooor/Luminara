import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import { useContent, useDocumentHead } from '@builder.io/qwik-city';
import { Clock } from 'lucide-icons-qwik';

const formatDate = (dateStr?: string): string => {
  if (!dateStr) return 'Unknown';

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
  useOnDocument('scroll', $(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId.value = entry.target.id;
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' },
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
  }));

  return (
    <aside
      class='hidden xl:flex w-1/6 fixed inset-y-24 right-12 lum-card z-[40] pt-14 sm:pt-20 px-0 sm:px-6 pb-0'
    >
      {contentHeadings.length > 0 ? (
        <>
          <h6 class="py-3 border-b border-b-gray-700">On this page</h6>
          <div class="flex flex-col gap-1 overflow-y-scroll relative">
            {contentHeadings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                class={{
                  'lum-btn text-ellipsis lum-bg-transparent whitespace-normal text-left': true,
                  'text-pink-300!': activeId.value === h.id,
                  'font-bold text-xl': h.level == 1,
                  'font-medium text-lg': h.level == 2,
                  'font-normal text-base': h.level == 3,
                }}
              >
                {h.text}
              </a>
            ))}
          </div>
        </>
      ) : null}

      {updated !== 'Unknown' && updated !== created && (
        <div
          class='lum-btn text-ellipsis lum-bg-transparent hover:lum-bg-transparent text-lum-text-secondary text-left'
        >
          <Clock size={20} />
          <span>Last Updated:<br/>{updated}</span>
        </div>
      )}
    </aside>
  );
});