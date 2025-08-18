import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

// @ts-ignore
import icon from '/icon.png';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`${head.title}`}</title>
      <meta content={`${head.title}`} property="og:title" />
      <meta content="#FEA6AE" name="theme-color" />
      <meta content="/icon.png" property="og:image" />

      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" href={icon} />
      <link rel="mask-icon" href={icon} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta content={icon} property="og:image" />

      {head.meta.map((m, i) => (
        <meta {...m} key={i} />
      ))}

      {head.links.map((l, i) => (
        <link {...l} key={i} />
      ))}

      {head.styles.map((s, i) => (
        <style {...s.props} key={i} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s, i) => (
        <script {...s.props} key={i} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});