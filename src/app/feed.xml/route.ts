import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, AUTHOR } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";
export const revalidate = 3600; // 1 hour

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .slice(0, 50) // RSS readers cap at ~50, no need for more
    .map((post) => {
      const postUrl = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const title = escapeXml(post.title);
      const description = escapeXml(post.description || "");
      const author = escapeXml(`sotirisspyrou+goodreads@gmail.com (${AUTHOR.name})`);
      const category = escapeXml(post.category || "Blog");

      return `    <item>
      <title>${title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${author}</author>
      <category>${category}</category>
      <description>${description}</description>
    </item>`;
    })
    .join("\n");

  const lastBuildDate = posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-GB</language>
    <copyright>Copyright ${new Date().getFullYear()} ${escapeXml(AUTHOR.name)}</copyright>
    <managingEditor>sotirisspyrou+goodreads@gmail.com (${escapeXml(AUTHOR.name)})</managingEditor>
    <webMaster>sotirisspyrou+goodreads@gmail.com (${escapeXml(AUTHOR.name)})</webMaster>
    <pubDate>${lastBuildDate}</pubDate>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js + custom feed route</generator>
    <image>
      <url>${SITE_URL}/images/og/og-default.webp</url>
      <title>${escapeXml(SITE_NAME)}</title>
      <link>${SITE_URL}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
