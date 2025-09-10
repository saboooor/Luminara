import { Link, RequestEvent } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { LogoDiscord } from '@luminescent/ui-qwik';

export const onGet = ({ redirect }: RequestEvent) => {
  throw redirect(301, 'https://discord.luminaramc.org');
};

export default component$(() => {
  return <>
    <div class="flex flex-col min-h-svh justify-center items-center pt-20 max-w-7xl mx-auto">
      <h1 class="text-center">
        Join our Discord server!
      </h1>
      <Link href="https://discord.luminaramc.org" class="lum-btn text-2xl lum-btn-p-6 gap-6">
        <LogoDiscord size={36} />
        Join
      </Link>
    </div>
  </>;
});