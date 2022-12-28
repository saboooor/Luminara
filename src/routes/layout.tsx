import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/navbar';

export default component$(() => {
  return (
    <>
      <main>
        <div class="fixed top-0 bg-cover" style={{ height: '100lvh', width: '100lvw', backgroundImage: `url("/hero/${Math.floor(Math.random() * 9)}.webp")` }} />
        <Header />
        <section style="padding-top: 64px">
          <Slot />
      </section>
    </main>
    </>
  );
});
