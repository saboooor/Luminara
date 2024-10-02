import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

// @ts-ignore
import iconWEBP from '~/images/icon.png?w=96&h=96&format=webp';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`Luminara SMP - ${head.title}`}</title>

      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" href={iconWEBP} />
      <link rel="mask-icon" href={iconWEBP} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content={`Luminara SMP - ${head.title}`} property="og:title" />
      <meta content={iconWEBP} property="og:image" />
      <meta content="#FEA6AE" name="theme-color" />

      {head.meta.map((m) => (
        <>
          <meta {...m} />
        </>
      ))}

      {head.links.map((l) => (
        <>
          <link {...l} />
        </>
      ))}

      {head.styles.map((s) => (
        <>
          <style {...s.props} dangerouslySetInnerHTML={s.style} />
        </>
      ))}
    </>
  );
});
