import { component$, Slot, useVisibleTask$ } from '@qwik.dev/core';
import Nav from '~/components/Nav';

import Background from '~/components/backgrounds';
import { useLocation } from '@qwik.dev/router';

export default component$(() => {
  const loc = useLocation();

  return (
    <>
      <Background id="bg" class={{
        'fixed scale-120 bottom-0 blur-none overflow-hidden -z-10 w-lvw h-lvh object-cover opacity-60': true,
        'transition-all duration-1000': loc.isNavigating,
        'blur-xl! bottom-0! opacity-50 scale-150': loc.url.pathname != '/',
      }} />
      <Nav />
      <Slot />
    </>
  );
});
