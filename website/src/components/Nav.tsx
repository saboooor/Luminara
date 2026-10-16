import { component$, Fragment } from '@qwik.dev/core';
import { Link, useLocation } from '@qwik.dev/router';
import { Nav, Dropdown } from '@luminescent/ui-qwik';
import Book from 'lucide-icons-qwik/icons/Book';
import Crown from 'lucide-icons-qwik/icons/Crown';
import Scale from 'lucide-icons-qwik/icons/Scale';
import Vote from 'lucide-icons-qwik/icons/Vote';
import ShoppingCart from 'lucide-icons-qwik/icons/ShoppingCart';
import Download from 'lucide-icons-qwik/icons/Download';
import Palette from 'lucide-icons-qwik/icons/Palette';
import Loader2 from 'lucide-icons-qwik/icons/Loader2';
import Ellipsis from 'lucide-icons-qwik/icons/Ellipsis';
import { LuminescentFull } from '@luminescent/icons-qwik';
import SiDiscord from 'simple-icons-qwik/icons/SiDiscord';
import SiGithub from 'simple-icons-qwik/icons/SiGithub';

import Logo from '~/images/logo.png?jsx';

export default component$(() => {
  const loc = useLocation();

  return (
    <Nav
      floating
      fixed
      nohamburger
      colorClass="lum-grad-bg-nav-bg"
      style={{
        '--lum-border-radius': '1rem',
      }}
    >
      <Link
        q:slot="start"
        href="/"
        class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg px-2 py-1"
      >
        <Logo class="h-8 w-auto" />
        <span
          class={{
            'transition-all': true,
            '-ml-6 opacity-0': !loc.isNavigating,
          }}
        >
          <Loader2 size={16} class="animate-spin" />
        </span>
      </Link>

      <Link
        q:slot="end"
        href="/rules"
        class={{
          'lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg hidden sm:flex': true,
        }}
      >
        <Scale size={24} /> Rules
      </Link>
      <Link
        q:slot="end"
        href="/vote"
        class={{
          'lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg hidden sm:flex': true,
        }}
      >
        <Vote size={24} /> Vote
      </Link>
      <Link
        q:slot="end"
        href="/ranks"
        class={{
          'lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg hidden md:flex': true,
        }}
      >
        <Crown size={24} /> Ranks
      </Link>

      <Dropdown
        id="nav-resources"
        q:slot="end"
        hover
        class={{
          'lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg hidden sm:flex': true,
        }}
        panelProps={{
          class: 'lum-grad-bg-nav-bg',
        }}
      >
        <Fragment q:slot="dropdown">
          <Ellipsis size={24} />
          More
        </Fragment>
        <Link
          href="/ranks"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg flex md:hidden"
        >
          <Crown size={24} /> Ranks
        </Link>
        <Link
          href="/docs/"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg"
        >
          <Book size={20} /> Docs
        </Link>
        <a
          href="https://birdflop.com/resources/rgb"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg"
        >
          <Palette size={24} /> Gradients
        </a>
        <a
          href="https://drive.proton.me/urls/B1Q1P4K464#y310qg8itvhl"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg"
        >
          <Download size={24} /> Downloads
        </a>
        <a
          href="https://luminescent.dev"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg"
        >
          <LuminescentFull />
        </a>
      </Dropdown>

      <div q:slot="end" class="flex gap-2">
        <SocialButtons />
      </div>

      <Link
        q:slot="mobile"
        href="/rules"
        class="hover:lum-bg-nav-bg! flex-col gap-1! p-1! text-[0.65rem]!"
      >
        <Scale size={20} /> Rules
      </Link>
      <Link
        q:slot="mobile"
        href="/vote"
        class="hover:lum-bg-nav-bg! flex-col gap-1! p-1! text-[0.65rem]!"
      >
        <Vote size={20} /> Vote
      </Link>
      <Link
        q:slot="mobile"
        href="/ranks"
        class="hover:lum-bg-nav-bg! flex-col gap-1! p-1! text-[0.65rem]!"
      >
        <Crown size={20} /> Ranks
      </Link>

      <Dropdown
        id="nav-more"
        q:slot="mobile"
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
        <Link
          href="/store"
          class="lum-btn lum-btn-p-1! lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg"
        >
          <ShoppingCart size={20} /> Store
        </Link>
        <Link
          href="/docs/"
          class="lum-btn lum-bg-transparent rounded-lum-1 hover:lum-bg-nav-bg"
        >
          <Book size={20} /> Docs
        </Link>
        <a
          href="https://birdflop.com/resources/rgb"
          class="lum-btn lum-btn-p-1! lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg"
        >
          <Palette size={20} /> Gradients
        </a>
        <a
          href="https://drive.proton.me/urls/B1Q1P4K464#y310qg8itvhl"
          class="lum-btn lum-btn-p-1! lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg"
        >
          <Download size={20} /> Downloads
        </a>
        <a
          href="https://luminescent.dev"
          class="lum-btn lum-btn-p-1! lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg"
        >
          <LuminescentFull />
        </a>
      </Dropdown>
    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return (
    <>
      <Link
        href="/store"
        title="Store"
        class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg p-2"
      >
        <ShoppingCart size={24} />
      </Link>
      <a
        href="https://github.com/saboooor/Luminara"
        title="GitHub"
        class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg fill-current p-2"
      >
        <SiGithub size={24} />
      </a>
      <a
        href="https://discord.luminaramc.org"
        title="Discord"
        class="lum-btn lum-bg-transparent rounded-lum-2 hover:lum-bg-nav-bg fill-current p-2"
      >
        <SiDiscord size={24} />
      </a>
    </>
  );
});
