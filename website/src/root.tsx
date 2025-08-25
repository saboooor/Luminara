import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/head';

import './global.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <script defer src="https://umami.bwmp.dev/script.js" data-website-id="ac3b2714-3669-4e60-bcc3-7d45f51ac9d2"/>
        <RouterHead />
      </head>
      <body lang="en" class="bg-bg text-gray-100 min-h-lvh">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});