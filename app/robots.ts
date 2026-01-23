import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Block anything you don't want indexed
        },
        sitemap: 'https://subsecondlabs.com/sitemap.xml',
    }
}