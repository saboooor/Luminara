import { component$, Slot } from '@builder.io/qwik';
import { OnThisPage } from '~/components/docs/ThisPage';

import Layout from './layout';

export default component$(() => {
  return (
    <Layout>
      <section class="flex flex-col min-h-screen justify-center pt-20 max-w-7xl mx-auto">
        <Slot />
      </section>
      <OnThisPage />
    </Layout>
  );
});