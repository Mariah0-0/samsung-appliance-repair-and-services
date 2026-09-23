"use client";

import Link from "next/link";
import Button from "@/components/UI/Button";
import WhatsApp from "@/assets/WhatsApp";
import Phone from "@/assets/Phone";
import { site } from "@/config/site.constants";
import { VISITING_FEE, ServiceDefinition } from "@/config/services.constants";

const { links, contact } = site;

export default function ServiceCTA({
  service,
}: {
  service: ServiceDefinition;
}) {
  return (
    <section className="bg-primary">
      <div className="flex flex-col items-center text-center w-[95vw] max-w-150 mx-auto mt-12 mb-16 sm:mt-17 sm:mb-22 text-background">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider">
          Book {service.name}
        </h2>
        <p className="mt-3 text-sm sm:text-base font-light">
          {VISITING_FEE} visiting fee. Same-day service, most areas.
        </p>
        <div className="flex mt-7 gap-2 sm:gap-4.25 md:gap-5.25">
          <Button
            variant="secondary"
            icon={WhatsApp}
            href={`${links.whatsapp1}`}
            target="_blank"
            className="text-background! border-background! hover:bg-background! hover:text-primary!"
          >
            Chat with us
          </Button>
          <Button
            variant="secondary"
            icon={Phone}
            href={`${links.call1}`}
            target="_blank"
            className="text-background! border-background! hover:bg-background! hover:text-primary!"
          >
            {contact.phone1}
          </Button>
        </div>
        <p className="mt-6 text-xs sm:text-sm font-light">
          Prefer a form?{" "}
          <Link href="/#contact" className="underline">
            Send us your details here
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
