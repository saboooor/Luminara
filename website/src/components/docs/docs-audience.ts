export type DocsAudience = 'website' | 'minecraft';
export type DocsFileAudience = DocsAudience | 'both';

export function docsVisibleTo(
  value: DocsFileAudience | undefined,
  target: DocsAudience
) {
  if (value !== undefined && !['both', 'website', 'minecraft'].includes(value))
    throw new Error(`Invalid documentation audience: ${value}`);
  return value === undefined || value === 'both' || value === target;
}

/** Standalone MDX comments select an audience; fenced examples remain literal. */
export function filterDocsAudience(source: string, audience: DocsAudience) {
  const stack: DocsAudience[] = [];
  let fence: { marker: string; length: number } | undefined;
  const output: string[] = [];
  for (const line of source.split(/(?<=\n)/)) {
    const delimiter = line.trimEnd().match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (fence) {
      if (
        delimiter &&
        delimiter[1][0] === fence.marker &&
        delimiter[1].length >= fence.length &&
        !delimiter[2].trim()
      )
        fence = undefined;
    } else if (delimiter) {
      fence = { marker: delimiter[1][0], length: delimiter[1].length };
    } else {
      const marker = line
        .trim()
        .match(/^\{\/\*\s*(audience:(website|minecraft)|\/audience)\s*\*\/\}$/);
      if (marker) {
        if (marker[1] === '/audience') {
          if (!stack.length)
            throw new Error('Audience closing marker has no opening marker');
          stack.pop();
        } else stack.push(marker[2] as DocsAudience);
        continue;
      }
    }
    if (stack.every((target) => target === audience)) output.push(line);
  }
  if (stack.length)
    throw new Error('Audience section is missing its closing marker');
  return output.join('');
}
