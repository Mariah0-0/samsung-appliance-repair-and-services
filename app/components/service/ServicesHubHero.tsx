"use client";

import Image from "next/image";
import Button from "@/components/UI/Button";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import WhatsApp from "@/assets/WhatsApp";
import Phone from "@/assets/Phone";
import serviceshubHero from "@/assets/serviceshub-hero.webp";
import { site } from "@/config/site.constants";
import { VISITING_FEE } from "@/config/services.constants";

const { business, links } = site;

export default function ServicesHubHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[520px] max-h-[900px] overflow-hidden">
      {/* <div className="h-23 min-[360px]:h-18" aria-hidden="true" /> */}

      <Image
        src={serviceshubHero}
        alt={`${business.brand} appliance repair technician at work`}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60"
        aria-hidden="true"
      />

      <div className="relative z-2 h-full w-full sm:w-[57rem] lg:w-[62rem] sm:max-w-[95vw] md:max-w-[90vw] sm:mx-auto px-4.5 sm:px-0 flex flex-col justify-center">
        <div className="max-w-2xl sm:mx-0">
          <Breadcrumbs
            variant="dark"
            items={[{ name: "Home", href: "/" }, { name: "Services" }]}
          />

          <h1 className="text-3xl sm:text-4xl min-[1100px]:text-5xl font-bold text-background">
            All Services
          </h1>

          <p className="my-7 md:my-5 lg:my-7 text-sm sm:text-base text-background/85">
            Doorstep repair for every major appliance. Same-day visits, ₹
            {VISITING_FEE} diagnostic fee, and a clear quote before any work
            begins.
          </p>

          <div className="flex mt-10 md:mt-8 lg:mt-10 gap-2 sm:gap-4.25 md:gap-5.25">
            <Button
              color="accent"
              buttonStyle="filled"
              icon={WhatsApp}
              href={`${links.whatsapp1}`}
              target="_blank"
            >
              Chat with us
            </Button>
            <Button
              color="secondary"
              buttonStyle="outline"
              icon={Phone}
              href={`${links.call1}`}
              target="_blank"
            >
              Call us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
