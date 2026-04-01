import { parse as parseYaml } from "yaml";
import type { BlogPostData, BlogPostMeta } from "../types/blog";

const modules = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontMatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  return {
    data: parseYaml(match[1]) as Record<string, string>,
    content: match[2],
  };
}

function slugFromPath(path: string): string {
  const filename = path.split("/").pop() ?? "";
  return filename.replace(/\.md$/, "");
}

function parseBlogPost(path: string, raw: string): BlogPostData {
  const { data, content } = parseFrontMatter(raw);
  return {
    slug: slugFromPath(path),
    title: data.title ?? "Untitled",
    author: data.author ?? "Unknown",
    date: data.date ?? "",
    estimatedTime: data.estimated_time ?? "",
    content,
  };
}

export const blogPosts: BlogPostData[] = Object.entries(modules)
  .map(([path, raw]) => parseBlogPost(path, raw))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getBlogPost(slug: string): BlogPostData | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostMetas(): BlogPostMeta[] {
  return blogPosts.map(
    ({ slug, title, author, date, estimatedTime }) =>
      ({ slug, title, author, date, estimatedTime }),
  );
}
