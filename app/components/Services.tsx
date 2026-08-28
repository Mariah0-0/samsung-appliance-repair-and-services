import Image from "next/image";
import { StaticImageData } from "next/image";
import ac from "@/assets/services-ac.jpg";
import refrigerator from "@/assets/services-refrigerator.jpg";
import tv from "@/assets/services-tv.jpg";
import washingMachine from "@/assets/services-washing-machine.jpg";
import waterPurifier from "@/assets/services-water-purifier.jpg";
import Wrench from "@/assets/Wrench";
import WhatsApp from "@/assets/WhatsApp";

export default function Services() {
  const services: { title: string; desc: string; image: StaticImageData }[] = [
    {
      title: "AC repair",
      desc: "Deep cleaning, gas leak repair, PCB issues, and compressor servicing. Both for split and window ACs.",
      image: ac,
    },
    {
      title: "Washing Machine Repair",
      desc: "Drum issues, motor repairs, drain valve faults, and auto-sensor issues. For front & top loads, and semi-automatic machines.",
      image: washingMachine,
    },
    {
      title: "TV Repair",
      desc: "Screen issues, motherboard problems, display and sound troubleshooting. For LED, OLED, and Smart TVs.",
      image: tv,
    },
    {
      title: "Water Purifier Repair",
      desc: "Filter & membrane replacement, low water flow, leakage fixes, & UV/UF component servicing. For RO, UV, and UF purifiers.",
      image: waterPurifier,
    },
    {
      title: "Refrigerator Repair",
      desc: "Compressor issues, gas refill, thermostat problems, and defrost repairs. For single-door, double-door, and cooler models.",
      image: refrigerator,
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="w-358 max-w-[95vw] mx-auto mt-25 mb-20 sm:mt-18 sm:mb-25">
        <h1 className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11">
          Services
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 w-[95vw] max-w-115 sm:max-w-150 lg:max-w-220 gap-2 sm:gap-4 mx-auto">
          {services.map((s, index) => (
            <div
              key={index}
              className={`bg-primary text-background ${index == 4 ? "lg:order-6" : ""} lg:translate-0 ${index == 2 || index == 3 ? "sm:-translate-x-4" : ""} ${index == 1 ? "lg:translate-y-6" : ""}`}
            >
              <Image
                src={s.image}
                alt={`${s.title} technician service`}
                loading="eager"
                className="object-cover h-30 sm:h-42"
              />
              <div className="px-2 py-3 sm:px-4 sm:pb-4 md:py-4">
                <h2 className="text-[17px]/6 sm:text-xl md:text-2xl font-medium">
                  {s.title}
                </h2>
                <p className="text-xs sm:text-sm font-light mt-1.5">{s.desc}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-center items-center lg:order-5 lg:translate-y-6 bg-accent text-background px-2 sm:px-4">
            <span className="inline-flex [&_svg]:w-17.25 [&_svg]:h-17.25 sm:[&_svg]:w-22 sm:[&_svg]:h-22">
              <Wrench color="var(--background)" />
            </span>
            <h2 className="w-full mt-7 text-xl sm:text-2xl font-semibold">
              Don&apos;t see your appliance?
            </h2>
            <span className="flex w-full mt-2.5 gap-2">
              <span className="[&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-5.75 sm:[&_svg]:h-5.75 lg:[&_svg]:w-7 lg:[&_svg]:h-7">
                <WhatsApp color="var(--background)" />
              </span>
              <p className="text-xs sm:text-base font-medium">
                Ask us on WhatsApp
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
