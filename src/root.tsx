import { component$, useStyles$, QRL } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/head';

import globalStyles from './global.css?inline';

export function onScroll(fnQrl: QRL<() => void>) {
  document.addEventListener('scroll', async () => {
    const fn = await fnQrl.resolve();
    fn();
  });
}
export const onScrollQrl = onScroll;

export const onScroll$: any = (fnQrl: QRL<()=>void>) => {
  document.addEventListener('scroll', async () => {
    const fn = await fnQrl.resolve();
    fn();
  });
};

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="bg-gradient-to-b from-purple-900 to-pink-400 text-gray-100 min-h-screen pt-20">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});