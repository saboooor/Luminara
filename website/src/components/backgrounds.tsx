import { component$, useStore } from '@builder.io/qwik';
//@ts-ignore
import Cave from '~/images/backgrounds/cave.png?jsx&w=1280;1920;2560;3840';
//@ts-ignore
import UndergroundBase from '~/images/backgrounds/underground_base.png?jsx&w=1280;1920;2560;3840';
//@ts-ignore
import Village from '~/images/backgrounds/village.png?jsx&w=1280;1920;2560;3840';
const DumyEnd = '/backgrounds/dumy_end.mov';
const DumyPortal = '/backgrounds/dumy_portal.mov';
const DumyIsland = '/backgrounds/dumy_island.mov';

const backgrounds = [
  Cave,
  UndergroundBase,
  Village,
  DumyEnd,
  DumyPortal,
  DumyIsland,
];

export default component$((props: any) => {
  const bgStore = useStore({
    current: Math.floor(Math.random() * backgrounds.length),
  });
  return <>
    {(backgrounds[bgStore.current] === DumyEnd
    || backgrounds[bgStore.current] === DumyPortal
    || backgrounds[bgStore.current] === DumyIsland) &&
      <video autoPlay loop muted {...props}>
        <source src={backgrounds[bgStore.current]} type="video/mp4" />
      </video>
    }
    {backgrounds[bgStore.current] === Cave && <Cave {...props} />}
    {backgrounds[bgStore.current] === UndergroundBase && <UndergroundBase {...props} />}
    {backgrounds[bgStore.current] === Village && <Village {...props} />}
  </>;
});