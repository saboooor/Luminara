import type { Processor } from 'unified';
import { filterDocsAudience } from './docs-audience';

type Node = {
  type: string;
  value?: string;
  children?: Node[];
  name?: string;
  attributes?: { type: string; name: string; value: string }[];
};

/** Preserve explicitly styled inline spans when Markdown is reparsed for MDX. */
function preserveSpans(node: Node) {
  if (!node.children) return;
  const children: Node[] = [];
  const stack = [children];
  for (const child of node.children) {
    const opening =
      child.type === 'html'
        ? child.value?.match(/^<span\s+style=(["'])(.*?)\1\s*>$/i)
        : undefined;
    if (opening) {
      const span: Node = {
        type: 'mdxJsxTextElement',
        name: 'span',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'style', value: opening[2] },
        ],
        children: [],
      };
      stack[stack.length - 1].push(span);
      stack.push(span.children!);
    } else if (
      child.type === 'html' &&
      child.value?.toLowerCase() === '</span>' &&
      stack.length > 1
    ) {
      stack.pop();
    } else {
      preserveSpans(child);
      stack[stack.length - 1].push(child);
    }
  }
  node.children = children;
}

/** Reparse the website variant before heading IDs, menus, and rendered HTML are generated. */
export function remarkDocsAudience(this: Processor) {
  return (_tree: unknown, file: { value: unknown }) => {
    const tree = this.parse(filterDocsAudience(String(file.value), 'website'));
    preserveSpans(tree);
    return tree;
  };
}
