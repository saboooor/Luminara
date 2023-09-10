import { component$, Slot } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import NDLogo from '~/images/logo.png?jsx';

import { LogoDiscord, Menu, DownloadOutline, ChevronDown, ColorFillOutline } from 'qwik-ionicons';

import LuminescentLogo from '~/components/icons/LuminescentLogo';
import LoadingIcon from './icons/LoadingIcon';

export default component$(() => {
  return (
    <Nav>
      <MainNav>
        <NavButton href="/discord" title="Discord" extraClass="flex gap-3">
          <LogoDiscord width="24" class="fill-current" /> Discord
        </NavButton>
        <NavButton href="https://luminescent.dev/downloads" title="Downloads" extraClass="flex gap-3">
          <DownloadOutline width="24" class="fill-current" /> Downloads
        </NavButton>
        <NavButton external href="https://simplymc.art" extraClass="flex gap-3">
          <ColorFillOutline width="24" class="fill-current" /> Gradients
        </NavButton>
        <NavButton external href="https://luminescent.dev" extraClass="flex gap-3">
          <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="h-8 w-32 transition text-gray-300 rounded-md flex items-center whitespace-nowrap">
            <div style="filter: drop-shadow(0 0 1rem #CB6CE6);">
              <LuminescentLogo/>
            </div>
          </div>
        </NavButton>
        <button id="mobile-menu-button" type="button" title="Menu" onClick$={() => {
          const classList = document.getElementById('mobile-menu')?.classList;
          if (classList?.contains('hidden')) classList.replace('hidden', 'flex');
          else classList?.replace('flex', 'hidden');
        }} class="transition ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-3xl sm:hidden">
          <Menu width="24" class="fill-current"/>
        </button>
      </MainNav>
      <MobileNav>
        <NavButton href="/discord" title="Discord" extraClass="flex gap-3">
          <LogoDiscord width="24" class="fill-current" /> Discord
        </NavButton>
        <NavButton href="https://luminescent.dev/downloads" extraClass="flex gap-3">
          <DownloadOutline width="24" class="fill-current" /> Downloads
        </NavButton>
        <NavButton external href="https://simplymc.art" extraClass="flex gap-3">
          <ColorFillOutline width="24" class="fill-current" /> Gradients
        </NavButton>
        <NavButton external href="https://luminescent.dev" extraClass="flex gap-3">
          <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="h-8 w-32 transition text-gray-300 rounded-md flex items-center whitespace-nowrap">
            <div style="filter: drop-shadow(0 0 1rem #CB6CE6);">
              <LuminescentLogo/>
            </div>
          </div>
        </NavButton>
      </MobileNav>
    </Nav>
  );
});

export const Nav = component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen py-2 bg-gray-900/50 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <Slot />
      </div>
    </nav>
  );
});

export const Brand = component$(() => {
  const location = useLocation();
  return (
    <div class="flex items-center justify-start">
      <Link href="/" class="transition ease-in-out text-gray-300 hover:bg-gray-800/50 drop-shadow-2xl pl-1 px-3 rounded-lg text-lg flex items-center whitespace-nowrap">
        <div class="w-28">
          <NDLogo />
        </div>
        <div class={`${location.isNavigating ? '' : '-ml-10 opacity-0'} transition-all`}>
          <LoadingIcon/>
        </div>
      </Link>
    </div>
  );
});

export const MainNav = component$(() => {
  return (
    <div class="relative flex h-16 items-center justify-between">
      <Brand/>
      <div class="flex flex-1 items-center justify-end">
        <div class="flex gap-2 text-gray-300 whitespace-nowrap">
          <Slot/>
        </div>
      </div>
    </div>
  );
});

export const MobileNav = component$(() => {
  return (
    <div id="mobile-menu" class="gap-4 py-4 px-3 bg-gray-900/70 rounded-lg mt-2 hidden flex-col sm:hidden">
      <Slot />
    </div>
  );
});

export const NavButton = component$(({ href, title, icon, external, extraClass, style }: any) => {
  return <>
    {external &&
      <a href={href} title={title} style={style} class={`group transition ease-in-out hover:bg-gray-800 hover:text-white ${icon ? 'text-3xl px-2' : 'px-4'} py-2 rounded-lg items-center ${extraClass}`}>
        <Slot />
      </a>
    }
    {!external &&
      <Link href={href} onClick$={async () => { document.getElementById('mobile-menu')?.classList.replace('flex', 'hidden'); }} title={title} style={style} class={`group transition ease-in-out hover:bg-gray-800 hover:text-white ${icon ? 'text-3xl px-2' : 'px-4'} py-2 rounded-lg items-center ${extraClass}`}>
        <Slot />
      </Link>
    }
  </>;
});

export const Dropdown = component$(({ name, extraClass }: any) => {
  return (
    <div class={`cursor-pointer transition ease-in-out ${extraClass} hover:bg-gray-800 hover:text-white drop-shadow-2xl group rounded-lg items-center gap-4`}>
      <div class="px-4 py-2 flex gap-2 items-center">
        {name}
        <ChevronDown width="24" class="transform group-hover:-rotate-180 transition ease-in-out text-2xl" />
      </div>
      <div class="absolute top-8 left-0 z-10 hidden group-hover:flex pt-4 text-base">
        <div class="bg-black rounded-xl px-3 py-4 flex flex-col gap-2 font-medium whitespace-nowrap overflow-y-auto max-h-[calc(100svh-128px)]">
          <Slot/>
        </div>
      </div>
    </div>
  );
});