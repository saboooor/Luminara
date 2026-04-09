import { component$ } from '@qwik.dev/core';
import { Hoverable } from '@luminescent/ui-qwik';

import features from './featureslist';

type Feature = {
  title: string;
  description: string;
  learnmore?: string;
  discord?: string;
}

export default component$(() => {
  return (
    <section class="flex flex-col w-full p-10 items-center justify-center">
      <h3 class="font-extrabold text-5xl mb-10">
        Features
      </h3>
      <div class="grid lg:grid-cols-3 gap-2 max-w-5xl">
        {features.map((feature: Feature, i) => (
          <div key={i} class="lum-card lum-grad-bg-lum-card-bg/30 duration-200! relative"
            onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)}
            onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}>
            <h3 class="mb-2 flex items-center gap-2 font-bold text-2xl">
              {feature.title}
            </h3>
            <p class="text-lum-text-secondary">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});