import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { DropdownRaw, LogoDiscord, LogoLuminescentFull, Nav } from '@luminescent/ui-qwik';
import { GitNetworkOutline, LogoGithub } from 'qwik-ionicons';
import { NotificationsOutline, ShieldOutline, TrendingUpOutline, BarChartOutline, CartOutline, DownloadOutline, ColorFillOutline, MailOutline } from 'qwik-ionicons';

import Logo from '~/images/logo.png?jsx';
import LuminescentLogo from './icons/LuminescentLogo';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav floating fixed colorClass="lum-bg-gray-800/50 !text-gray-100">
      <Link q:slot="start" href="/" class="lum-btn lum-bg-transparent">
        <Logo class="w-28" />
        <div class={{
          'transition-all': true,
          '-ml-6 opacity-0': !loc.isNavigating,
        }}>
          <div class="lum-loading w-4 h-4" />
        </div>
      </Link>

      <Link q:slot="end" href="/announcements" class={{
        'hidden lg:flex lum-btn lum-bg-transparent hover:text-white': true,
      }}>
        <NotificationsOutline width="24" class="fill-current" /> Announcements
      </Link>
      <Link q:slot="end" href="/rules" class={{
        'hidden sm:flex lum-btn lum-bg-transparent hover:text-white': true,
      }}>
        <ShieldOutline width="24" class="fill-current" /> Rules
      </Link>
      <Link q:slot="end" href="/vote" class={{
        'hidden sm:flex lum-btn lum-bg-transparent hover:text-white': true,
      }}>
        <TrendingUpOutline width="24" class="fill-current" /> Vote
      </Link>
      <Link q:slot="end" href="/ranks" class={{
        'hidden md:flex lum-btn lum-bg-transparent hover:text-white': true,
      }}>
        <BarChartOutline width="24" class="fill-current" /> Ranks
      </Link>

      <DropdownRaw id="nav-resources" q:slot='end' hover
        display={<div class="flex items-center gap-3">More</div>}
        class={{ 'lum-bg-transparent hidden sm:flex': true }}>
        <Link q:slot="extra-buttons" href="/announcements" class="lum-btn lum-bg-transparent flex lg:hidden">
          <NotificationsOutline width="24" class="fill-current" /> Announcements
        </Link>
        <Link q:slot="extra-buttons" href="/ranks" class="lum-btn lum-bg-transparent flex md:hidden">
          <BarChartOutline width="24" class="fill-current" /> Ranks
        </Link>
        <a q:slot="extra-buttons" href="https://luminara.tebex.io" class="lum-btn lum-bg-transparent flex md:hidden">
          <CartOutline width="24" class="fill-current" /> Store
        </a>
        <a q:slot="extra-buttons" href="https://birdflop.com/resources/rgb" class="lum-btn lum-bg-transparent">
          <ColorFillOutline width="24" class="fill-current" /> Gradients
        </a>
        <a q:slot="extra-buttons" href="https://docs.google.com/forms/d/e/1FAIpQLSdRfcr9hIV1ohL0GCy498ubGkXn4uLbIgAE0UrRiiHLGiAx9A" class="lum-btn lum-bg-transparent">
          <MailOutline width="24" class="fill-current" /> Appeal a ban
        </a>
        <Link q:slot="extra-buttons" href="/downloads" class="lum-btn lum-bg-transparent">
          <DownloadOutline width="24" class="fill-current" /> Downloads
        </Link>
        <a q:slot="extra-buttons" href="https://docs.google.com/forms/d/e/1FAIpQLSdRfcr9hIV1ohL0GCy498ubGkXn4uLbIgAE0UrRiiHLGiAx9A" class="lum-btn lum-bg-transparent">
          <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="h-8 w-32 transition text-gray-300 rounded-md flex items-center whitespace-nowrap">
            <div style="filter: drop-shadow(0 0 1rem #CB6CE6);">
              <LuminescentLogo />
            </div>
          </div>
        </a>
      </DropdownRaw>

      <a q:slot="end" href="https://luminara.tebex.io" class={{
        'hidden md:flex lum-btn lum-bg-transparent hover:text-white lum-pad-equal-sm': true,
      }}>
        <CartOutline width="24" class="fill-current" />
      </a>
      <div q:slot='end' class="hidden sm:flex gap-2">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/forks" class="lum-btn lum-bg-transparent hover:text-white">
        <GitNetworkOutline width="24" /> Fork Graph
      </Link>
      <a q:slot="mobile" href="https://ui.luminescent.dev" class="lum-btn lum-bg-transparent hover:text-white">
        <div class="font-semibold flex items-center gap-1">
          <LogoLuminescentFull width={100} class="mt-1" /> / ui
        </div>
      </a>
      <div q:slot='mobile' class="flex justify-evenly">
        <SocialButtons />
      </div>
    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <a href="https://github.com/saboooor/Nether-Depths" title="GitHub" class="lum-btn lum-bg-transparent hover:text-white fill-current lum-pad-equal-sm">
      <LogoGithub width="24" />
    </a>
    <a href="/discord" title="Discord" class="lum-btn lum-bg-transparent hover:text-white fill-current lum-pad-equal-sm">
      <LogoDiscord width="24" />
    </a>
  </>;
});
