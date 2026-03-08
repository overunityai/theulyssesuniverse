import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export const BLOG_CATEGORIES = [
  "The Pantheon",
  "Characters",
  "Mythology",
  "The Books",
  "Space Opera",
  "Behind the Scenes",
  "News",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const POSTS_PER_PAGE = 12;

function getMDXFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): BlogPost[] {
  const files = getMDXFiles();
  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        lastUpdated: data.lastUpdated ? new Date(data.lastUpdated).toISOString() : undefined,
        category: data.category || "News",
        tags: data.tags || [],
        image: data.image || "/images/blog/default.jpg",
        readingTime: Math.ceil(stats.minutes),
        author: data.author || "Sotiris Spyrou",
        content,
        faq: data.faq || undefined,
        keyTakeaways: data.keyTakeaways || undefined,
      } satisfies BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    lastUpdated: data.lastUpdated ? new Date(data.lastUpdated).toISOString() : undefined,
    category: data.category || "News",
    tags: data.tags || [],
    image: data.image || "/images/blog/default.jpg",
    readingTime: Math.ceil(stats.minutes),
    author: data.author || "Sotiris Spyrou",
    content,
    faq: data.faq || undefined,
    keyTakeaways: data.keyTakeaways || undefined,
  };
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return [...cats].sort();
}

export function getAllSlugs(): string[] {
  return getMDXFiles().map((f) => f.replace(/\.mdx$/, ""));
}

export function getPaginatedPosts(page: number): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
} {
  const all = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  const start = (page - 1) * POSTS_PER_PAGE;
  const posts = all.slice(start, start + POSTS_PER_PAGE);
  return { posts, totalPages, currentPage: page };
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  const all = getAllPosts().filter((p) => p.slug !== currentSlug);

  // Score by category match + tag overlap
  const scored = all.map((post) => {
    let score = 0;
    if (post.category === current.category) score += 2;
    const tagOverlap = post.tags.filter((t) => current.tags.includes(t)).length;
    score += tagOverlap;
    return { post, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}
