import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export const Markdown = component$<any>(({ mdContent, extraClass }: any) => (
  <>
    {unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(mdContent)
      .then((file: any) => {
        let str = String(file);
        str.match(/&#x3C;(a?):(\w+):(\d+)>/g)?.forEach((match) => {
          const emoji = match.match(/&#x3C;(a?):\w+:(\d+)>/)!;
          const animated = emoji[1] == 'a';
          const id = emoji[2];
          str = str.replace(match, `<img src="https://cdn.discordapp.com/emojis/${id}.${animated ? 'gif' : 'png'}" class="inline h-5" />`);
        });
        str.match(/\|\|([\s\S]*)\|\|/g)?.forEach((match) => {
          const spoiler = match.match(/\|\|([\s\S]*)\|\|/)!;
          str = str.replace(match, `<p class="bg-gray-500 text-gray-500 cursor-pointer spoiler">${spoiler[1]}</p>`);
        });
        str.match(/<t:(\d{1,13})(:t)?(:R)?>/g)?.forEach((match) => {
          const date = new Date(Number(match.match(/<t:(\d{1,13})(:t)?(:R)?>/)![1]) * 1000);
          const string = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
          str = str.replace(match[0], `**${string}**`);
        });
        str.match(/<t:(\d{1,13}):F>/g)?.forEach((match) => {
          const date = new Date(Number(match.match(/<t:(\d{1,13}):F>/)![1]) * 1000);
          const string = date.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
          str = str.replace(match[0], `**${string}**`);
        });
        str.match(/<t:(\d{1,13}):d>/g)?.forEach((match) => {
          const date = new Date(Number(match.match(/<t:(\d{1,13}):d>/)![1]) * 1000);
          const string = date.toLocaleString('default', { month: 'numeric', day: 'numeric', year: 'numeric' });
          str = str.replace(match[0], `**${string}**`);
        });
        str.match(/<t:(\d{1,13}):D>/g)?.forEach(match => {
          const date = new Date(Number(match.match(/<t:(\d{1,13}):D>/)![1]) * 1000);
          const string = date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
          str = str.replace(match[0], `**${string}**`);
        });
        str.match(/<t:(\d{1,13}):t>/g)?.forEach(match => {
          const date = new Date(Number(match.match(/<t:(\d{1,13}):t>/)![1]) * 1000);
          const string = date.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hour12: true });
          str = str.replace(match[0], `**${string}**`);
        });
        str.match(/<t:(\d{1,13}):T>/g)?.forEach(match => {
          const date = new Date(Number(match.match(/<t:(\d{1,13}):T>/)![1]) * 1000);
          const string = date.toLocaleString('default', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
          str = str.replace(match[0], `**${string}**`);
        });
        return <div dangerouslySetInnerHTML={str} class={`whitespace-pre-line [&>p>a]:text-blue-400 [&>p>a]:hover:underline ${extraClass}`} />;
      })
    }
  </>
));

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 mt-24">
      <div class="font-bold text-orange-100 text-3xl sm:text-4xl mb-6 items-center justify-center">
        <h1 class="mb-4 shadow-outline">
          <span class="text-red-400">Nether Depths</span> - Important Announcement
        </h1>
        <div class="flex flex-col gap-3">
          <article class="bg-black/30 border-black/30 border p-4 sm:p-8 rounded-xl text-lg font-normal max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            <h1 class="font-bold italic">
              This is going to be a pretty big one to take in
            </h1><br/>
            <p>
              Hello, I hope you all are having a good morning/afternoon/evening/night.
            </p><br/>
            <p>
              It is with great difficulty that I have to let this Minecraft server pass and have a peaceful shut down.<br/>
              Ever since 1.19 myself and the rest of the admins have been feeling more and more dismotivated and drained due to but not limited to:
            </p>
            <p>
              1. Mojang’s big, let alone possibly controversial changes, to multiplayer.<br/>
              2. Constant requirement of maintenance of the Minecraft server whether it be staffing, plugin updates, fixing bugs, or keeping the Minecraft server active beyond its 2-month point of a new release.<br/>
              3. Lack of active player retention especially during the downtimes of the server<br/>
              4. The big gap of time where players are too busy to play during the school year<br/>
              5. COVID lockdown was also partially the reason Nether Depths thrived, but that has now passed and it’s once again really hard to get new players<br/>
              6. The pressure of having to deal with moderating both the Discord server and Minecraft server at the same time
            </p><br/>
            <p>
              I’ve kept this Minecraft server after 1.19 because specifically the current players enjoyed it and I did not want to make them lose (yet another) Minecraft server and wanted to keep the community together on Minecraft, but ever since 1.20 released, myself and the rest of the admins have gotten a multitude of things to do whether it be college or work and been feeling exponentially more drained of maintaining this server.
            </p><br/>
            <p>
              The Discord server (joinable from <a href="https://discord.gg/Mw7fNpdg5N">https://discord.gg/Mw7fNpdg5N</a> will still stay as a regular non-minecraft community server as it is already kind of being used as one anyway.
            </p><br/>
            <p>
              If you want a Minecraft server to play on as well, I’d recommend Acorn SMP (this server finally reached a full circle back to its origin lmao) which you can join through play.acornmc.org ( discord.gg/CRBQKYA ) or Taco Haven, which is also branched from Acorn which you can also join through mc.tacohaven.org ( discord.gg/rJhCUU3 )
            </p><br/>
            <p>
              September 15th will be the last day the Minecraft server will stay online. Once the server is shut down a world download will be made public and all the playerdata and plugins will be archived locally in case we decide to re-open the server (almost unlikely, but partially also for memories sake)
            </p><br/>
            <p>
              All ranks will be moved into a Discord-based message system instead of a Minecraft-based vote system, all information regarding rank migration etc. will be posted soon so stay tuned.
            </p><br/>
            <p>
              Thank you all so much for being such a great Minecraft community and server over the past 4 years, I really appreciate the friendliness and the memories I made in this server. Most of my goal when I made this server was to meet new people, make new friends, and make many memories, and the goal has been achieved and from the bottom of my heart I want to say thank you. I love you all, the reason why I want to keep this as a regular Discord community is because I believe that we can still achieve that goal even more but without the Minecraft aspect of it.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Nether Depths',
};