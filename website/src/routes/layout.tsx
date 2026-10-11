import { component$, Slot } from '@qwik.dev/core';
import Nav from '~/components/Nav';

import Background from '~/components/backgrounds';
import { useLocation } from '@qwik.dev/router';

export default component$(() => {
  const loc = useLocation();

  return (
    <>
      <Background
        id="bg"
        class={{
          'fixed bottom-0 -z-10 h-lvh w-lvw scale-120 overflow-hidden object-cover blur-none': true,
          'transition-all duration-1000': loc.isNavigating,
          'opacity-50': loc.url.pathname == '/',
          'bottom-0! scale-150 opacity-20 blur-xl!': loc.url.pathname != '/',
        }}
      />
      <Nav />
      <Slot />
    </>
  );
});
