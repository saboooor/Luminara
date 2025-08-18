import { component$ } from '@builder.io/qwik';
import { Hoverable, LogoDiscord } from '@luminescent/ui-qwik';

import features from './features';
import { Link } from 'lucide-icons-qwik';

type Feature = {
  title: string;
  description: string;
  learnmore?: string;
  discord?: string;
}

export default component$(() => {
  return (
    <section class="mx-auto max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-16 flex flex-col items-center gap-1">
      <h1 class="shadow-outline text-4xl font-bold text-white">
        Features
      </h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {features.map((feature: Feature, i) => (
          <div key={i} class="lum-card lum-bg-lum-card-bg/30 transition duration-300 hover:duration-300 ease-out lum-hoverable hover:scale-105 backdrop-blur-xl shadow-2xl"
            onMouseMove$={(e, el) => Hoverable.onMouseMove$(e, el)}
            onMouseLeave$={(e, el) => Hoverable.onMouseLeave$(e, el)}>
            <h3 class="mt-0! mb-2! flex items-center gap-1">
              {feature.title}
            </h3>
            <p class="flex-1 text-lg font-normal mb-2">{feature.description}</p>
            {feature.discord && (
              <a href={feature.discord} class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
                <LogoDiscord size={24} /> Join Discord
              </a>
            )}
            {feature.learnmore && (
              <a href={feature.learnmore} target="_blank" class="lum-btn lum-bg-luminescent-600 hover:lum-bg-luminescent-500">
                <Link size={24} /> Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
});