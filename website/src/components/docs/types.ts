export type GuideMetadata = {
  title: string;
  description?: string;
  keywords?: string;
  contributors?: string[];
  date_created?: string;
  last_updated?: string;
};

export type MarkdownItems = Record<string, GuideMetadata>;
