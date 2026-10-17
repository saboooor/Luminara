import {
  $,
  component$,
  useOnWindow,
  useStore,
  useVisibleTask$,
} from '@qwik.dev/core';
import { type DocumentHead } from '@qwik.dev/router';

import Why from '~/components/sections/Why';
import Features from '~/components/sections/Features';

import Logo from '~/images/logo.png?jsx';
import Loader2 from 'lucide-icons-qwik/icons/Loader2';
import SiDiscord from 'simple-icons-qwik/icons/SiDiscord';
import { Purpur } from '@luminescent/icons-qwik';

export default component$(() => {
  const store = useStore({
    online: null as boolean | null,
    players: 0,
    version: null as string | null,
    discordonline: null as number | null,
  });

  useOnWindow(
    'scroll',
    $(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) return;
      const hero = document.getElementById('hero')!;
      hero.style.transform = `translateY(${window.scrollY / 2}px)`;
    })
  );

  // oxlint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const srvjson = await fetch('https://api.mcsrvstat.us/2/luminaramc.org');
    const srvdata = (await srvjson.json()) as {
      online: boolean;
      protocol?: number;
      players: { online: number };
      version: string;
    };
    if (!srvdata.online || srvdata.protocol == 1) {
      store.online = false;
    } else {
      store.online = true;
      store.players = srvdata.players.online;
      store.version = srvdata.version.replace('Cherry Blossom ', '');
    }
    const discordjson = await fetch(
      'https://discord.com/api/guilds/865519986806095902/widget.json'
    );
    const discorddata = (await discordjson.json()) as {
      presence_count: number;
    };
    store.discordonline = discorddata.presence_count;
  });

  // oxlint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    // Preload images
    const particleImages: HTMLImageElement[] = Array.from(
      { length: 12 },
      (_, i) => {
        const img = new Image();
        img.src = `/particle/cherry_${i}.png`;
        return img;
      }
    );

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.imageSmoothingEnabled = false;

    // Handle canvas resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false;
    });

    // Define particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speed: number;
      rotation: number;
      img: number;

      constructor() {
        this.x = Math.random() * canvas.width; // Random x position
        this.y = Math.random() * canvas.height; // Random y position
        this.size = Math.random() * 10 + 10; // Random size
        this.speed = Math.random() * 0.5 + 1; // Random speed
        this.rotation = Math.random() * 2 * Math.PI; // Random rotation
        this.img = Math.floor(Math.random() * 11);
      }
      // Update particle position
      update() {
        const speedFactor = location.pathname !== '/' ? 0.5 : 1; // Change speed based on URL
        this.y += this.speed * speedFactor;
        this.x += this.speed * speedFactor;
        if (this.y > canvas.height) this.y = 0; // Reset position if particle goes out of the canvas
        if (this.x > canvas.width) this.x = 0; // Reset position if particle goes out of the canvas

        this.rotation += 0.01; // Change rotation slightly
      }
      // Draw particle
      draw() {
        // use image as particle
        ctx.save();
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate(this.rotation);
        ctx.drawImage(
          particleImages[this.img],
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );
        ctx.restore();
      }
    }

    // Create particles, mobile will have fewer particles
    let numberOfParticles = 32;

    if (window.innerWidth < 768) {
      numberOfParticles = 12;
    }

    const particles: Particle[] = Array.from(
      { length: numberOfParticles },
      () => new Particle()
    );

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    // Start animation
    animate();
  });

  return (
    <>
      <canvas
        id="particles"
        class="fixed top-0 -z-10 h-lvh w-full overflow-hidden brightness-50"
      />
      <section class="relative flex min-h-svh flex-col items-center justify-center gap-32 overflow-hidden">
        <div
          id="hero"
          class="flex w-full max-w-5xl flex-col items-center justify-center px-20 pt-18 text-gray-100 md:flex-row md:justify-between md:gap-5 xl:max-w-6xl 2xl:max-w-7xl"
        >
          <div class="relative flex flex-col gap-2 xl:gap-4">
            <div
              class={{
                'relative mr-auto': true,
              }}
            >
              <h1
                class={{
                  'relative flex items-center bg-clip-text text-7xl font-extrabold text-transparent drop-shadow-lg xl:text-8xl': true,
                  'animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-600': true,
                }}
              >
                <Logo class="h-auto w-full max-w-[496px] object-contain" />
              </h1>
            </div>
            <div
              class={{
                'relative mr-auto': true,
              }}
            >
              <h2 class="animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800 text-xl! font-bold drop-shadow-md md:text-2xl! xl:text-3xl!">
                Minecraft with enhanced features, world-generation, and a
                friendly community.
              </h2>
            </div>
          </div>
          <div class="mt-8 flex flex-col gap-2">
            <button
              onClick$={() => {
                navigator.clipboard.writeText('luminaramc.org').catch(() => {
                  const response = document.getElementById(
                    'response-desktop'
                  ) as HTMLParagraphElement;
                  response.textContent = 'FAILED TO COPY, CHECK CONSOLE';
                  setTimeout(
                    () => (response.textContent = 'COPIED SUCCESSFULLY'),
                    3000
                  );
                });
              }}
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-lum-accent/20 hover:lum-bg-lum-accent animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-800 text-lg backdrop-blur-sm"
            >
              <Purpur size={36} />
              <span class="flex flex-col gap-1 text-left">
                <span class="flex items-center gap-2 font-bold">
                  ip: luminaramc.org
                </span>
                <span class="flex items-center gap-1 text-sm">
                  {store.online === null && (
                    <Loader2 size={16} class="animate-spin" />
                  )}
                  {store.online === null && 'click to copy ip'}
                  {store.online && `${store.players} online - ${store.version}`}
                  {store.online === false && 'server offline'}
                </span>
              </span>
            </button>
            <a
              href="https://discord.luminaramc.org"
              class="lum-btn xl:lum-btn-p-4 lum-grad-bg-indigo-500/20 hover:lum-bg-indigo-300 animate-in fade-in motion-safe:slide-in-from-top-16 motion-safe:anim-duration-600 fill-current text-lg backdrop-blur-sm"
            >
              <SiDiscord size={36} />
              <span class="flex flex-col gap-1 text-left">
                <span class="flex items-center gap-2 font-bold">discord</span>
                <span class="flex items-center gap-1 text-sm">
                  {store.discordonline === null && (
                    <Loader2 size={16} class="animate-spin" />
                  )}
                  {store.discordonline} users online
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
      <div class="mask-[linear-gradient(to_bottom,transparent_0px,black_8rem,black_100%)] pt-32 backdrop-blur-xl bg-bg/40">
        <Why />
        <Features />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
    {
      name: 'og:description',
      content:
        'Formerly known as Nether Depths, Luminara SMP is a Minecraft server with a focus on community and player experience.',
    },
  ],
};
