import type { Processor } from 'unified';
import { filterDocsAudience } from './docs-audience';

type Node = {
  type: string;
  value?: string;
  url?: string;
  alt?: string;
  title?: string;
  children?: Node[];
  name?: string;
  attributes?: { type: string; name: string; value: string }[];
};

/** Preserve styled spans and resolve Minecraft sprite images for the website. */
function preserveInlineMarkup(node: Node) {
  if (
    node.type === 'image' &&
    /^minecraft:(item|block)\/[a-z0-9_]+$/.test(node.url || '')
  ) {
    const iconOnly = node.title === 'sprite-only';
    const texture = node.url!.slice('minecraft:'.length);
    const label =
      node.alt?.trim() || texture.split('/')[1].replaceAll('_', ' ');
    node.type = 'mdxJsxTextElement';
    node.name = 'span';
    node.attributes = [];
    node.children = [
      {
        type: 'mdxJsxTextElement',
        name: 'img',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'src',
            value: `https://assets.mcasset.cloud/1.21.10/assets/minecraft/textures/${texture}.png`,
          },
          {
            type: 'mdxJsxAttribute',
            name: 'alt',
            value: iconOnly ? label : '',
          },
          { type: 'mdxJsxAttribute', name: 'title', value: label },
          { type: 'mdxJsxAttribute', name: 'width', value: '16' },
          { type: 'mdxJsxAttribute', name: 'height', value: '16' },
          { type: 'mdxJsxAttribute', name: 'loading', value: 'lazy' },
          {
            type: 'mdxJsxAttribute',
            name: 'style',
            value:
              'display: inline-block; width: 1em; height: 1em; margin: 0; vertical-align: -0.125em; image-rendering: pixelated',
          },
        ],
      },
      { type: 'text', value: ` ${label}` },
    ];
    if (iconOnly) node.children.pop();
    delete node.title;
    delete node.url;
    delete node.alt;
  }
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
      preserveInlineMarkup(child);
      stack[stack.length - 1].push(child);
    }
  }
  node.children = children;
}

/** Reparse the website variant before heading IDs, menus, and rendered HTML are generated. */
export function remarkDocsAudience(this: Processor) {
  return (_tree: unknown, file: { value: unknown }) => {
    const tree = this.parse(filterDocsAudience(String(file.value), 'website'));
    preserveInlineMarkup(tree);
    return tree;
  };
}
