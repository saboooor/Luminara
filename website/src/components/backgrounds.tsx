import { component$, useStore } from '@builder.io/qwik';
//@ts-ignore
import Cave from '~/images/backgrounds/cave.png?jsx&w=640;1280;1920;2560;3840';
//@ts-ignore
import UndergroundBase from '~/images/backgrounds/underground_base.png?jsx&w=640;1280;1920;2560;3840';
//@ts-ignore
import Village from '~/images/backgrounds/village.png?jsx&w=640;1280;1920;2560;3840';

const backgrounds = [
  Cave,
  UndergroundBase,
  Village,
];

export default component$((props: any) => {
  const bgStore = useStore({
    current: Math.floor(Math.random() * backgrounds.length),
  });
  return <>
    {backgrounds[bgStore.current] === Cave && <Cave {...props} />}
    {backgrounds[bgStore.current] === UndergroundBase && <UndergroundBase {...props} />}
    {backgrounds[bgStore.current] === Village && <Village {...props} />}
  </>;
});