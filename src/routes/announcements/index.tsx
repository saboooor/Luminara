import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { DocumentHead, RequestEventBase, routeLoader$, server$ } from '@builder.io/qwik-city';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { RESTError, RESTRateLimit, APIMessage, MessageFlags, APIGuildMember, APIRole, APIReaction, FormattingPatterns, APIGuildChannel, ChannelType } from 'discord-api-types/v10';
import { Link } from 'lucide-icons-qwik';
import { Toggle } from '@luminescent/ui-qwik';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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

export const getAnnouncementsFn = server$(async function(props?: RequestEventBase): Promise<APIMessage[] | Error> {
  props = props ?? this;
  const res = await fetch('https://discord.com/api/v10/channels/865523311395864606/messages?limit=100', {
    headers: {
      authorization: `Bot ${props.env.get('BOT_TOKEN')}`,
    },
  }).catch(() => null);
  if (!res) return new Error('Announcements fetch failed');
  const messages: RESTError | RESTRateLimit | APIMessage[] = await res.json();
  if ('retry_after' in messages) {
    console.log(`${messages.message}, retrying after ${messages.retry_after * 1000}ms`);
    await sleep(messages.retry_after * 1000);
    return await getAnnouncementsFn(props);
  }
  if ('code' in messages) return new Error(`Announcements fetch error ${messages.code}: ${messages.message}`);
  return messages;
});

declare interface Member extends APIGuildMember {
  parsedRoles?: APIRole[];
}
type AnyGuildChannel = APIGuildChannel<ChannelType>;

export const getGuildMembersFn = server$(async function(props?: RequestEventBase): Promise<Member[] | Error> {
  props = props ?? this;
  const res = await fetch('https://discord.com/api/v10/guilds/865519986806095902/members?limit=1000', {
    headers: {
      authorization: `Bot ${props.env.get('BOT_TOKEN')}`,
    },
  }).catch(() => null);
  if (!res) return new Error('Guild Members fetch failed');
  const members: RESTError | RESTRateLimit | APIGuildMember[] = await res.json();
  if ('retry_after' in members) {
    console.log(`${members.message}, retrying after ${members.retry_after * 1000}ms`);
    await sleep(members.retry_after * 1000);
    return await getGuildMembersFn(props);
  }
  if ('code' in members) return new Error(`Guild Members fetch error ${members.code}`);
  return members;
});

export const getGuildChannelsFn = server$(async function(props: RequestEventBase): Promise<AnyGuildChannel[] | Error> {
  const res = await fetch('https://discord.com/api/v10/guilds/865519986806095902/channels', {
    headers: {
      authorization: `Bot ${props.env.get('BOT_TOKEN')}`,
    },
  }).catch(() => null);
  if (!res) return new Error('Guild Channel fetch failed');
  const channels: RESTError | RESTRateLimit | any[] = await res.json();
  if ('retry_after' in channels) {
    console.log(`${channels.message}, retrying after ${channels.retry_after * 1000}ms`);
    await sleep(channels.retry_after * 1000);
    return await getGuildChannelsFn(props);
  }
  if ('code' in channels) return new Error(`Guild Channels error ${channels.code}`);
  channels.sort((a, b) => a.position - b.position);
  return channels;
});

export const getGuildRolesFn = server$(async function(props: RequestEventBase): Promise<APIRole[] | Error> {
  const res = await fetch('https://discord.com/api/v10/guilds/865519986806095902/roles', {
    headers: {
      authorization: `Bot ${props.env.get('BOT_TOKEN')}`,
    },
  }).catch(() => null);
  if (!res) return new Error('Guild roles fetch failed');
  const roles: RESTError | RESTRateLimit | APIRole[] = await res.json();
  if ('retry_after' in roles) {
    console.log(`${roles.message}, retrying after ${roles.retry_after * 1000}ms`);
    await sleep(roles.retry_after * 1000);
    return await getGuildRolesFn(props);
  }
  if ('code' in roles) return new Error(`Guild Roles error ${roles.code}`);
  roles.sort((a, b) => a.position - b.position);
  roles.reverse();
  return roles;
});

