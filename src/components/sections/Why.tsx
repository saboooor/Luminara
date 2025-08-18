import { component$ } from '@builder.io/qwik';
import { Hoverable } from '@luminescent/ui-qwik';

import features from './why';

type Feature = {
  icon: any;
  title: string;
  description: string;
}

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col items-center gap-1">
      <h1 class="shadow-outline text-4xl font-bold text-white">
        Why <span class="text-pink-400">Luminara SMP?</span>
      </h1>
      <div class="grid lg:grid-cols-3 gap-2">
        {features.map((feature: Feature, i) => (
          <div key={i} class="lum-card lum-bg-lum-card-bg/30 transition duration-300 hover:duration-300 ease-out lum-hoverable hover:scale-105 backdrop-blur-xl shadow-2xl"
            onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)}
            onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}>
            <h4 class="mt-0! mb-2! flex items-center gap-2">
              <feature.icon size={36} />
              {feature.title}
            </h4>
            <p class="flex-1 text-lg font-normal mb-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});