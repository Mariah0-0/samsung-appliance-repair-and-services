import { getDomain } from "./config/site.server";

export default async function robots() {
  const domain = await getDomain();
  const baseUrl = `https://www.${domain?.replace(/^www\./, "")}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
