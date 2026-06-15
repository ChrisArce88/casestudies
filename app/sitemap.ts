export default async function sitemap() {
  const staticRoutes = [
    '/',
    '/apply',
    '/refinance',
  ]

  const dynamicRoutes = await getDynamicPages()

  return [
    ...staticRoutes.map(url => ({
      url: `https://cashloansexperts.com${url}`,
      lastModified: new Date(),
    })),
    ...dynamicRoutes.map(page => ({
      url: `https://cashloansexperts.com/${page.slug}`,
      lastModified: page.updatedAt,
    })),
  ]
}