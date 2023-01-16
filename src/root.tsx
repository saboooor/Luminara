import { component$, useStyles$, useClientEffect$, $, QRL } from '@builder.io/qwik';
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


export const onScroll$ = (fnQrl: QRL<()=>void>) => {
  document.addEventListener('scroll', async () => {
    const fn = await fnQrl.resolve();
    fn();
  });
}

export const blur = () => {
  // Get the backdrop element
  const backDrop = document.getElementById('backdrop');

  // Check the scroll distance and round it up
  const scrollTop = Math.ceil(document.getElementsByTagName('html')[0].scrollTop);

  // Set the max blur value (300 / 6 = 50)
  let blurVal = 50;

  // Set the blur value to (scrollTop / 6) if scroll distance is under 300
  if (scrollTop < 300) blurVal = Math.round(scrollTop / 6);

  // Set blur value with padding for the zoom as well
  blurVal = String(blurVal).padStart(2, '0');
  
  // Set filter with blur valur and scale as a decimal: 1.{blur value}
  backDrop.style.filter = `blur(${blurVal}px)`;
  backDrop.style.transform = `scale(1.${blurVal})`;
};

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  useClientEffect$(()=>{
    blur()
    onScroll$(() => blur());
  })

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="bg-red-900 min-h-screen">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});