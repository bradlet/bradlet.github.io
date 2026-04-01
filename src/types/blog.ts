export interface BlogPostMeta {
  slug: string;
  title: string;
  author: string;
  date: string;
  estimatedTime: string;
}

export interface BlogPostData extends BlogPostMeta {
  content: string;
}
