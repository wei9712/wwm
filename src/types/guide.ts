export type Category = {
  id: string;
  name: string;
  description: string;
};

export type GuideArticle = {
  id: string;
  categoryId: string;
  title: string;
  summary: string;
  tags: string[];
  highlights: string[];
  steps: string[];
  tip: string;
  content?: ArticleContentBlock[];
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ArticleImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ArticleContentBlock =
  | {
      type: 'text';
      text: string;
    }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: 'carousel';
      images: ArticleImageItem[];
    };
