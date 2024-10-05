import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '@luminescent/ui-qwik';

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col gap-8">
      <h1 class="shadow-outline text-4xl font-bold text-white mt-10">
        <span class="text-pink-400">Luminara SMP</span> Rules
      </h1>
      <p class="mb-6 text-xl shadow-outline">
        Please note that the staff have full control over what may be allowed and what is not, things may differ as there may be gray areas.<br />
        Attempting to exploit gray areas is not permitted and will end up in a punishment regardless of what the rules indicate.<br />
        Last updated Jun 28, 2023
      </p>
      <div class="grid gap-5">
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>1. Grief</Header>
          <p>Claimed structures MAY NOT be griefed.</p>
          <p>Griefing is only allowed if builds are UNCLAIMED.</p>
          <p>Keeping your build unclaimed indicates that you have no issue with other players griefing your build and will not be recovered afterwards.</p>
          <p>Intentionally lagging the server is NOT allowed.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>2. Sensitivity</Header>
          <p>If a player is uncomfortable about a topic and asks you to stop, you MUST stop or move to a private chat, no questions asked.</p>
          <p>This rule applies common sense, meaning it only applies to sensitive topics and things that may make others literally uncomfortable.</p>
          <p>Arguing / Fooling around with this rule will result in a mute.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>3. Language</Header>
          <p>This is an English server, other languages in text chat are not permitted.</p>
          <p>With the exception of well-known words / phrases.</p>
          <p>All slurs are forbidden in text chat and builds.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>4. Player Killing</Header>
          <p>Player killing is NOT allowed if they have PvP turned off with /pvp off.</p>
          <p>Keeping PvP on indicates that you're prepared for fights with other players.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>5. Impersonation</Header>
          <p>Impersonating Staff (A.K.A. Acting like you're staff) or players is not permitted.</p>
          <p>This includes mini-modding (Moderating chat as a player).</p>
          <p>Mini-modding may also be taken as a form of toxicity.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>6. Building</Header>
          <p>Building inside a 100 block radius outside of a player's build without permission is not recommended as the owner of that build may request to move it by contacting the staff.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>7. Spam</Header>
          <p>Keep spam to a minimum. This includes pinging people repetitively on Discord.</p>
          <p>Flooding the chat with pointless content (ex. copypasta) to an irritating point is not allowed.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>8. Cheating</Header>
          <p>X-raying, hacking, duping, or exploiting bugs and glitches are not allowed.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>9. Advertisements</Header>
          <p>You may not talk about other servers unless they're well-known by minecraft players worldwide. (ex. hypixel, hive, etc.)</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>10. Annoyances</Header>
          <p>If a player is bothered or annoyed by what you're doing that's related to them, you must stop.</p>
          <p>Repetitively trolling (e.g. telling people to do "alt + f4" to make people leave) is not permitted.</p>
          <p>Please keep jukeboxes at a fair radius if you are living within 512 blocks away from a player's build as the player may request to lower the radius (and punish if radius is repetitively raised) by contacting the staff.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>11. Behaviour</Header>
          <p>If a player is uncomfortable with controversial/sensitive topics, move your conversation to a private chat (As stated in Rule 2.).</p>
          <p>Toxicity is not tolerated.</p>
          <p>Some examples of toxicity include but are not limited to:</p>
          <p>- Directing swears towards others.</p>
          <p>- Insulting others in a discrete repetitive way.</p>
          <p>- Acting like you're above everyone else. (At Luminara SMP, everyone is equally treated.)</p>
          <p>- Any type of harassment.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>12. Privacy</Header>
          <p>Leaking others' most likely private information is not permitted.</p>
          <p>Some people may see privacy in a different way than you would, please respect it.</p>
          <p>(IP, age, location, phone numbers, etc) (Doxxing)</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>13. Inclusivity</Header>
          <p>You may not disrespect/discriminate others. Everyone in Luminara SMP are included regardless of sexuality, race, looks, etc.</p>
          <p>Discrimination towards any group that may be against your views is not permitted. That includes but is not limited to people with different sexualities, races, looks, etc.</p>
          <p>Religion is not an excuse as you still must respect others.</p>
          <p>Any form of discrimination is not permitted.</p>
          <p>Discriminating against others because of their race / ethnicity / sexuality / looks will not be tolerated as we are a welcoming and inclusive community.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <Header>14. Plugin Rules</Header>
          <p>You may not pressure people into turning off /nosleep. They want to keep the night for a reason.</p>
          <p>Abusing the Jobs plugin or any other plugin that earns you money is not allowed.</p>
          <p>This includes but is not limited to:</p>
          <p>- Using alts for an economic advantage (For example: Jobs) (Not including voting)</p>
          <p>- "Scamming" (Charging others for something that should've been extremely cheaper)</p>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Rules',
  meta: [
    {
      name: 'description',
      content: 'View the rules of Luminara SMP. Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
    {
      name: 'og:description',
      content: 'View the rules of Luminara SMP. Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
  ],
};
