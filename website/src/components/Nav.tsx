import { component$ } from '@qwik.dev/core';
import { Link, useLocation } from '@qwik.dev/router';
import { SelectMenu, Nav } from '@luminescent/ui-qwik';
import { BarChart, Bell, Shield, TrendingUp, ShoppingCart, Download, Menu, Palette, Loader2 } from 'lucide-icons-qwik';
import { LuminescentFull } from '@luminescent/icons-qwik';
import { SiDiscord, SiGithub } from 'simple-icons-qwik';

import Logo from '~/images/logo.png?jsx';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav floating fixed colorClass="lum-bg-nav-bg !text-gray-100"
      style={{
        '--lum-border-radius': '1rem',
      }}>
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent py-1 px-2 rounded-lum-2 hover:lum-bg-nav-bg">
        <Logo class="h-8 w-auto" />
        <span class={{
          'transition-all': true,
          '-ml-6 opacity-0': !loc.isNavigating,
        }}>
          <Loader2 size={16} class="animate-spin" />
        </span>
      </Link>

      <Link q:slot="end" href="/announcements" class={{
        'hidden lg:flex lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <Bell size={24} /> Announcements
      </Link>
      <Link q:slot="end" href="/rules" class={{
        'hidden sm:flex lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <Shield size={24} /> Rules
      </Link>
      <Link q:slot="end" href="/vote" class={{
        'hidden sm:flex lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <TrendingUp size={24} /> Vote
      </Link>
      <Link q:slot="end" href="/ranks" class={{
        'hidden md:flex lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <BarChart size={24} /> Ranks
      </Link>

      <SelectMenu id="nav-resources" q:slot='end' hover customDropdown
        class={{ 'lum-bg-transparent hidden sm:flex rounded-lum-2 hover:lum-bg-nav-bg': true }}
        panelClass='lum-bg-nav-bg'>
        <span q:slot="dropdown" class="flex items-center gap-2">
          <Menu size={24} />
          More
        </span>
        <Link q:slot="extra-buttons" href="/announcements"
          class="lum-btn lum-bg-transparent flex lg:hidden rounded-lum-1 hover:lum-bg-nav-bg">
          <Bell size={24} /> Announcements
        </Link>
        <Link q:slot="extra-buttons" href="/ranks"
          class="lum-btn lum-bg-transparent flex md:hidden rounded-lum-1 hover:lum-bg-nav-bg">
          <BarChart size={24} /> Ranks
        </Link>
        <a q:slot="extra-buttons" href="https://luminara.tebex.io"
          class="lum-btn lum-bg-transparent flex md:hidden rounded-lum-1 hover:lum-bg-nav-bg">
          <ShoppingCart size={24} /> Store
        </a>
        <a q:slot="extra-buttons" href="https://birdflop.com/resources/rgb"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <Palette size={24} /> Gradients
        </a>
        <a q:slot="extra-buttons" href="https://drive.proton.me/urls/B1Q1P4K464#y310qg8itvhl"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <Download size={24} /> Downloads
        </a>
        <a q:slot="extra-buttons" href="https://luminescent.dev"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <LuminescentFull />
        </a>
      </SelectMenu>

      <div q:slot='end' class="hidden sm:flex gap-2">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/announcements" class={{
        'lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <Bell size={24} /> Announcements
      </Link>
      <Link q:slot="mobile" href="/rules" class={{
        'lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <Shield size={24} /> Rules
      </Link>
      <Link q:slot="mobile" href="/vote" class={{
        'lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <TrendingUp size={24} /> Vote
      </Link>
      <Link q:slot="mobile" href="/ranks" class={{
        'lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <BarChart size={24} /> Ranks
      </Link>

      <SelectMenu id="nav-resources" q:slot='mobile' customDropdown
        class={{ 'lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true }}
        panelClass='lum-bg-nav-bg'>
        <span q:slot="dropdown" class="flex items-center gap-2">
          <Menu size={24} />
          More
        </span>
        <Link q:slot="extra-buttons" href="/announcements"
          class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <Bell size={24} /> Announcements
        </Link>
        <Link q:slot="extra-buttons" href="/ranks"
          class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <BarChart size={24} /> Ranks
        </Link>
        <a q:slot="extra-buttons" href="https://luminara.tebex.io"
          class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <ShoppingCart size={24} /> Store
        </a>
        <a q:slot="extra-buttons" href="https://birdflop.com/resources/rgb"
          class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <Palette size={24} /> Gradients
        </a>
        <a q:slot="extra-buttons" href="https://drive.proton.me/urls/B1Q1P4K464#y310qg8itvhl"
          class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <Download size={24} /> Downloads
        </a>
        <a q:slot="extra-buttons" href="https://luminescent.dev"
          class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <LuminescentFull />
        </a>
      </SelectMenu>

      <div q:slot='mobile' class="flex justify-evenly">
        <SocialButtons />
      </div>
    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <a href="https://luminara.tebex.io" title="Store" class="lum-btn lum-bg-transparent p-2 rounded-lum-2 hover:lum-bg-nav-bg">
      <ShoppingCart size={24} />
    </a>
    <a href="https://github.com/saboooor/Nether-Depths" title="GitHub" class="lum-btn lum-bg-transparent p-2 rounded-lum-2 hover:lum-bg-nav-bg fill-current">
      <SiGithub size={24} />
    </a>
    <a href="https://discord.luminaramc.org" title="Discord" class="lum-btn lum-bg-transparent p-2 rounded-lum-2 hover:lum-bg-nav-bg fill-current">
      <SiDiscord size={24} />
    </a>
  </>;
});
