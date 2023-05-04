import { Resource, component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { Link } from 'qwik-ionicons';

export const Markdown = component$<any>(({ mdContent, extraClass }) => (
  <>
    {unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(mdContent)
      .then((file: any) => {
        let str = String(file);
        str.match(/&#x3C;(a?):(\w+):(\d+)>/g)?.forEach((match: string) => {
          const emoji = match.match(/&#x3C;(a?):\w+:(\d+)>/)!;
          const animated = emoji[1] == 'a';
          const id = emoji[2];
          str = str.replace(match, `<img src="https://cdn.discordapp.com/emojis/${id}.${animated ? 'gif' : 'png'}" class="inline h-5" />`);
        });
        str.match(/\|\|([\s\S]*)\|\|/g)?.forEach((match: string) => {
          const spoiler = match.match(/\|\|([\s\S]*)\|\|/)!;
          str = str.replace(match, `<p class="bg-gray-500 text-gray-500 cursor-pointer spoiler">${spoiler[1]}</p>`);
        });
        return <div dangerouslySetInnerHTML={str} class={`whitespace-pre-line [&>p>a]:text-blue-400 [&>p>a]:hover:underline ${extraClass}`} />;
      },
      )}
  </>
));

export const useAnnouncements = routeLoader$(async () => {
  const announcements = await fetch('https://loona.luminescent.dev/announcements/');
  const json = await announcements.json();
  return json;
});

export default component$(() => {
  const announcements = useAnnouncements();

  const store: {
    notifications: {
      title: string;
      content: string;
    }[];
    sort: 'newest' | 'oldest';
    changed: boolean;
  } = useStore({
    notifications: [],
    sort: 'newest',
    changed: false,
  });

  useVisibleTask$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(50px)';
    backDrop.style.transform = 'scale(1.5)';

    const spoilers = document.getElementsByClassName('spoiler');
    for (let i = 0; i < spoilers.length; i++) {
      const spoiler = spoilers[i];
      spoiler.addEventListener('click', () => {
        spoiler.classList.toggle('text-gray-500');
      });
    }
  });

  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 mt-24">
      <div class="font-bold text-orange-100 text-3xl sm:text-4xl mb-6 items-center justify-center drop-shadow-xl">
        <h1 class="mb-4">
          <span class="text-red-400">Nether Depths</span> Announcements
        </h1>
        <p class="font-normal text-xl">
          Here you will find the latest announcements from Nether Depths.<br/>
          This is based on the announcements channel in the <a href='https://discord.gg/2Z8qZ9Y' class="text-blue-400">Discord Server</a>.
        </p>
        <div class="flex">
          <button class="mt-4 px-4 py-2 rounded-lg mb-6 sm:mb-14 text-lg bg-red-400/60 hover:bg-red-500/60 transition cursor-pointer" onClick$={() => { store.sort = store.sort == 'newest' ? 'oldest' : 'newest'; }}>
            Sort by: {store.sort}
          </button>
        </div>

        <Resource
          value={announcements}
          onPending={() => <span class="flex-1 ml-3">Loading...</span>}
          onRejected={() => <span class="flex-1 ml-3">Error</span>}
          onResolved={(articleList) => {
            if (store.sort != 'newest') store.changed = true;
            if (store.changed) articleList.reverse();
            return (
              <div class="flex flex-col gap-3 sm:gap-5">
                {
                  articleList.map((announcementArticle: any) => {
                    const announcement = announcementArticle[0];
                    let lastUser = announcement.author.name;
                    return <>
                      <span id={announcement.id} class="pointer-events-none block h-24 -mt-24" />
                      <article class="bg-black/30 border-black/30 border-2 p-4 sm:p-8 rounded-xl text-lg font-normal max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                        <div class="flex items-start mb-4">
                          <div class="flex-1 text-xl font-bold md:text-2xl justify-start">
                            <div class="flex items-center gap-2 mb-4">
                              <p style={{ backgroundColor: announcement.author.topRole.color }} class="text-xs md:text-sm px-2 py-1 rounded-md">{announcement.author.topRole.name}</p>
                              <p class="text-xs md:text-sm font-light whitespace-nowrap">{new Date(announcement.createdAt).toLocaleString()}</p>
                            </div>
                            <div class="flex items-center gap-2">
                              <img src={announcement.author.av} class="w-6 h-6 md:w-10 md:h-10 md:mr-2" style="border-radius: 50%" />
                              <p>{announcement.author.name}</p>
                            </div>
                          </div>
                          <Link width="24" class="fill-current cursor-pointer" onClick$={() => {
                            navigator.clipboard.writeText(`https://netherdepths.com/announcements#${announcement.id}`);
                            store.notifications.push({
                              title: 'Copied Successfully!',
                              content: 'The link to this announcement has been copied to your clipboard.',
                            });
                            setTimeout(() => {
                              store.notifications.shift();
                            }, 5000);
                          }} />
                        </div>
                        <Markdown mdContent={announcement.content} extraClass="text-base md:text-lg break-all" />

                        { announcementArticle.length > 1 &&
                          <>
                            <br/>
                            <hr class="mb-1 border-gray-900/70 border" />
                          </>
                        }

                        {
                          announcementArticle.map((comment: any) => {
                            if (comment == announcement) return;
                            const diffUser = lastUser == comment.author.name;
                            if (!diffUser) lastUser = comment.author.name;
                            return <>
                              <span id={comment.id} class="pointer-events-none block h-24 -mt-24" />
                              <div class={`group ${diffUser ? 'mt-2' : 'mt-4'}`}>
                                { !diffUser &&
                                  <div class="text-sm font-semibold md:text-lg mb-2">
                                    <div class="flex items-center gap-2 mb-2">
                                      <img src={comment.author.av} class="w-4 h-4 md:w-6 md:h-6 md:mr-1" style="border-radius: 50%" />
                                      <p>{comment.author.name}</p>
                                      <p style={{ backgroundColor: comment.author.topRole.color }} class="text-xs px-2 py-1 rounded-md">{comment.author.topRole.name}</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                      <p class="text-xs font-light whitespace-nowrap">{new Date(comment.createdAt).toLocaleString()}</p>
                                    </div>
                                  </div>
                                }
                                <div class="flex items-center gap-2">
                                  <Markdown mdContent={comment.content} extraClass="text-xs md:text-sm" />
                                  <Link width="16" class="fill-current justify-end cursor-pointer hidden group-hover:flex" onClick$={() => {
                                    navigator.clipboard.writeText(`https://netherdepths.com/announcements#${comment.id}`);
                                    store.notifications.push({
                                      title: 'Copied Successfully!',
                                      content: 'The link to this comment has been copied to your clipboard.',
                                    });
                                    setTimeout(() => {
                                      store.notifications.shift();
                                    }, 5000);
                                  }} />
                                </div>
                              </div>
                            </>;
                          })
                        }
                      </article>
                    </>;
                  })
                }
              </div>
            );
          }}
        />
      </div>
      { store.notifications.length &&
        <div class="fixed block bottom-4 right-4 px-4 py-3 rounded-lg bg-green-500/50 backdrop-blur-xl">
          {
            store.notifications.map((notification, i) => (
              <div key={i}>
                <p class="font-bold text-white text-2xl">{notification.title}</p>
                <p class="font-normal text-gray-100 text-lg">{notification.content}</p>
              </div>
            ))
          }
        </div>
      }
    </section>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const articleList = resolveValue(useAnnouncements);
  const announcement = articleList[0][0].content;
  return {
    title: 'Announcements',
    meta: [
      {
        name: 'description',
        content: announcement,
      },
      {
        property: 'og:description',
        content: announcement,
      },
    ],
  };
};