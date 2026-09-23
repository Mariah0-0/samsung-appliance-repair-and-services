import Image from "next/image";
import Link from "next/link";
import Wrench from "@/assets/Wrench";
import WhatsApp from "@/assets/WhatsApp";
import { site } from "@/config/site.constants";
import { getEnabledServices } from "@/config/services.constants";

const { links, location } = site;

export default function Services() {
  const services = getEnabledServices();

  return (
    <section id="services" className="scroll-mt-30 bg-secondary">
      <div className="w-[95vw] mx-auto mt-25 mb-20 sm:mt-18 sm:mb-25">
        <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11">
          Services
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-[95vw] max-w-115 sm:max-w-150 lg:max-w-220 gap-2 sm:gap-4 mx-auto">
          {services.map((s, index) => (
            <Link
              key={s.key}
              href={`/${s.baseSlug}`}
              className={`group block bg-primary text-background transition-colors duration-200 hover:bg-primaryHover ${index == 4 ? "lg:order-6" : ""} lg:translate-0 ${index == 2 || index == 3 ? "sm:-translate-x-4" : ""} ${index == 1 ? "lg:translate-y-6" : ""}`}
            >
              {s.image && (
                <div className="overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.name} technician service`}
                    loading="lazy"
                    className="object-cover h-30 sm:h-42 transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
              )}
              <div className="px-2 py-3 sm:px-4 sm:pb-4 md:py-4">
                <h3 className="text-[17px]/6 sm:text-xl md:text-2xl font-medium">
                  {s.name}
                </h3>
                <p className="text-xs sm:text-sm font-light mt-1.5">
                  {s.cardDesc}
                </p>
              </div>
            </Link>
          ))}
          <Link
            href={links.whatsapp1}
            target="_blank"
            className="flex flex-col justify-center items-center lg:order-5 lg:translate-y-6 bg-accent transition-colors duration-200 hover:bg-accentHover text-background px-2 sm:px-4"
          >
            <span className="inline-flex [&_svg]:w-17.25 [&_svg]:h-17.25 sm:[&_svg]:w-22 sm:[&_svg]:h-22">
              <Wrench color="var(--background)" />
            </span>
            <h3 className="w-full mt-7 text-xl sm:text-2xl font-semibold">
              Don&apos;t see your appliance?
            </h3>
            <span className="flex w-full mt-2.5 gap-2">
              <span className="[&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-5.75 sm:[&_svg]:h-5.75 lg:[&_svg]:w-7 lg:[&_svg]:h-7">
                <WhatsApp color="var(--background)" />
              </span>
              <p className="text-xs sm:text-base font-medium">
                Ask us on WhatsApp
              </p>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
