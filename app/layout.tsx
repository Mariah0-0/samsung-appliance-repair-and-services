import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "./components/Footer";
import { site } from "@/config/site.constants";
import { getDomain } from "@/config/site.server";
import FloatingCTA from "./components/UI/FloatingCTA";
import WhatsApp from "./assets/WhatsApp";
import Phone from "./assets/Phone";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});

const { business, contact, links, location, colors } = site;

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain();
  const baseUrl = `https://www.${domain?.replace(/^www\./, "")}`;

  return {
    metadataBase: new URL(baseUrl),
    title: `${business.name} ${location.city} | Same-Day AC, Fridge, Microwave, Water Purifier, & TV Repair`,
    icons: { icon: site.business.icon },
    description: `Expert ${business.brand} appliance repair in ${location.city}. Same-day service for AC, refrigerator, washing machine, TV, and water purifier. ₹449 visiting fee. Book now.`,
    keywords: [
      `${business.brand} repair ${location.city}`,
      `appliance repair ${location.city}`,
      `AC repair ${location.city}`,
      `fridge repair ${location.city}`,
      `washing machine repair ${location.city}`,
      `TV repair ${location.city}`,
      `water purifier repair ${location.city}`,
      `${business.brand} repair ${location.locality}`,
      `appliance repair ${location.locality}`,
      `AC repair ${location.locality}`,
      `fridge repair ${location.locality}`,
      `washing machine repair ${location.locality}`,
      `TV repair ${location.locality}`,
      `water purifier repair ${location.locality}`,
      `${business.brand} service center ${location.city}`,
      `appliance repair near me`,
      `home appliance repair`,
      `${business.brand} washing machine repair`,
      `${business.brand} refrigerator repair`,
      `${business.brand} AC repair`,
      `${business.brand} TV repair`,
      `${business.brand} water purifier repair`,
    ].join(", "),
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: `${business.name} ${location.city}`,
      description: `Same-day ${business.brand} appliance repair in ${location.city}. AC, fridge, washing machine, TV & water purifier.`,
      siteName: business.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const domain = await getDomain();
  const baseUrl = `https://www.${domain?.replace(/^www\./, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: `${baseUrl}/hero-img.webp`,
    description: `Same-day ${business.brand} appliance repair services in ${location.locality}, ${location.city} - AC, fridge, washing machine, TV and water purifier repair.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.locality,
      addressRegion: location.state,
      addressCountry: location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    telephone: `+91${contact.phone1}`,
    priceRange: "₹449",
    openingHours: contact.openingHours.schema,
    serviceType: [
      "AC Repair",
      "Refrigerator Repair",
      "Washing Machine Repair",
      "TV Repair",
      "Water Purifier Repair",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: location.latitude,
        longitude: location.longitude,
      },
      geoRadius: location.serviceRadius,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Appliance Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Repair",
            description:
              "Deep cleaning, gas leak repair, PCB issues, and compressor servicing",
            areaServed: { "@type": "City", name: location.locality },
          },
          price: "449",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Washing Machine Repair",
            description:
              "Drum issues, motor repairs, drain valve faults, and auto-sensor issues",
            areaServed: { "@type": "City", name: location.locality },
          },
          price: "449",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TV Repair",
            description:
              "Screen issues, motherboard problems, display and sound troubleshooting",
            areaServed: { "@type": "City", name: location.locality },
          },
          price: "449",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Purifier Repair",
            description:
              "Filter & membrane replacement, low water flow, leakage fixes",
            areaServed: { "@type": "City", name: location.locality },
          },
          price: "449",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Refrigerator Repair",
            description:
              "Compressor issues, gas refill, thermostat problems, and defrost repairs",
            areaServed: { "@type": "City", name: location.locality },
          },
          price: "449",
          priceCurrency: "INR",
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      style={
        {
          "--background": colors.background,
          "--foreground": colors.foreground,
          "--primary": colors.primary,
          "--primaryHover": colors.primaryHover,
          "--secondary": colors.secondary,
          "--accent": colors.accent,
          "--accentHover": colors.accentHover,
        } as React.CSSProperties
      }
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {/* <div className="h-23 min-[360px]:h-18" aria-hidden="true" /> */}
        {children}
        <Footer />
        <FloatingCTA
          variant="whatsapp"
          position="right"
          icon={WhatsApp}
          href={`${links.whatsapp1}`}
        />
        <FloatingCTA
          variant="primary"
          position="left"
          icon={Phone}
          href={`${links.call1}`}
        />
      </body>
    </html>
  );
}
