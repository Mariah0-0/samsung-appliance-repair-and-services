"use client";

import heroImg from "@/assets/hero-img.webp";
import Image from "next/image";
import Button from "@/components/UI/Button";
import WhatsApp from "@/assets/WhatsApp";
import Phone from "@/assets/Phone";
import { site } from "@/config/site.constants";

const { business, links } = site;

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-30 flex flex-col sm:flex-row justify-between w-full sm:w-[57rem] lg:w-[62rem] sm:max-w-[95vw] md:max-w-[90vw] sm:mx-auto mt-22 min-[360px]:mt-27 sm:mt-17 sm:mb-25 md:mt-17 md:mb-25 lg:mt-12 lg:mb-25 gap-10 lg:gap-20"
    >
      <div className="sm:w-95 md:w-105 lg:w-120 mx-4.5 sm:mx-0 my-0 sm:my-20 lg:mt-30 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl min-[1100px]:text-5xl font-bold">
          We fix your broken {business.brand} appliances.
        </h1>
        <p className="my-7 md:my-5 lg:my-7 text-sm sm:text-base text-[#989176]">
          AC, washing machine, TV, fridge, or microwave not working? We repair
          it. Today, at your doorstep.
        </p>
        <div className="flex mt-10 md:mt-8 lg:mt-10 gap-2 sm:gap-4.25 md:gap-5.25">
          <Button
            variant="primary"
            icon={WhatsApp}
            href={`${links.whatsapp1}`}
            target="_blank"
          >
            Chat with us
          </Button>
          <Button
            variant="secondary"
            icon={Phone}
            href={`${links.call1}`}
            target="_blank"
          >
            Call us
          </Button>
        </div>
      </div>
      <div className="relative sm:flex-1 min-w-0 h-[25vh] min-[1100px]:h-[65vh] min-h-[23rem] sm:min-h-[29rem] min-[1100px]:min-h-[34rem] max-h-[29rem] min-[1100px]:max-h-[41rem]">
        <Image
          src={heroImg}
          alt="An array of washing machines"
          loading="eager"
          priority
          fetchPriority="high"
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1099px) 21.5rem, 100vw"
          className="object-cover"
        />
        <div className="absolute top-0 left-0 z-2 sm:hidden w-full h-40 bg-gradient-to-b from-stone-100 to-stone-100/0" />
      </div>
    </section>
  );
}
