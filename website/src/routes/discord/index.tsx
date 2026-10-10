import { RequestEvent } from '@qwik.dev/router';
import { component$ } from '@qwik.dev/core';
import { SiDiscord } from 'simple-icons-qwik';

export const onGet = ({ redirect }: RequestEvent) => {
  throw redirect(301, 'https://discord.gg/Mw7fNpdg5N');
};

export default component$(() => {
  return (
    <>
      <div class="mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-center pt-20">
        <h1 class="text-center">Join our Discord server!</h1>
        <a
          href="https://discord.luminaramc.org"
          class="lum-btn lum-btn-p-6 gap-6 text-2xl"
        >
          <SiDiscord size={36} />
          Join
        </a>
      </div>
    </>
  );
});
