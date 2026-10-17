import { component$ } from '@qwik.dev/core';
import { Link } from '@qwik.dev/router';
import { Hoverable } from '@luminescent/ui-qwik';

import features, { featureGuides } from './featureslist';

type Feature = {
  title: string;
  description: string;
  learnmore?: string;
  discord?: string;
};

export default component$(() => {
  return (
    <section class="flex w-full flex-col items-center justify-center p-10">
      <h3 class="mb-10 text-5xl font-extrabold">Features</h3>
      <div class="grid max-w-5xl gap-2 lg:grid-cols-3">
        {features.map((feature: Feature, i) => (
          <div
            key={i}
            class="lum-card lum-grad-bg-lum-card-bg relative duration-200!"
            onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)}
            onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}
          >
            <h3 class="mb-2 flex items-center gap-2 text-2xl font-bold">
              {feature.title}
            </h3>
            <p class="text-lum-text-secondary">{feature.description}</p>
            {featureGuides[feature.title] && (
              <Link
                href={featureGuides[feature.title]}
                class="lum-btn lum-bg-transparent mt-3 self-start"
              >
                Read the guide
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
});
