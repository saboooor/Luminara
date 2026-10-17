import { component$ } from '@qwik.dev/core';
import { Hoverable } from '@luminescent/ui-qwik';

import features from './whylist';

export default component$(() => {
  return (
    <section class="flex w-full flex-col items-center justify-center p-10">
      <h3 class="my-10 text-5xl font-extrabold">
        Why <span class="text-red-200">Luminara SMP?</span>
      </h3>
      <div class="grid max-w-5xl gap-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            class="lum-card lum-grad-bg-lum-card-bg relative duration-200!"
            onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)}
            onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}
          >
            <h3 class="mb-2 flex items-center gap-2 text-2xl font-bold">
              <feature.icon />
              {feature.title}
            </h3>
            <p class="text-lum-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});
