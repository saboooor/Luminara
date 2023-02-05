import { component$, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useClientEffect$(() => {
    const backDrop = document.getElementById('backdrop')!;
    backDrop.style.filter = 'blur(50px)';
    backDrop.style.transform = `scale(1.5)`;
  })

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
        <div class="grid gap-5">
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">sab</h2>
            <p>
              @Alerts world download for old survival available:<br/>
              https://mega.nz/file/PhUQDCLS#YD2e7cNq2YaUhMdKfJGsJ4OPkpqYbNou36LgT3S6VfE
            </p>
          </div>
          <div class="bg-black/30 border-black/30 border-2 p-8 rounded-xl text-lg font-normal">
            <h2 class="text-xl font-bold sm:text-2xl mb-4">sab</h2>
            <p>
              @Alerts **Creative server has been shut down**<br/>
              You can access creative through `/warp creative`.<br/>
              If you find any bugs/exploits, please create a ticket at #home.<br/>
              ^ You may hunt for them as long as you do report once you find some bugs/exploits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Rules',
};
