import type { Metadata } from "next";
import { site } from "@/config/site.constants";
import { getDomain } from "@/config/site.server";
import { getEnabledServices } from "@/config/services.constants";
import ServiceCard from "@/components/service/ServiceCard";
import ServicesHubHero from "@/components/service/ServicesHubHero";

const { business } = site;

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain();
  const baseUrl = `https://www.${domain?.replace(/^www\./, "")}`;
  const pageUrl = `${baseUrl}/services`;

  const title = `${business.brand} Appliance Repair Services | ${business.name}`;
  const description = `All ${business.brand} appliance repair services: AC, washing machine, TV, microwave oven, refrigerator. Same-day doorstep service, ₹449 visiting fee.`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: business.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ServicesHubPage() {
  const services = getEnabledServices();
  const domain = await getDomain();
  const baseUrl = `https://www.${domain?.replace(/^www\./, "")}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${business.brand} Appliance Repair Services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: `${baseUrl}/services/${service.baseSlug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />

      <ServicesHubHero />

      <section className="scroll-mt-30">
        <div className="w-[95vw] max-w-150 md:max-w-180 lg:max-w-220 mx-auto mt-20 mb-20 sm:mt-25 sm:mb-28">
          <div className="flex flex-col gap-4">
            {services.map((s) => (
              <ServiceCard key={s.key} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
