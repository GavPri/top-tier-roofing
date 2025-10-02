export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap:
      "https://https://3000-gavpri-toptierroofing-tsh4qhwf7sq.ws-eu121.gitpod.io/sitemap.xml",
  };
}
