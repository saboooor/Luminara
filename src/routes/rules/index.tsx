import { component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useVisibleTask$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(32px)';
    backDrop.style.transform = 'scale(1.32)';
  });

  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 mt-24">
      <div class="font-bold text-orange-100 text-3xl sm:text-4xl mb-6 items-center justify-center drop-shadow-xl">
        <h1 class="mb-4 shadow-outline">
          <span class="text-luminescent-400">Luminara SMP</span> Rules
        </h1>
        <p class="mb-6 sm:mb-14 font-normal text-xl shadow-outline">
          Please note that the staff have full control over what may be allowed and what is not, things may differ as there may be gray areas.<br />
          Attempting to exploit gray areas is not permitted and will end up in a punishment regardless of what the rules indicate.<br />
          Last updated Jun 28, 2023
        </p>
        <div class="grid gap-5">
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">1. Grief</h2>
            <p>Claimed structures MAY NOT be griefed.</p>
            <p>Griefing is only allowed if builds are UNCLAIMED.</p>
            <p>Keeping your build unclaimed indicates that you have no issue with other players griefing your build and will not be recovered afterwards.</p>
            <p>Intentionally lagging the server is NOT allowed.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">2. Sensitivity</h2>
            <p>If a player is uncomfortable about a topic and asks you to stop, you MUST stop or move to a private chat, no questions asked.</p>
            <p>This rule applies common sense, meaning it only applies to sensitive topics and things that may make others literally uncomfortable.</p>
            <p>Arguing / Fooling around with this rule will result in a mute.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">3. Language</h2>
            <p>This is an English server, other languages in text chat are not permitted.</p>
            <p>With the exception of well-known words / phrases.</p>
            <p>All slurs are forbidden in text chat and builds.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">4. Player Killing</h2>
            <p>Player killing is NOT allowed if they have PvP turned off with /pvp off.</p>
            <p>Keeping PvP on indicates that you're prepared for fights with other players.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">5. Impersonation</h2>
            <p>Impersonating Staff (A.K.A. Acting like you're staff) or players is not permitted.</p>
            <p>This includes mini-modding (Moderating chat as a player).</p>
            <p>Mini-modding may also be taken as a form of toxicity.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">6. Building</h2>
            <p>Building inside a 100 block radius outside of a player's build without permission is not recommended as the owner of that build may request to move it by contacting the staff.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">7. Spam</h2>
            <p>Keep spam to a minimum. This includes pinging people repetitively on Discord.</p>
            <p>Flooding the chat with pointless content (ex. copypasta) to an irritating point is not allowed.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">8. Cheating</h2>
            <p>X-raying, hacking, duping, or exploiting bugs and glitches are not allowed.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">9. Advertisements</h2>
            <p>You may not talk about other servers unless they're well-known by minecraft players worldwide. (ex. hypixel, hive, etc.)</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">10. Annoyances</h2>
            <p>If a player is bothered or annoyed by what you're doing that's related to them, you must stop.</p>
            <p>Repetitively trolling (e.g. telling people to do "alt + f4" to make people leave) is not permitted.</p>
            <p>Please keep jukeboxes at a fair radius if you are living within 512 blocks away from a player's build as the player may request to lower the radius (and punish if radius is repetitively raised) by contacting the staff.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">11. Behaviour</h2>
            <p>If a player is uncomfortable with controversial/sensitive topics, move your conversation to a private chat (As stated in Rule 2.).</p>
            <p>Toxicity is not tolerated.</p>
            <p>Some examples of toxicity include but are not limited to:</p>
            <p>- Directing swears towards others.</p>
            <p>- Insulting others in a discrete repetitive way.</p>
            <p>- Acting like you're above everyone else. (At Luminara SMP, everyone is equally treated.)</p>
            <p>- Any type of harassment.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">12. Privacy</h2>
            <p>Leaking others' most likely private information is not permitted.</p>
            <p>Some people may see privacy in a different way than you would, please respect it.</p>
            <p>(IP, age, location, phone numbers, etc) (Doxxing)</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">13. Inclusivity</h2>
            <p>You may not disrespect/discriminate others. Everyone in Luminara SMP are included regardless of sexuality, race, looks, etc.</p>
            <p>Discrimination towards any group that may be against your views is not permitted. That includes but is not limited to people with different sexualities, races, looks, etc.</p>
            <p>Religion is not an excuse as you still must respect others.</p>
            <p>Any form of discrimination is not permitted.</p>
            <p>Discriminating against others because of their race / ethnicity / sexuality / looks will not be tolerated as we are a welcoming and inclusive community.</p>
          </div>
          <div class="bg-black/30 border-black/30 border p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">14. Plugin Rules</h2>
            <p>You may not pressure people into turning off /nosleep. They want to keep the night for a reason.</p>
            <p>Abusing the Jobs plugin or any other plugin that earns you money is not allowed.</p>
            <p>This includes but is not limited to:</p>
            <p>- Using alts for an economic advantage (For example: Jobs) (Not including voting)</p>
            <p>- "Scamming" (Charging others for something that should've been extremely cheaper)</p>
          </div>
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
