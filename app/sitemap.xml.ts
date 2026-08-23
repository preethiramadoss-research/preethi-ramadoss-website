import { INNOVATIONS } from '../content/innovations'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  const staticPaths = ['', 'about', 'expertise', 'consulting', 'innovations', 'research', 'collaborate', 'opportunities', 'contact', 'insights']

  const urls = [
    ...staticPaths.map((p) => `${baseUrl}/${p}`),
    ...INNOVATIONS.map((i) => `${baseUrl}/innovations/${i.slug}`)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `
    <url>
      <loc>${u.replace(/\/+$/, '')}</loc>
    </url>`
      )
      .join('')}
  </urlset>`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
