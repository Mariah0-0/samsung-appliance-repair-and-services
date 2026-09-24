import { getDomain } from "@/config/site.server";
import { getEnabledServices } from "@/config/services.constants";

export default async function sitemap() {
  const domain = await getDomain();
  const baseUrl = `https://www.${domain?.replace(/^www\./, "")}`;

  const serviceUrls = getEnabledServices().map((service) => ({
    url: `${baseUrl}/services/${service.baseSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceUrls,
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
