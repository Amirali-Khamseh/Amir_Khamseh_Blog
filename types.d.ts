export type Post = {
  slug: string;
  metadata: PostMetadata;
};

export interface PostMetadata {
  title: string;
  publishDate: string;
  [key: string]: any;
  category: string;
}
