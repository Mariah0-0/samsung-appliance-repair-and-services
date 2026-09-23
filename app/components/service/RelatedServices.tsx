import Image from "next/image";
import Link from "next/link";
import Wrench from "@/assets/Wrench";
import { ServiceDefinition } from "@/config/services.constants";
import { site } from "@/config/site.constants";
import ArrowRight from "../../assets/ArrowRight";

const { location } = site;

export default function RelatedServices({
  services,
  currentService,
}: {
  services: ServiceDefinition[];
  currentService?: ServiceDefinition;
}) {
  if (services.length === 0) return null;

  const maxOthers = currentService ? 4 : 5;
  const visible = services.slice(0, maxOthers);

  return (
    <section className="scroll-mt-30">
      <div className="w-[95vw] mx-auto mt-25 mb-20 sm:mt-21 sm:mb-28">
        <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11">
          Other Services We Offer
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-[95vw] max-w-115 sm:max-w-150 lg:max-w-220 gap-2 sm:gap-4 mx-auto">
          {currentService && (
            <div
              aria-current="page"
              className="relative block text-primary border-2 border-primary/30 cursor-default"
            >
              <span className="absolute top-2 right-2 z-[2] bg-primary text-background text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2 py-1">
                You&apos;re viewing
              </span>
              {currentService.image && (
                <Image
                  src={currentService.image}
                  alt={`${currentService.name} technician service`}
                  loading="lazy"
                  className="object-cover h-30 sm:h-42 opacity-60"
                />
              )}
              <div className="px-2 py-3 sm:px-4 sm:pb-4 md:py-4">
                <h3 className="text-[17px]/6 sm:text-xl md:text-2xl font-medium">
                  {currentService.name}
                </h3>
                {currentService.cardDesc && (
                  <p className="text-xs sm:text-sm font-light mt-1.5">
                    {currentService.cardDesc}
                  </p>
                )}
              </div>
            </div>
          )}

          {visible.map((service, index) => (
            <Link
              key={service.key}
              href={`/${service.baseSlug}`}
              className={`group block bg-primary text-background transition-colors duration-200 hover:bg-primaryHover lg:translate-0 ${
                index === 3 ? "lg:order-6" : ""
              } ${index === 1 || index === 2 ? "sm:-translate-x-4" : ""} ${
                index === 0 ? "lg:translate-y-6" : ""
              }`}
            >
              {service.image && (
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} technician service`}
                    loading="lazy"
                    className="object-cover h-30 sm:h-42 transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
              )}
              <div className="px-2 py-3 sm:px-4 sm:pb-4 md:py-4">
                <h3 className="text-[17px]/6 sm:text-xl md:text-2xl font-medium">
                  {service.name}
                </h3>
                {service.cardDesc && (
                  <p className="text-xs sm:text-sm font-light mt-1.5">
                    {service.cardDesc}
                  </p>
                )}
              </div>
            </Link>
          ))}

          <Link
            href="/#services"
            className="flex flex-col justify-center items-center bg-accent transition-colors duration-200 hover:bg-accentHover text-background px-2 sm:px-4 lg:order-5 lg:translate-y-6"
          >
            <span className="inline-flex [&_svg]:w-17.25 [&_svg]:h-17.25 sm:[&_svg]:w-22 sm:[&_svg]:h-22">
              <Wrench color="var(--background)" />
            </span>
            <h3 className="mt-4 sm:mt-9 text-xl sm:text-2xl font-semibold text-center">
              View All Services
            </h3>
            <span className="self-end mt-2 sm:mt-4 sm:-mb-4 mr-4">
              <ArrowRight height={45} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
