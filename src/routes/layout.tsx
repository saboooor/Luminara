import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/navbar';

import heroAVIF from "~/images/hero.png?avif";
import heroWEBP from "~/images/hero.png?webp";
import { src as heroPlaceholder } from "~/images/hero.png?metadata";

export default component$(() => {
  return (
    <>
      <main>
        <picture class="fixed top-0 overflow-hidden" style={{ height: '100lvh', width: '100lvw' }}>
          <source srcSet={heroAVIF} type="image/avif" />
          <source srcSet={heroWEBP} type="image/webp" />
          <img
            src={heroPlaceholder}
            class="w-full h-full object-cover"
            alt="Hero Background"
            loading="eager"
          />
        </picture>
        <Header />
        <section style="padding-top: 64px">
          <Slot />
      </section>
    </main>
    </>
  );
});
