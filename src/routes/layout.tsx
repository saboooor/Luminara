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
      directionX: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width; // Random x position
        this.y = Math.random() * canvas.height; // Random y position
        this.radius = Math.random() * 1 + 3; // Random size
        this.speed = Math.random() * 0.5 + 1; // Random speed
        this.directionX = Math.random() * 2 - 1; // Random x direction
        this.color = 'white'; // White color
      }
      // Update particle position
      update() {
        this.y -= this.speed * (loc.url.pathname != '/' ? 0.5 : 1);
        this.x += this.directionX * this.speed * 0.4;
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX; // Reverse direction if particle hits the wall
        }
        if (this.y < 0) {
          this.y = canvas.height; // Reset position if particle goes out of the canvas
        }
      }
      // Draw particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        // blur slightly
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.fill();
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
        <canvas id="particles" class="fixed top-0 overflow-hidden -z-10 w-full h-full"></canvas>
        <Header/>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
