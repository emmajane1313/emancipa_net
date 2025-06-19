import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://emancipa.net";

  const rootUrl = `
    <url>
      <loc>${baseUrl}/</loc>
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
    </url>
  `;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
>
  ${rootUrl}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