export const useAnnouncements = routeLoader$(async (props) => {
  const announcementsAPI = await getAnnouncementsFn(props);
  if (announcementsAPI instanceof Error) return announcementsAPI;
  const announcementsJSON = announcementsAPI.map((message) => {
    const urlMatches = [...message.content.matchAll(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g)];
    for (const match of urlMatches) message.content = message.content.replace(match[0], `${match[0].endsWith('.gif') || match[0].endsWith('.png') || match[0].endsWith('.jpg') || match[0].endsWith('.webp') || match[0].endsWith('.mp4') || match[0].endsWith('.mov') || match[0].endsWith('.webm') ? '![Attachment]' : `[${match[0]}]`}(${match[0]})`);

    return {
      ...message,
      member: undefined as undefined | Member | Error,
      crossposted: message.flags! & MessageFlags.Crossposted,
      timestamp: new Date(message.timestamp),
      edited_timestamp: message.edited_timestamp ? new Date(message.edited_timestamp) : null,
    };
  });

  const rolesList = await getGuildRolesFn(props);
  if (rolesList instanceof Error) return rolesList;
  const channelsList = await getGuildChannelsFn(props);
  if (channelsList instanceof Error) return channelsList;
  const membersList = await getGuildMembersFn(props);
  if (membersList instanceof Error) return membersList;

  for (const message of announcementsJSON) {
    const channelMatches = [...message.content.matchAll(new RegExp(FormattingPatterns.Channel, 'g'))];
    for (const match of channelMatches) {
      const channel = channelsList.find((channel) => channel.id == match[1]);
      if (!channel) {
        console.warn(`Channel Id ${match[1]} wasn't found!`);
        message.content = message.content.replace(match[0], '**#Unknown Channel**');
        continue;
      }
      message.content = message.content.replace(match[0], `**#${channel.name}**`);
    }
    const userMatches = [...message.content.matchAll(new RegExp(FormattingPatterns.User, 'g'))];
    for (const match of userMatches) {
      const member = membersList.find((member) => member.user?.id == match[1]);
      if (!member) {
        console.warn(`Member Id ${match[1]} wasn't found!`);
        message.content = message.content.replace(match[0], '**@Unknown Member**');
        continue;
      }
      message.content = message.content.replace(match[0], `**@${member.nick ?? member.user?.username ?? 'Unknown Member'}**`);
    }
    const roleMatches = [...message.content.matchAll(new RegExp(FormattingPatterns.Role, 'g'))];
    for (const match of roleMatches) {
      const role = rolesList.find((role) => role.id == match[1]);
      if (!role) {
        console.warn(`Role Id ${match[1]} wasn't found!`);
        message.content = message.content.replace(match[0], '**@Unknown Role**');
        continue;
      }
      message.content = message.content.replace(match[0], `**@${role.name ?? 'Unknown Role'}**`);
    }

    const member = membersList.find((member) => member.user?.id == message.author.id);
    if (!member) continue;
    message.member = {
      ...member,
      parsedRoles: member.roles.map((roleId) => rolesList.find((role) => role.id == roleId)!),
    };
    message.member.parsedRoles!.sort((a, b) => a.position - b.position);
    message.member.parsedRoles!.reverse();
  }

  return announcementsJSON;
});

