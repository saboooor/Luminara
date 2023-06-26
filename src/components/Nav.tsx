import { component$, Slot } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

// @ts-ignore
import iconAVIF from '~/images/icon.png?h=96&format=avif';
// @ts-ignore
import iconWEBP from '~/images/icon.png?h=96&format=webp';
// @ts-ignore
import iconPNG from '~/images/icon.png?h=96';

// @ts-ignore
import logoAVIF from '~/images/logo.png?h=96&format=avif';
// @ts-ignore
import logoWEBP from '~/images/logo.png?h=96&format=webp';
// @ts-ignore
import logoPNG from '~/images/logo.png?h=96';

import { NotificationsOutline, ShieldOutline, TrendingUpOutline, BarChartOutline, CartOutline, LogoDiscord, Menu, DownloadOutline, ChevronDown, ColorFillOutline, MailOutline } from 'qwik-ionicons';

import LuminescentLogo from '~/components/icons/LuminescentLogo';
import LoadingIcon from './icons/LoadingIcon';

export default component$(() => {
  return (
    <Nav>
      <MainNav>
        <NavButton href="/announcements" extraClass="hidden lg:flex gap-3">
          <NotificationsOutline width="24" class="fill-current" /> Announcements
        </NavButton>
        <NavButton href="/rules" extraClass="hidden sm:flex gap-3">
          <ShieldOutline width="24" class="fill-current" /> Rules
        </NavButton>
        <NavButton href="/vote" extraClass="hidden sm:flex gap-3">
          <TrendingUpOutline width="24" class="fill-current" /> Vote
        </NavButton>
        <NavButton href="/ranks" extraClass="hidden md:flex gap-3">
          <BarChartOutline width="24" class="fill-current" /> Ranks
        </NavButton>
        <NavButton icon external href="https://netherdepths.tebex.io" extraClass="hidden md:flex gap-3">
          <CartOutline width="24" class="fill-current" />
        </NavButton>
        <NavButton icon href="/discord" title="Discord" extraClass="hidden sm:flex">
          <LogoDiscord width="24" class="fill-current" />
        </NavButton>
        <Dropdown name="More" extraClass="hidden sm:flex">
          <NavButton href="/announcements" extraClass="flex lg:hidden gap-3">
            <NotificationsOutline width="24" class="fill-current" /> Announcements
          </NavButton>
          <NavButton href="/ranks" extraClass="flex md:hidden gap-3">
            <BarChartOutline width="24" class="fill-current" /> Ranks
          </NavButton>
          <NavButton external href="https://netherdepths.tebex.io" extraClass="flex md:hidden gap-3">
            <CartOutline width="24" class="fill-current" /> Store
          </NavButton>
          <NavButton external href="https://simplymc.art" extraClass="flex gap-3">
            <ColorFillOutline width="24" class="fill-current" /> Gradients
          </NavButton>
          <NavButton external href="https://docs.google.com/forms/d/e/1FAIpQLSdRfcr9hIV1ohL0GCy498ubGkXn4uLbIgAE0UrRiiHLGiAx9A/viewform" extraClass="flex gap-3">
            <MailOutline width="24" class="fill-current" /> Appeal a ban
          </NavButton>
          <NavButton href="/downloads" extraClass="flex gap-3">
            <DownloadOutline width="24" class="fill-current" /> Downloads
          </NavButton>
          <NavButton external href="https://luminescent.dev" extraClass="flex gap-3">
            <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="h-8 w-32 transition text-gray-300 rounded-md flex items-center whitespace-nowrap">
              <div style="filter: drop-shadow(0 0 1rem #CB6CE6);">
                <LuminescentLogo/>
              </div>
            </div>
          </NavButton>
        </Dropdown>
        <button id="mobile-menu-button" type="button" title="Menu" onClick$={() => {
          const classList = document.getElementById('mobile-menu')?.classList;
          if (classList?.contains('hidden')) classList.replace('hidden', 'flex');
          else classList?.replace('flex', 'hidden');
        }} class="transition ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-3xl sm:hidden">
          <Menu width="24" class="fill-current"/>
        </button>
      </MainNav>
      <MobileNav>
        <NavButton href="/announcements" extraClass="flex gap-3">
          <NotificationsOutline width="24" class="fill-white" /> Announcements
        </NavButton>
        <NavButton href="/rules" extraClass="flex gap-3">
          <ShieldOutline width="24" class="fill-current" /> Rules
        </NavButton>
        <NavButton href="/vote" extraClass="flex gap-3">
          <TrendingUpOutline width="24" class="fill-current" /> Vote
        </NavButton>
        <NavButton href="/ranks" extraClass="flex gap-3">
          <BarChartOutline width="24" class="fill-current" /> Ranks
        </NavButton>
        <NavButton external href="https://netherdepths.tebex.io" extraClass="flex gap-3">
          <CartOutline width="24" class="fill-current" /> Store
        </NavButton>
        <NavButton href="/discord" title="Discord" extraClass="flex gap-3">
          <LogoDiscord width="24" class="fill-current" /> Discord
        </NavButton>
        <NavButton external href="https://simplymc.art" extraClass="flex gap-3">
          <ColorFillOutline width="24" class="fill-current" /> Gradients
        </NavButton>
        <NavButton external href="https://docs.google.com/forms/d/e/1FAIpQLSdRfcr9hIV1ohL0GCy498ubGkXn4uLbIgAE0UrRiiHLGiAx9A/viewform" extraClass="flex gap-3">
          <MailOutline width="24" class="fill-current" /> Appeal a ban
        </NavButton>
        <NavButton href="/downloads" extraClass="flex gap-3">
          <DownloadOutline width="24" class="fill-current" /> Downloads
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
        <picture>
          <source srcSet={logoAVIF} type="image/avif" />
          <source srcSet={logoWEBP} type="image/webp" />
          <img
            src={logoPNG}
            class="hidden sm:flex"
            width={192} height={48}
            alt="Nether Depths Logo"
            loading="eager"
            decoding="async"
          />
        </picture>
        <picture>
          <source srcSet={iconAVIF} type="image/avif" />
          <source srcSet={iconWEBP} type="image/webp" />
          <img
            src={iconPNG}
            class="h-12 flex sm:hidden"
            width={48} height={48}
            alt="Nether Depths Icon"
            loading="eager"
            decoding="async"
          />
        </picture>
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