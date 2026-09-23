import { repairProcess } from "@/config/services.constants";

export default function ServiceProcess() {
  return (
    <section className="scroll-mt-30">
      <div className="w-[95vw] mx-auto mt-25 mb-20 sm:mt-21 sm:mb-28">
        <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11">
          How It Works
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4 lg:gap-9 w-[95vw] max-w-60 sm:max-w-220 lg:max-w-300 mx-auto">
          {repairProcess.map((step, index) => (
            <li key={index} className="flex flex-col items-center text-center">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white text-base font-semibold">
                {index + 1}
              </span>
              <h3 className="mt-3 text-base font-medium">{step.title}</h3>
              <p className="mt-1.5 text-xs sm:text-sm font-light text-[#77725F]">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
