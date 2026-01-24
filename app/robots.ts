import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://subsecondlabs.com"

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Block anything you don't want indexed
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}