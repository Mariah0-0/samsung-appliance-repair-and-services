import whyChooseUsImg from "@/assets/why-choose-us.webp";
import whyChooseUsBG from "@/assets/why-choose-us-bg.webp";
import Image from "next/image";
import { BUSINESS } from "../config/site.constants";

export default function WhyChooseUs() {
  return (
    <section
      className="relative z-0 w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${whyChooseUsBG.src})` }}
    >
      <div className="absolute -z-10 w-full h-full bg-black/60" />
      <div className="w-86 sm:w-[95vw] max-w-[95vw] sm:max-w-165 md:max-w-220 mx-auto mt-25 mb-20 sm:mt-18 sm:mb-25">
        <h2 className="text-center text-[27px] sm:text-4xl font-bold uppercase tracking-wider text-background mb-11">
          Why Choose Us?
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-9 sm:gap-10">
          <div className="w-full h-53 sm:w-58 sm:h-full sm:order-2 md:w-76 md:h-70">
            <Image
              src={whyChooseUsImg}
              alt="A professional technician fixing an air conditioner on a roof"
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="w-full sm:flex-1 sm:text-right text-sm md:text-base leading-5.25 md:leading-5.75 font-light text-background">
            At {BUSINESS.name}, we&apos;re not just another repair company,
            we&apos;re a name homeowners can rely on. We understand what you
            need when your refrigerator, washing machine, TV, water purifier, or
            air conditioner stops working. Our skilled technicians work quickly
            and efficiently to get your appliances back in shape, so your home
            keeps running the way it should.{" "}
            <span className="font-semibold">
              We treat every customer like a neighbor
            </span>
            , not just another booking, and back every repair with genuine parts
            and a real warranty. When your appliances give up, trust{" "}
            {BUSINESS.name} to set things right.
          </p>
        </div>
      </div>
    </section>
  );
}
