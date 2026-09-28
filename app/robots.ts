import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
        userAgent: 'SeznamBot',
        allow: '/',
        other: {
          'Request-Rate': '10/1m',
        },
      },

    ],
    sitemap: 'https://www.kushanda.co',
  }
}