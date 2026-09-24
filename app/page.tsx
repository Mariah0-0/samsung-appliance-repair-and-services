import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import WhoAreWe from "./components/WhoAreWe";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="h-23 min-[360px]:h-18" aria-hidden="true" />
      <Hero />
      <Trust />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <WhoAreWe />
      <ContactForm />
    </>
  );
}
