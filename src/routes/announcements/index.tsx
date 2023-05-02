import { Resource, component$, useVisibleTask$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

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
        return <div dangerouslySetInnerHTML={str} class={`whitespace-pre-line [&>p>a]:text-blue-400 [&>p>a]:hover:underline ${extraClass}`} />;
      },
      )}
  </>
));

export const useAnnouncements = routeLoader$(async () => {
  const announcements = await fetch('https://loona.luminescent.dev/announcements/');
  const json = await announcements.json();
  console.log(json);
  return json;
});

export default component$(() => {
  const announcements = useAnnouncements();

  useVisibleTask$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(50px)';
    backDrop.style.transform = 'scale(1.5)';
  });

  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 mt-24">
      <div class="font-bold text-orange-100 text-3xl sm:text-4xl mb-6 items-center justify-center drop-shadow-xl">
        <h1 class="mb-4">
          <span class="text-red-400">Nether Depths</span> Announcements
        </h1>
        <p class="mb-6 sm:mb-14 font-normal text-xl">
          Here you will find the latest announcements from Nether Depths in order from newest to oldest.<br/>
          The announcements here are based on the announcements channel in the <a href='https://discord.gg/2Z8qZ9Y' class="text-blue-400">Discord Server</a>.
        </p>

        <Resource
          value={announcements}
          onPending={() => <span class="flex-1 ml-3">Loading...</span>}
          onRejected={() => <span class="flex-1 ml-3">Error</span>}
          onResolved={(announcementList) => {
            return (
              <div class="grid gap-5">
                {
                  announcementList.map((announcement: any) => (
                    <div key={`${announcement.createdAt}`} class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                      <h2 class="text-xl font-bold sm:text-2xl mb-4">{announcement.name} <span class="text-sm">{new Date(announcement.createdAt).toLocaleString()}</span></h2>
                      <Markdown mdContent={announcement.content} extraClass="text-lg" />
                    </div>
                  ))
                }
              </div>
            );
          }}
        />
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Rules',
};
