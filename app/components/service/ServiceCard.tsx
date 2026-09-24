import Image from "next/image";
import Link from "next/link";
import { ServiceDefinition } from "@/config/services.constants";

export default function ServiceCard({
  service,
}: {
  service: ServiceDefinition;
}) {
  return (
    <Link
      href={`/services/${service.baseSlug}`}
      className="sm:h-35 lg:h-40 flex flex-row p-2 rounded-lg bg-secondary transition-colors duration-200 hover:bg-primary hover:text-background"
    >
      {service.image && (
        <div className="relative overflow-hidden w-[30%] sm:w-40 lg:w-45 rounded-md shrink-0">
          <Image
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="w-full h-30 sm:h-full sm:absolute sm:inset-0 object-cover"
          />
        </div>
      )}
      <div className="flex flex-col justify-center gap-1 sm:gap-2.5 px-3 sm:p-4 lg:p-5 min-w-0">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium leading-6">
          {service.name}
        </h3>
        <p className="text-xs sm:text-sm font-light line-clamp-4">
          {service.cardDesc}
        </p>
      </div>
    </Link>
  );
}
