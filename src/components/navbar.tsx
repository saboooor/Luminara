import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import iconAVIF from "~/images/icon.png?height=96&avif";
import iconWEBP from "~/images/icon.png?height=96&webp";
import { src as iconPlaceholder } from "~/images/icon.png?height=96&metadata";

import logoAVIF from "~/images/logo.png?height=96&avif";
import logoWEBP from "~/images/logo.png?height=96&webp";
import { src as logoPlaceholder } from "~/images/logo.png?height=96&metadata";

import { BellIcon, ShieldIcon, TrendingUpIcon, BarChart2Icon, ShoppingCartIcon, BarChartIcon, Edit3Icon, MailIcon, DownloadCloudIcon, MenuIcon, MoreHorizontalIcon } from 'qwik-feather-icons'

export default component$(() => {
  return (
    <nav class="z-20 fixed top-4 w-screen">
      <div class="mx-4 xl:mx-auto max-w-7xl bg-black/50 rounded-xl">
        <div class="relative flex h-20 navblur px-2 items-center justify-between">
          <Nav.Brand />
          <div class="hidden md:flex flex-1 space-x-2 items-center justify-end md:pr-1">
            <Nav.Item spa href="/announcements">
              <BellIcon /> Announcements
            </Nav.Item>
            <Nav.Item spa href="/rules">
              <ShieldIcon /> Rules
            </Nav.Item>
            <Nav.Item spa href="/vote">
              <TrendingUpIcon /> Vote
            </Nav.Item>
            <Nav.Item spa href="/ranks">
              <BarChart2Icon /> Ranks
            </Nav.Item>
            <Nav.Item href="https://netherdepths.tebex.io">
              <ShoppingCartIcon /> Store
            </Nav.Item>
            <Nav.Dropdown.Menu name="Other">
              <Nav.Item href="https://plan.netherdepths.com">
                <BarChartIcon /> Analytics
              </Nav.Item>
              <Nav.Item href="https://simplymc.art">
                <Edit3Icon /> Gradients
              </Nav.Item>
              <Nav.Item href="https://docs.google.com/forms/d/e/1FAIpQLSdRfcr9hIV1ohL0GCy498ubGkXn4uLbIgAE0UrRiiHLGiAx9A/viewform">
                <MailIcon /> Appeal a Ban
              </Nav.Item>
              <Nav.Item spa href="/downloads">
                <DownloadCloudIcon/> Downloads
              </Nav.Item>
              <Nav.Item href="https://cactie.smhsmh.club/">
                <img src="https://cactie.smhsmh.club/assets/images/Cactie.webp" class="w-6 grayscale" /> Cactie Bot
              </Nav.Item>
            </Nav.Dropdown.Menu>
          </div>
          <Mobile.Button />
        </div>
        <Mobile.Menu>
          <Mobile.Item href="/announcements">
            <BellIcon /> Announcements
          </Mobile.Item>
          <Mobile.Item spa href="/rules">
            <ShieldIcon /> Rules
          </Mobile.Item>
          <Mobile.Item spa href="/vote">
            <TrendingUpIcon /> Vote
          </Mobile.Item>
          <Mobile.Item spa href="/ranks">
            <BarChart2Icon /> Ranks
          </Mobile.Item>
          <Mobile.Item href="https://netherdepths.tebex.io">
            <ShoppingCartIcon /> Store
          </Mobile.Item>
          <Mobile.Item href="/plan">
            <BarChartIcon /> Analytics
          </Mobile.Item>
          <Mobile.Item href="/rgb">
            <Edit3Icon /> Gradients
          </Mobile.Item>
          <Mobile.Item href="/appeal">
            <MailIcon /> Appeal a Ban
          </Mobile.Item>
          <Mobile.Item spa href="/downloads">
            <DownloadCloudIcon/> Downloads
          </Mobile.Item>
          <Mobile.Item href="https://cactie.smhsmh.club/">
            <img src="https://cactie.smhsmh.club/assets/images/Cactie.webp" class="w-6 grayscale" /> Cactie Bot
          </Mobile.Item>
        </Mobile.Menu>
      </div>
    </nav>
  );
});

export const Nav = {
  Item: component$(({ href, spa }: any) => {
    return (
      <>
        {spa ?
          <Link href={href} class="flex gap-4 items-center transition duration-200 text-red-100 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl border-2 border-black/0 hover:border-red-700/20 rounded-lg px-4 py-3 text-md font-medium">
            <Slot />
          </Link>
          :
          <a href={href} target="_blank" class="flex gap-4 items-center transition duration-200 text-red-100 hover:text-white hover:bg-red-600/20 hover:drop-shadow-2xl border-2 border-black/0 hover:border-red-700/20 rounded-lg px-4 py-3 text-md font-medium">
            <Slot />
          </a>
        }
      </>
    );
  }),
  Dropdown: {
    Menu: component$(({ name }: any) => {
      return (
        <div class="cursor-pointer transition duration-100 text-red-100 hover:text-white hover:bg-red-600/20 border-2 border-black/0 hover:border-red-700/20 group rounded-lg text-md font-medium">
          <div class="px-4 py-3 flex gap-4 items-center">
            <MoreHorizontalIcon class="transform group-hover:-rotate-90 transition duration-300 ease-in-out" />
            {name}
          </div>
          <div class="absolute right-0 z-10 hidden group-hover:flex pt-8">
            <div class="bg-black/50 backdrop-blur-lg rounded-xl px-3 py-4 flex flex-col space-y-2 font-medium whitespace-nowrap overflow-y-auto" style={{ maxHeight: 'calc(100svh - 128px)' }}>
              <Slot />
            </div>
          </div>
        </div>
      );
    })
  },
  Brand: component$(() => {
    return (
      <div class="flex flex-1 items-center sm:justify-start">
        <Link href="/" class="transition duration-200 hover:bg-red-600/20 hover:drop-shadow-2xl border-2 border-black/0 hover:border-red-700/20 rounded-lg p-2 flex items-center">
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
        </Link>
      </div>
    )
  })
}

export const Mobile = {
  Item: component$(({ href, spa }: any) => {
    return (
      <>
        {spa ?
          <Link href={href} class="flex gap-4 transition duration-200 hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl border-2 border-black/0 hover:border-red-700/20 px-4 py-3 rounded-lg text-md font-medium items-center whitespace-nowrap">
            <Slot />
          </Link>
          :
          <a href={href} class="flex gap-4 transition duration-200 hover:bg-red-600/20 hover:text-white hover:drop-shadow-2xl border-2 border-black/0 hover:border-red-700/20 px-4 py-3 rounded-lg text-md font-medium items-center whitespace-nowrap">
            <Slot />
          </a>
        }
      </>
    );
  }),
  Menu: component$(() => {
    return (
      <div class="text-gray-300 hidden p-4 backdrop-blur-lg rounded-lg" id="mobile-menu">
        <div class="space-y-1 overflow-y-auto" style={{ maxHeight: 'calc(100svh - 128px)' }}>
          <Slot />
        </div>
      </div>
    );
  }),
  Button: component$(() => {
    return (
      <div class="md:hidden items-center justify-end pr-2">
        <button type="button" id="mobile-menu-button" onClick$={() => document.getElementById('mobile-menu')?.classList.toggle("hidden")} class="pointer-events-auto inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:text-white focus:outline-none focus:bg-red-600/20" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <MenuIcon class="block h-6 w-6" />
        </button>
      </div>
    );
  })
} 