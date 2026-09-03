import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "./components/Footer";
import { CONTACT, LOCATION, BUSINESS } from "@/config/site.constants";
import { getDomain } from "@/config/site.server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: `${BUSINESS.name} ${LOCATION.city} | Same-Day AC, Fridge & TV Repair`,
  description: `Expert ${BUSINESS.brand} appliance repair in ${LOCATION.city}. Same-day service for AC, refrigerator, washing machine, TV, and water purifier. ₹449 visiting fee. Book now.`,
  keywords: [
    `${BUSINESS.brand} repair ${LOCATION.city}`,
    `appliance repair ${LOCATION.city}`,
    `AC repair ${LOCATION.city}`,
    `fridge repair ${LOCATION.city}`,
    `washing machine repair ${LOCATION.city}`,
    `TV repair ${LOCATION.city}`,
    `water purifier repair ${LOCATION.city}`,
    `${BUSINESS.brand} repair ${LOCATION.locality}`,
    `appliance repair ${LOCATION.locality}`,
    `AC repair ${LOCATION.locality}`,
    `fridge repair ${LOCATION.locality}`,
    `washing machine repair ${LOCATION.locality}`,
    `TV repair ${LOCATION.locality}`,
    `water purifier repair ${LOCATION.locality}`,
    `${BUSINESS.brand} service center ${LOCATION.city}`,
    `appliance repair near me`,
    `home appliance repair`,
    `${BUSINESS.brand} washing machine repair`,
    `${BUSINESS.brand} refrigerator repair`,
    `${BUSINESS.brand} AC repair`,
    `${BUSINESS.brand} TV repair`,
    `${BUSINESS.brand} water purifier repair`,
  ].join(", "),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BUSINESS.name} ${LOCATION.city}`,
    description: `Same-day ${BUSINESS.brand} appliance repair in ${LOCATION.city}. AC, fridge, washing machine, TV & water purifier.`,
    siteName: BUSINESS.name,
    locale: "en_IN",
    type: "website",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const domain = await getDomain();
  const baseUrl = `https://${domain}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    image: `${baseUrl}/hero-img.webp`,
    description: `Same-day ${BUSINESS.brand} appliance repair services in ${LOCATION.locality}, ${LOCATION.city} - AC, fridge, washing machine, TV and water purifier repair.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: LOCATION.locality,
      addressRegion: LOCATION.state,
      addressCountry: LOCATION.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LOCATION.latitude,
      longitude: LOCATION.longitude,
    },
    telephone: `+91${CONTACT.phone1}`,
    priceRange: "₹449",
    openingHours: "Mo-Su 08:00-20:00",
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
        latitude: LOCATION.latitude,
        longitude: LOCATION.longitude,
      },
      geoRadius: LOCATION.serviceRadius,
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
            areaServed: {
              "@type": "City",
              name: LOCATION.locality,
            },
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
            areaServed: {
              "@type": "City",
              name: LOCATION.locality,
            },
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
            areaServed: {
              "@type": "City",
              name: LOCATION.locality,
            },
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
            areaServed: {
              "@type": "City",
              name: LOCATION.locality,
            },
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
            areaServed: {
              "@type": "City",
              name: LOCATION.locality,
            },
          },
          price: "449",
          priceCurrency: "INR",
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
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
        <div className="h-23 min-[360px]:h-18" aria-hidden="true" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
