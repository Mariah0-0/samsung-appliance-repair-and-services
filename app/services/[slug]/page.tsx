import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site.constants";
import { getDomain } from "@/config/site.server";
import {
  VISITING_FEE,
  getEnabledServices,
  getServiceByUrlSlug,
} from "@/config/services.constants";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceProblems from "@/components/service/ServiceProblems";
import ServiceProcess from "@/components/service/ServiceProcess";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import RelatedServices from "@/components/service/RelatedServices";
import ContactForm from "@/components/ContactForm";

const { business, contact, location } = site;

export const dynamicParams = false;

export function generateStaticParams() {
  return getEnabledServices().map((service) => ({
    slug: service.baseSlug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceByUrlSlug(slug);
  if (!service) return {};

  const domain = await getDomain();
  const baseUrl = `https://${domain}`;
  const pageUrl = `${baseUrl}/services/${slug}`;

  const title = `${business.brand} ${service.name} in ${location.city} | ${business.name}`;
  const description = `${business.brand} ${service.name} in ${location.city}: ${service.pricingCovers}. ₹${VISITING_FEE} visiting fee, same-day service.`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      siteName: business.name,
      locale: "en_IN",
      type: "website",
      url: pageUrl,
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceByUrlSlug(slug);
  if (!service) notFound();

  const domain = await getDomain();
  const baseUrl = `https://${domain}`;
  const pageUrl = `${baseUrl}/services/${slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${business.brand} ${service.name}`,
    description: service.intro,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: `+91${contact.phone1}`,
    },
    areaServed: {
      "@type": "City",
      name: location.city,
    },
    url: pageUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
      { "@type": "ListItem", position: 3, name: service.name, item: pageUrl },
    ],
  };

  const otherServices = getEnabledServices().filter(
    (s) => s.key !== service.key,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ServiceHero service={service} />
      <ServiceProblems service={service} />
      <ServiceProcess />
      <ServiceFAQ service={service} />
      <RelatedServices services={otherServices} currentService={service} />
      <ContactForm />
    </>
  );
}
