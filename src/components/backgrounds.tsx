// @ts-nocheck
import { component$ } from '@builder.io/qwik';
import Cave from '~/images/backgrounds/cave.png?jsx&w=1280;1920;2560;3840';
import UndergroundBase from '~/images/backgrounds/underground_base.png?jsx&w=1280;1920;2560;3840';
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
  const i = Math.floor(Math.random() * backgrounds.length);
  const Background = backgrounds[i];
  return <>{backgrounds[i] === DumyEnd || backgrounds[i] === DumyPortal || backgrounds[i] === DumyIsland ?
    <video autoPlay loop muted {...props}>
      <source src={backgrounds[i]} type="video/mp4" />
    </video>
    : <Background {...props} />}
  </>;
});