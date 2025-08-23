import { component$, Slot, useVisibleTask$ } from '@builder.io/qwik';
import Nav from '~/components/Nav';

import Background from '~/components/backgrounds';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    // Preload images
    const particleImages: HTMLImageElement[] = Array.from({ length: 12 }, (_, i) => {
      const img = new Image();
      img.src = `/particle/cherry_${i}.png`;
      return img;
    });

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
        this.size = (Math.random() * 10 + 10); // Random size
        this.speed = (Math.random() * 0.5 + 1); // Random speed
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
        ctx.drawImage(particleImages[this.img], -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    // Create particles, mobile will have fewer particles
    let numberOfParticles = 32;

    if (window.innerWidth < 768) {
      numberOfParticles = 12;
    }

    const particles: Particle[] = Array.from({ length: numberOfParticles }, () => new Particle());

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
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
      <Background class={{
        'transition-all duration-1000 fixed top-0 overflow-hidden -z-10 w-full h-lvh object-cover brightness-50': true,
        'blur-xl scale-110': loc.url.pathname != '/',
      }} />
      <canvas id="particles" class="fixed top-0 overflow-hidden -z-10 w-full h-lvh bg-gradient-to-b from-pink-400/30 " />
      <Nav />
      <Slot />
    </>
  );
});
