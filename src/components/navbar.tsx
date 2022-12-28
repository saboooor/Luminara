import { component$, Slot } from '@builder.io/qwik';

import iconAVIF from "~/images/icon.png?height=48&avif";
import iconWEBP from "~/images/icon.png?height=48&webp";
import { src as iconPlaceholder } from "~/images/icon.png?height=48&metadata";

import logoAVIF from "~/images/logo.png?height=48&avif";
import logoWEBP from "~/images/logo.png?height=48&webp";
import { src as logoPlaceholder } from "~/images/logo.png?height=48&metadata";

export default component$(() => {
  return (
    <nav class="z-20 fixed top-1 sm:top-4 w-screen">
      <div class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-3 backdrop-blur-lg bg-black/50 rounded-2xl">
        <div class="relative flex h-20 items-center justify-between">
          <Nav.Brand />
          <div class="hidden md:flex flex-1 space-x-2 items-center justify-end md:items-stretch">
            <Nav.Item href="/announcements">
              Announcements
            </Nav.Item>
            <Nav.Item href="/rules">
              Rules
            </Nav.Item>
            <Nav.Item href="/vote">
              Vote
            </Nav.Item>
            <Nav.Item href="/ranks">
              Ranks
            </Nav.Item>
            <Nav.Item href="https://netherdepths.tebex.io">
              Store
            </Nav.Item>
            <Nav.Item href="/more">
              More
            </Nav.Item>
          </div>
          <Mobile.Button />
        </div>
        <Mobile.Menu>
          <Mobile.Item href="/announcements">
            Announcements
          </Mobile.Item>
          <Mobile.Item href="/rules">
            Rules
          </Mobile.Item>
          <Mobile.Item href="/vote">
            Vote
          </Mobile.Item>
          <Mobile.Item href="/ranks">
            Ranks
          </Mobile.Item>
          <Mobile.Item href="https://netherdepths.tebex.io">
            Store
          </Mobile.Item>
          <Mobile.Item href="/more">
            More
          </Mobile.Item>
        </Mobile.Menu>
      </div>
    </nav>
  );
});

export const Nav = {
  Item: component$(({ href }: any) => {
    return (
      <a href={href} class="transition duration-200 text-gray-300 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl px-4 py-3 text-lg font-medium">
        <Slot />
      </a>
    );
  }),
  Brand: component$(() => {
    return (
      <div class="flex flex-1 items-center sm:items-stretch justify-start">
        <a href="/" class="transition duration-200 hover:bg-red-600/20 hover:drop-shadow-2xl rounded-xl p-2 flex items-center">
          <picture>
            <source srcSet={logoAVIF} type="image/avif" />
            <source srcSet={logoWEBP} type="image/webp" />
            <img
              src={logoPlaceholder}
              class="h-12 hidden sm:flex md:hidden lg:flex"
              width={225} height={48}
              alt="Nether Depths Logo"
              loading="eager"
              decoding="async"
            />
          </picture>
          <picture>
            <source srcSet={iconAVIF} type="image/avif" />
            <source srcSet={iconWEBP} type="image/webp" />
            <img
              src={iconPlaceholder}
              class="h-12 flex sm:hidden md:flex lg:hidden"
              width={48} height={48}
              alt="Nether Depths Icon"
              loading="eager"
              decoding="async"
            />
          </picture>
        </a>
      </div>
    )
  })
}

export const Mobile = {
  Item: component$(({ href }: any) => {
    return (
      <a href={href} class="text-gray-300 hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl px-4 py-3 rounded-xl text-lg font-medium flex items-center whitespace-nowrap">
        <Slot />
      </a>
    );
  }),
  Menu: component$(() => {
    return (
      <div class="hidden px-2 pb-6" id="mobile-menu">
        <div class="space-y-1">
          <Slot />
        </div>
      </div>
    );
  }),
  Button: component$(() => {
    return (
      <div class="flex md:hidden flex-1 items-center justify-end md:items-stretch">
        <button type="button" id="mobile-menu-button" onClick$={() => document.getElementById('mobile-menu')?.classList.toggle("hidden")} class="pointer-events-auto inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:text-white focus:outline-none focus:bg-red-600/20" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    );
  })
} 