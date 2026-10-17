export type GuideMetadata = {
  title: string;
  /** Vanilla Minecraft item sprite for in-game handbook buttons. */
  icon?: string;
  description?: string;
  keywords?: string;
  contributors?: string[];
  date_created?: string;
  last_updated?: string;
};

export type MarkdownItems = Record<string, GuideMetadata>;
