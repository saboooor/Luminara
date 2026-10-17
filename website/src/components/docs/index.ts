import { type ContentMenu } from '@qwik.dev/router';
import { type MarkdownItems } from './types';

const menuItemPriority: Record<string, number> = {
  'Player handbook': 1,
  'Getting Started': 2,
  Travel: 3,
  Protection: 4,
  Economy: 5,
  Progression: 6,
  Vehicles: 7,
  Building: 8,
  Social: 9,
  Gameplay: 10,
};

const label = (part: string) =>
  part
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export function buildMenu(markdownItems: MarkdownItems): ContentMenu[] {
  type MenuNode = { text: string; href?: string; items?: MenuNode[] };
  const root: MenuNode[] = [];
  for (const [path, metadata] of Object.entries(markdownItems).sort(
    ([a], [b]) => a.localeCompare(b)
  )) {
    const parts = path.split('/').filter(Boolean).slice(1);
    if (!parts.length) {
      root.push({ text: metadata.title, href: '/docs/' });
      continue;
    }
    let items = root;
    for (let i = 0; i < parts.length; i++) {
      const href = `/docs/${parts.slice(0, i + 1).join('/')}/`;
      let item = items.find((entry) => entry.href === href);
      if (!item) {
        item = { text: markdownItems[href]?.title || label(parts[i]), href };
        items.push(item);
      }
      if (i < parts.length - 1) {
        item.items ||= [];
        items = item.items;
      }
    }
  }
  const sort = (items: MenuNode[]) => {
    items.sort(
      (a, b) =>
        (menuItemPriority[a.text || ''] ?? 100) -
          (menuItemPriority[b.text || ''] ?? 100) ||
        (a.text || '').localeCompare(b.text || '')
    );
    items.forEach((item) => item.items && sort(item.items));
  };
  sort(root);
  return root;
}

export function searchGuides(markdownItems: MarkdownItems, query: string) {
  const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  return Object.entries(markdownItems)
    .filter(([path, item]) => {
      const haystack =
        `${item.title} ${item.description || ''} ${item.keywords || ''} ${path}`.toLocaleLowerCase();
      return terms.every((term) => haystack.includes(term));
    })
    .sort(([, a], [, b]) => a.title.localeCompare(b.title));
}