export default component$(() => {
  const articleList = useAnnouncements();

  const store: {
    notifications: {
      title: string;
      content: string;
    }[];
    sort: 'newest' | 'oldest';
    changed: boolean;
    onlyPublished: boolean;
  } = useStore({
    notifications: [],
    sort: 'newest',
    changed: false,
    onlyPublished: true,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const spoilers = document.getElementsByClassName('spoiler');
    for (let i = 0; i < spoilers.length; i++) {
      const spoiler = spoilers[i];
      spoiler.addEventListener('click', () => {
        spoiler.classList.toggle('text-gray-500');
      });
    }
  });

  if (articleList.value instanceof Error) return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 mt-24">
      <div class="font-bold text-orange-100 text-3xl sm:text-4xl mb-6 items-center justify-center">
        <h1 class="mb-4 shadow-outline">
          <span class="text-luminescent-400">Luminara SMP</span> Announcements
        </h1>
        <p class="font-normal text-xl shadow-outline">
          Here you will find the latest announcements from Luminara SMP.<br/>
          This is based on the announcements channel in the <a href='https://discord.gg/2Z8qZ9Y' class="text-blue-400">Discord Server</a>.
        </p>
        <p>
          Error: {articleList.value.message}
        </p>
      </div>
    </section>
  );

  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col items-start gap-1">
      <h1 class="shadow-outline text-4xl font-bold text-white mt-10">
        <span class="text-pink-400">Luminara SMP</span> Announcements
      </h1>
      <p class="font-normal text-xl shadow-outline">
        Here you will find the latest announcements from Luminara SMP.<br/>
        This is based on the announcements channel in the <a href='https://discord.gg/2Z8qZ9Y' class="text-blue-400">Discord Server</a>.
      </p>
      <Toggle
        label="Show only published announcements"
        checked={store.onlyPublished}
        onChange$={(e, el) => {
          store.onlyPublished = el.checked;
        }}
      />
      <button class="lum-btn" onClick$={() => { store.sort = store.sort == 'newest' ? 'oldest' : 'newest'; }}>
        Sort by: {store.sort}
      </button>
      {(() => {
        if (store.sort != 'newest') store.changed = true;
        if (store.changed) articleList.value.reverse();
        return (
          <div class="flex flex-col gap-1">
            {
              articleList.value.map((announcement: any) => {
                if (store.onlyPublished && !announcement.crossposted) return null;
                return <>
                  <span id={announcement.id} class="pointer-events-none block h-24 -mt-24" />
                  <article class={{
                    "lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200": true,
                    "opacity-50": !announcement.crossposted,
                    "border-luminescent-400": announcement.crossposted && !store.onlyPublished
                  }}>
                    <div class={`group`}>
                      <div class="text-sm font-semibold md:text-lg mb-2">
                        <div class="flex items-center gap-1 mb-2 text-white">
                          <img src={`https://cdn.discordapp.com/avatars/${announcement.author.id}/${announcement.member?.avatar ?? announcement.author.avatar}`} class="w-4 h-4 md:w-6 md:h-6 md:mr-1 rounded-md" width={16} height={16} />
                          <p class="text-white!">{announcement.member?.nick ?? announcement.author.username}</p>
                          {(announcement.member && announcement.member.parsedRoles) && <p style={{ backgroundColor: `#${announcement.member.parsedRoles[0].color.toString(16)}` }} class="text-xs px-2 py-1 rounded-md">
                            {announcement.member.parsedRoles[0].name}
                          </p>}
                        </div>
                        <div class="flex items-center gap-1">
                          <p class="text-xs font-light whitespace-nowrap">{announcement.timestamp.toLocaleString()}</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-1">
                        <Markdown mdContent={`${announcement.content}${announcement.attachments ? `\n\n${announcement.attachments.map((attachment: any) => `![Attachment](${attachment.url})`).join(' ')}` : ''}`} extraClass="text-xs md:text-sm" />
                        <Link size={16} class=" justify-end cursor-pointer hidden group-hover:flex" onClick$={() => {
                          navigator.clipboard.writeText(`https://mc.luminescent.dev/announcements#${announcement.id}`);
                          store.notifications.push({
                            title: 'Copied Successfully!',
                            content: 'The link to this announcement has been copied to your clipboard.',
                          });
                          setTimeout(() => {
                            store.notifications.shift();
                          }, 5000);
                        }} />
                      </div>
                      { announcement.reactions &&
                        <div class="flex flex-wrap gap-1 mt-2">
                          { announcement.reactions.map((reaction: APIReaction, i: number) => (
                            <div key={i} class="flex items-center gap-1">
                              <Markdown mdContent={reaction.emoji.id ? `<${reaction.emoji.animated ? 'a' : ''}:${reaction.emoji.name}:${reaction.emoji.id}>` : reaction.emoji.name} />
                              <p>{reaction.count}</p>
                            </div>
                          )) }
                        </div>
                      }
                    </div>
                  </article>
                </>;
              })
            }
          </div>
        );
      })()}
      { !!store.notifications.length &&
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
  if (articleList instanceof Error) return {
    title: 'Announcements',
    meta: [
      {
        name: 'description',
        content: 'An error occurred while fetching announcements.',
      },
      {
        property: 'og:description',
        content: 'An error occurred while fetching announcements.',
      },
    ],
  };

  const announcement = articleList[0].content;
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