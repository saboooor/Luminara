import type { DocsFileAudience } from './docs-audience';

export type GuideMetadata = {
  title: string;
  /** Entire-guide visibility; omitted means both audiences. */
  audience?: DocsFileAudience;
  /** Vanilla Minecraft item sprite for in-game handbook buttons. */
  icon?: string;
  /** Extra in-game navigation buttons; target icons are inherited unless overridden. */
  extra_buttons?: { label: string; href: string; icon?: string }[];
  description?: string;
  keywords?: string;
  contributors?: string[];
  date_created?: string;
  last_updated?: string;
};

export type MarkdownItems = Record<string, GuideMetadata>;
