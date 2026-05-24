/**
 * IndexNow API route.
 *
 * Submits URLs to IndexNow (Bing, Yandex, Naver, Seznam, IndexNow.org).
 * Single API call notifies all participating search engines.
 *
 * Usage:
 *   POST /api/indexnow
 *   Body: { urls: ["https://theulyssesuniverse.com/blog/post-slug", ...] }
 *
 * Can be called manually on publish, via a webhook, or from a build hook.
 * Rate limit: max 10,000 URLs per submission.
 *
 * Key file lives at /public/<key>.txt and must remain accessible.
 */

import { SITE_URL } from "@/lib/constants";

const INDEXNOW_KEY = "20efc23bb818f822494f9feb05bb8041beff89d9501e4688259cae282e03c655";
const HOST = "theulyssesuniverse.com";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const urls = Array.isArray(body.urls) ? body.urls : [body.url].filter(Boolean);

    if (!urls.length) {
      return Response.json({ error: "No URLs provided" }, { status: 400 });
    }

    // Validate all URLs belong to our host (IndexNow rejects cross-host)
    const invalidUrls = urls.filter((url: string) => !url.includes(HOST));
    if (invalidUrls.length > 0) {
      return Response.json(
        { error: "URLs must be on theulyssesuniverse.com", invalidUrls },
        { status: 400 }
      );
    }

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    });

    if (response.ok || response.status === 202) {
      return Response.json({
        success: true,
        submitted: urls.length,
        status: response.status,
        message:
          response.status === 200
            ? "URLs accepted by IndexNow (will propagate to Bing, Yandex, Naver, Seznam)"
            : "URLs queued for processing",
      });
    }

    const errorText = await response.text();
    return Response.json(
      {
        success: false,
        status: response.status,
        error: errorText,
      },
      { status: 502 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return Response.json({ success: false, error: message }, { status: 500 });
  }
}

// GET returns the key + status for verification
export async function GET() {
  return Response.json({
    indexnow: {
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      host: HOST,
      participatingEngines: ["Bing", "Yandex", "Naver", "Seznam", "IndexNow.org"],
      usage: "POST { urls: [...] } to submit URLs for indexing",
    },
  });
}
