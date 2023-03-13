import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

// @ts-ignore
import iconWEBP from '~/images/icon.png?height=96&webp';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`Nether Depths - ${head.title}`}</title>
      <meta content="Surpass the limits of The Nether" name="description" />

      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" href={iconWEBP} />
      <link rel="mask-icon" href={iconWEBP} color="#330c0c" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content={`Nether Depths - ${head.title}`} property="og:title" />
      <meta content="Surpass the limits of the Nether" property="og:description" />
      <meta content={iconWEBP} property="og:image" />
      <meta content="#330c0c" name="theme-color" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
