import Wrench from "@/assets/Wrench";
import { ServiceDefinition } from "@/config/services.constants";

export default function ServiceProblems({
  service,
}: {
  service: ServiceDefinition;
}) {
  return (
    <section className="scroll-mt-30 bg-secondary">
      <div className="w-[95vw] mx-auto mt-25 mb-20 sm:mt-21 sm:mb-28">
        <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11">
          Common Problems
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 w-[95vw] max-w-115 sm:max-w-165 lg:max-w-190 mx-auto">
          {service.problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 bg-primary text-background px-3 py-4 sm:px-4 sm:py-4.5"
            >
              <span className="inline-flex shrink-0 [&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-5.5 sm:[&_svg]:h-5.5">
                <Wrench color="var(--background)" />
              </span>
              <p className="text-sm sm:text-base font-light">{problem}</p>
            </div>
          ))}
        </div>
        {service.safetyNote && (
          <p className="w-[95vw] max-w-165 lg:max-w-220 mx-auto mt-8 text-xs sm:text-sm font-light text-foreground">
            {service.safetyNote}
          </p>
        )}
      </div>
    </section>
  );
}
