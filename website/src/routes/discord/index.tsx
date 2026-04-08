import { RequestEvent } from '@qwik.dev/router';
import { component$ } from '@qwik.dev/core';
import { SiDiscord } from 'simple-icons-qwik';

export const onGet = ({ redirect }: RequestEvent) => {
  throw redirect(301, 'https://discord.gg/Mw7fNpdg5N');
};

export default component$(() => {
  return <>
    <div class="flex flex-col min-h-svh justify-center items-center pt-20 max-w-7xl mx-auto">
      <h1 class="text-center">
        Join our Discord server!
      </h1>
      <a href="https://discord.luminaramc.org" class="lum-btn text-2xl lum-btn-p-6 gap-6">
        <SiDiscord size={36} />
        Join
      </a>
    </div>
  </>;
});
