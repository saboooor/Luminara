import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { SelectMenuRaw, LogoDiscord, Nav, LogoLuminescentFull } from '@luminescent/ui-qwik';
import { BarChart, Bell, Shield, TrendingUp, ShoppingCart, Download, Github, Menu, Palette } from 'lucide-icons-qwik';

import Logo from '~/images/logo.png?jsx';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav floating fixed colorClass="lum-bg-nav-bg !text-gray-100" style={{
      '--lum-border-radius': '1rem',
    }}>
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent py-1 px-2 rounded-lum-1 hover:lum-bg-nav-bg">
        <Logo class="h-8 w-auto" />
        <div class={{
          'transition-all': true,
          '-ml-6 opacity-0': !loc.isNavigating,
        }}>
          <div class="lum-loading w-4 h-4" />
        </div>
      </Link>

      <Link q:slot="end" href="/announcements" class={{
        'hidden lg:flex lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg': true,
      }}>
        <Bell size={24} /> Announcements
      </Link>
      <Link q:slot="end" href="/rules" class={{
        'hidden sm:flex lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg': true,
      }}>
        <Shield size={24} /> Rules
      </Link>
      <Link q:slot="end" href="/vote" class={{
        'hidden sm:flex lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg': true,
      }}>
        <TrendingUp size={24} /> Vote
      </Link>
      <Link q:slot="end" href="/ranks" class={{
        'hidden md:flex lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg': true,
      }}>
        <BarChart size={24} /> Ranks
      </Link>

      <SelectMenuRaw id="nav-resources" q:slot='end' hover customDropdown
        class={{ 'lum-bg-transparent hidden sm:flex rounded-lum-1 hover:lum-bg-nav-bg': true }}
        panelClass='lum-bg-nav-bg'>
        <div q:slot="dropdown" class="flex items-center gap-2">
          <Menu size={24} />
          More
        </div>
        <Link q:slot="extra-buttons" href="/announcements" class="lum-btn lum-bg-transparent flex lg:hidden rounded-lum-1 hover:lum-bg-nav-bg">
          <Bell size={24} /> Announcements
        </Link>
        <Link q:slot="extra-buttons" href="/ranks" class="lum-btn lum-bg-transparent flex md:hidden rounded-lum-1 hover:lum-bg-nav-bg">
          <BarChart size={24} /> Ranks
        </Link>
        <a q:slot="extra-buttons" href="https://luminara.tebex.io" class="lum-btn lum-bg-transparent flex md:hidden rounded-lum-1 hover:lum-bg-nav-bg">
          <ShoppingCart size={24} /> Store
        </a>
        <a q:slot="extra-buttons" href="https://birdflop.com/resources/rgb" class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <Palette size={24} /> Gradients
        </a>
        <a q:slot="extra-buttons" href="https://drive.proton.me/urls/B1Q1P4K464#y310qg8itvhl" class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <Download size={24} /> Downloads
        </a>
        <a q:slot="extra-buttons" href="https://luminescent.dev" class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <LogoLuminescentFull />
        </a>
      </SelectMenuRaw>

      <a q:slot="end" href="https://luminara.tebex.io" class={{
        'hidden md:flex lum-btn lum-bg-transparent p-2 rounded-lum-1 hover:lum-bg-nav-bg': true,
      }}>
        <ShoppingCart size={24} />
      </a>
      <div q:slot='end' class="hidden sm:flex gap-1">
        <SocialButtons />
      </div>

      <div q:slot='mobile' class="flex justify-evenly">
        <SocialButtons />
      </div>
    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <a href="https://github.com/saboooor/Nether-Depths" title="GitHub" class="lum-btn lum-bg-transparent p-2 rounded-lum-1 hover:lum-bg-nav-bg">
      <Github size={24} />
    </a>
    <a href="/discord" title="Discord" class="lum-btn lum-bg-transparent p-2 rounded-lum-1 hover:lum-bg-nav-bg">
      <LogoDiscord size={24} />
    </a>
  </>;
});
