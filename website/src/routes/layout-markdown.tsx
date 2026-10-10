import { component$, Slot } from '@qwik.dev/core';
import { OnThisPage } from '~/components/docs/ThisPage';

import Layout from './layout';

export default component$(() => {
  return (
    <Layout>
      <OnThisPage />
      <section class="markdown mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-20 pr-[calc(1/6*100%)]">
        <Slot />
      </section>
    </Layout>
  );
});
