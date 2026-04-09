import { component$, Slot } from '@qwik.dev/core';
import { OnThisPage } from '~/components/docs/ThisPage';

import Layout from './layout';

export default component$(() => {
  return (
    <Layout>
      <OnThisPage />
      <section class="flex flex-col min-h-screen justify-center pt-20 max-w-7xl mx-auto pr-[calc(1/6*100%)] markdown">
        <Slot />
      </section>
    </Layout>
  );
});