import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col gap-1">
      <h1 class="shadow-outline text-4xl font-bold text-white mt-10">
        <span class="text-pink-400">Luminara SMP</span> Rules
      </h1>
      <p class="mb-6 text-xl shadow-outline">
        Please note that the staff may have full discretion over all rules and their enforcement.<br />
        Voice/Private chat is typically unmoderated, if a user is being obnoxious in a voice/private chat, they may be muted.<br />
        Last updated Aug 18, 2025
      </p>
      <div class="grid gap-1">
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            1. Grief
          </h3>
          <p>Claimed structures may not be griefed.</p>
          <p>Griefing is only allowed if builds are unclaimed.</p>
          <p>Keeping your build unclaimed indicates that you have no issue with other players griefing your build, although it may be reverted if asked.</p>
          <p>Intentionally lagging the server is not allowed.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            2. Sensitivity
          </h3>
          <p>If a player is uncomfortable about a topic and asks you to stop, you must stop or move to a private chat, no questions asked.</p>
          <p>This rule only applies to sensitive topics that may make others literally uncomfortable.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            3. Hate Speech
          </h3>
          <p>Anything that is recognized as a slur are all forbidden.</p>
          <p>Hate speech towards any individual(s) is not tolerated, this is a friendly server, not a place for hate.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            4. Impersonation
          </h3>
          <p>Impersonating Staff (A.K.A. Acting like you're staff) or players is not permitted.</p>
          <p>This includes mini-modding (Moderating chat as a player).</p>
          <p>Mini-modding may also be sometimes taken as a form of toxicity.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            5. Building
          </h3>
          <p>Building inside a 100 block radius outside of a player's build without permission is not recommended as the owner of that build may request to move your build by contacting the staff.</p>
          <p>On a second note, you can also contact the staff if you would like to move your build to a better looking area.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            6. Spam
          </h3>
          <p>Keep spam to a minimum. This includes pinging people repetitively on Discord.</p>
          <p>Flooding the chat with pointless content (ex. copypasta) to an irritating point is not allowed.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            7. Cheating
          </h3>
          <p>X-raying, hacking, duping, or exploiting bugs and glitches are not allowed.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            8. Advertisements
          </h3>
          <p>You may not talk about other servers unless they're well-known by minecraft players worldwide. (ex. hypixel, hive, etc.)</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            9. Annoyances
          </h3>
          <p>If a player is bothered or annoyed by what you're doing that's related to them, you must stop.</p>
          <p>Repetitively trolling (e.g. telling people to do "alt + f4" to make people leave) is not permitted.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            10. Behaviour
          </h3>
          <p>If a player is uncomfortable with controversial/sensitive topics, move your conversation to a private chat (As stated in Rule 2.).</p>
          <p>Toxicity is not tolerated.</p>
          <p>Some examples of toxicity include but are not limited to:</p>
          <p>- Directing swears towards others.</p>
          <p>- Insulting others in a discrete repetitive way.</p>
          <p>- Acting like you're above everyone else. (At Luminara SMP, everyone is equally treated.)</p>
          <p>- Any type of harassment.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            11. Privacy
          </h3>
          <p>Leaking others' most likely private information is not permitted.</p>
          <p>Some people may see privacy in a different way than you would, please respect it.</p>
          <p>(IP, age, location, phone numbers, etc) (Doxxing)</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            12. Inclusivity
          </h3>
          <p>You may not disrespect/discriminate others. Everyone in Luminara SMP are included regardless of sexuality, race, looks, etc.</p>
          <p>Discrimination towards any group that may be against your views is not permitted. That includes but is not limited to people with different sexualities, races, looks, etc.</p>
          <p>Religion is not an excuse as you still must respect others.</p>
          <p>Any form of discrimination is not permitted.</p>
          <p>Discriminating against others because of their race / ethnicity / sexuality / looks will not be tolerated as we are a welcoming and inclusive community.</p>
        </div>
        <div class="lum-card lum-bg-gray-900/40 backdrop-blur-lg !text-gray-200 hover:lum-bg-gray-900/50 transition duration-1000 hover:duration-75 ease-out">
          <h3 class="mt-0! mb-2! flex items-center gap-2">
            13. Plugin Rules
          </h3>
          <p>You may not pressure people into turning off /nosleep. They may keep the night for any reason.</p>
          <p>Abusing the Jobs plugin or any other plugin that earns you money is not allowed.</p>
          <p>You may not use an alt for an economic advantage (For example: Jobs)</p>
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
