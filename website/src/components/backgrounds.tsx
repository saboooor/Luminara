import {
  component$,
  useStore,
  type QwikIntrinsicElements,
} from '@qwik.dev/core';
import Cave from '~/images/backgrounds/cave.png?w=640;1280;1920;2560;3840&jsx';
import UndergroundBase from '~/images/backgrounds/underground_base.png?w=640;1280;1920;2560;3840&jsx';
import Village from '~/images/backgrounds/village.png?w=640;1280;1920;2560;3840&jsx';

const backgrounds = [Cave, UndergroundBase, Village];

export default component$(
  (
    props: Omit<
      QwikIntrinsicElements['img'],
      'src' | 'width' | 'height' | 'srcSet'
    >
  ) => {
    const bgStore = useStore({
      current: Math.floor(Math.random() * backgrounds.length),
    });
    return (
      <>
        {backgrounds[bgStore.current] === Cave && <Cave {...props} />}
        {backgrounds[bgStore.current] === UndergroundBase && (
          <UndergroundBase {...props} />
        )}
        {backgrounds[bgStore.current] === Village && <Village {...props} />}
      </>
    );
  }
);
