"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/UI/Button";
import WhatsApp from "@/assets/WhatsApp";
import Phone from "@/assets/Phone";
import { site } from "@/config/site.constants";
import { ServiceDefinition } from "@/config/services.constants";

const { business, links, location } = site;

export default function ServiceHero({
  service,
}: {
  service: ServiceDefinition;
}) {
  return (
    <section className="relative w-full h-[80vh] min-h-[520px] max-h-[900px] overflow-hidden">
      {service.image && (
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className={`object-cover object-center ${service.key === "washing-machine" ? "scale-x-[-1]" : ""}`}
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60"
        aria-hidden="true"
      />

      <div className="relative z-2 h-full w-full sm:w-[57rem] lg:w-[62rem] sm:max-w-[95vw] md:max-w-[90vw] sm:mx-auto px-4.5 sm:px-0 flex flex-col justify-center">
        <div className="max-w-2xl sm:mx-0">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs font-light text-white/70">
              <li>
                <Link
                  href="/"
                  className="hover:underline hover:text-background"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-background" aria-current="page">
                {service.name}
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl min-[1100px]:text-5xl font-bold text-white">
            {business.brand} {service.name}
          </h1>

          <p className="my-7 md:my-5 lg:my-7 text-sm sm:text-base text-white/85">
            {service.intro}
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
