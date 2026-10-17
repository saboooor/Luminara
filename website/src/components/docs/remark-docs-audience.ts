import type { Processor } from 'unified';
import { filterDocsAudience } from './docs-audience';

/** Reparse the website variant before heading IDs, menus, and rendered HTML are generated. */
export function remarkDocsAudience(this: Processor) {
  return (_tree: unknown, file: { value: unknown }) =>
    this.parse(filterDocsAudience(String(file.value), 'website'));
}
