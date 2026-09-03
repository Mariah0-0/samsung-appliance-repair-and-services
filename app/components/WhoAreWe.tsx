import whoAreWeImg from "@/assets/who-are-we.webp";
import Image from "next/image";

export default function WhoAreWe() {
  return (
    <section id="about" className="scroll-mt-30">
      <div className="mx-auto w-86 sm:w-[95vw] max-w-[95vw] sm:max-w-150 md:max-w-220 mt-25 mb-20 sm:mt-18 sm:mb-25">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <div className="sm:flex-1 sm:order-2">
            <h2 className="text-center sm:text-left text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11 sm:mb-6">
              Who Are We?
            </h2>
            <p className="w-full text-sm md:text-base leading-5.25 md:leading-5.75 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full sm:w-59 h-55 sm:h-95">
            <Image
              src={whoAreWeImg}
              alt="Technician's hand reaching into a tool belt holding a cordless drill"
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
