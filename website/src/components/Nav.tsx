import { component$, Fragment } from '@qwik.dev/core';
import { Link, useLocation } from '@qwik.dev/router';
import { Nav, Dropdown } from '@luminescent/ui-qwik';
import { Crown, Scale, Vote, ShoppingCart, Download, Palette, Loader2, Ellipsis } from 'lucide-icons-qwik';
import { LuminescentFull } from '@luminescent/icons-qwik';
import { SiDiscord, SiGithub } from 'simple-icons-qwik';

import Logo from '~/images/logo.png?jsx';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav floating fixed nohamburger colorClass="lum-grad-bg-nav-bg"
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

      <Link q:slot="end" href="/rules" class={{
        'hidden sm:flex lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <Scale size={24} /> Rules
      </Link>
      <Link q:slot="end" href="/vote" class={{
        'hidden sm:flex lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <Vote size={24} /> Vote
      </Link>
      <Link q:slot="end" href="/ranks" class={{
        'hidden md:flex lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg': true,
      }}>
        <Crown size={24} /> Ranks
      </Link>

      <Dropdown id="nav-resources" q:slot='end' hover
        class={{ 'lum-bg-transparent hidden sm:flex rounded-lum-2 hover:lum-bg-nav-bg': true }}
        panelProps={{
          class: 'lum-grad-bg-nav-bg',
        }}>
        <Fragment q:slot="dropdown">
          <Ellipsis size={24} />
          More
        </Fragment>
        <Link href="/ranks"
          class="lum-btn lum-bg-transparent flex md:hidden rounded-lum-1 hover:lum-bg-nav-bg">
          <Crown size={24} /> Ranks
        </Link>
        <a href="https://birdflop.com/resources/rgb"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <Palette size={24} /> Gradients
        </a>
        <a href="https://drive.proton.me/urls/B1Q1P4K464#y310qg8itvhl"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <Download size={24} /> Downloads
        </a>
        <a href="https://luminescent.dev"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg">
          <LuminescentFull />
        </a>
      </Dropdown>

      <div q:slot='end' class="flex gap-2">
        <SocialButtons />
      </div>

      <Link q:slot="mobile" href="/rules"         class="hover:lum-bg-nav-bg! flex-col gap-1! p-1! text-[0.65rem]!"
>
        <Scale size={20} /> Rules
      </Link>
      <Link q:slot="mobile" href="/vote"         class="hover:lum-bg-nav-bg! flex-col gap-1! p-1! text-[0.65rem]!"
>
        <Vote size={20} /> Vote
      </Link>
      <Link q:slot="mobile" href="/ranks"         class="hover:lum-bg-nav-bg! flex-col gap-1! p-1! text-[0.65rem]!"
>
        <Crown size={20} /> Ranks
      </Link>

      <Dropdown id="nav-more" q:slot='mobile'
        noChevron
        top
        align="center"
        panelProps={{
          class: 'lum-grad-bg-nav-bg/100 rounded-lum-1',
        }}
        class="hover:lum-bg-nav-bg! lum-bg-transparent rounded-lum-1 flex-col! gap-1! p-1! text-[0.65rem]!"
      >
        <Fragment q:slot="dropdown">
          <Ellipsis size={20} />
          More
        </Fragment>
        <a href="https://luminara.tebex.io"
          class="lum-btn lum-btn-p-1! lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <ShoppingCart size={20} /> Store
        </a>
        <a href="https://birdflop.com/resources/rgb"
          class="lum-btn lum-btn-p-1! lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <Palette size={20} /> Gradients
        </a>
        <a href="https://drive.proton.me/urls/B1Q1P4K464#y310qg8itvhl"
          class="lum-btn lum-btn-p-1! lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <Download size={20} /> Downloads
        </a>
        <a href="https://luminescent.dev"
          class="lum-btn lum-btn-p-1! lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg">
          <LuminescentFull />
        </a>
      </Dropdown>
    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <a href="https://luminara.tebex.io" title="Store" class="lum-btn lum-bg-transparent p-2 rounded-lum-2 hover:lum-bg-nav-bg">
      <ShoppingCart size={24} />
    </a>
    <a href="https://github.com/saboooor/Luminara" title="GitHub" class="lum-btn lum-bg-transparent p-2 rounded-lum-2 hover:lum-bg-nav-bg fill-current">
      <SiGithub size={24} />
    </a>
    <a href="https://discord.luminaramc.org" title="Discord" class="lum-btn lum-bg-transparent p-2 rounded-lum-2 hover:lum-bg-nav-bg fill-current">
      <SiDiscord size={24} />
    </a>
  </>;
});
