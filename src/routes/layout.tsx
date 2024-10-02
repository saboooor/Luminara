import { component$, Slot, useVisibleTask$ } from '@builder.io/qwik';
import Header from '~/components/navbar';

import Backgrounds from '~/components/backgrounds';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const Background = Backgrounds[Math.floor(Math.random() * Backgrounds.length)];

  const loc = useLocation();

  useVisibleTask$(async () => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      color: string;
      img: HTMLImageElement;

      constructor() {
        this.x = Math.random() * canvas.width; // Random x position
        this.y = Math.random() * canvas.height; // Random y position
        this.radius = Math.random() * 10 + 10; // Random size
        this.speed = Math.random() * 0.5 + 1; // Random speed
        this.color = 'white'; // White color
        this.img = new Image();
        this.img.src = `/particle/cherry_${Math.floor(Math.random() * 11)}.png`;
      }
      // Update particle position
      update() {
        this.y += this.speed * (loc.url.pathname != '/' ? 0.5 : 1);
        this.x += this.speed * 0.4;
        if (this.y > canvas.height) {
          this.y = 0; // Reset position if particle goes out of the canvas
        }
        if (this.x > canvas.width) {
          this.x = 0; // Reset position if particle goes out of the canvas
        }
      }
      // Draw particle
      draw() {
        // use image as particle
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.img, this.x, this.y, this.radius, this.radius);
      }
    }

    // Create particles
    const numberOfParticles = 80;
    const particles: Particle[] = Array.from({ length: numberOfParticles }, () => new Particle());

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
    }

    // Start animation
    animate();
  });

  return (
    <>
      <main>
        <Background class={{
          'transition-all duration-1000 fixed top-0 overflow-hidden -z-10 w-full h-full object-cover opacity-40': true,
          'blur-xl scale-110': loc.url.pathname != '/',
        }} />
        <canvas id="particles" class="fixed top-0 overflow-hidden -z-10 w-full h-full" style={{
          imageRendering: 'pixelated',
        }}></canvas>
        <Header/>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
