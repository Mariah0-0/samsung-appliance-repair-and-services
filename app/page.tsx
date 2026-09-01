import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import WhoAreWe from "./components/WhoAreWe";
import ContactForm from "./components/ContactForm";
import FloatingCTA from "./components/UI/FloatingCTA";
import WhatsApp from "./assets/WhatsApp";
import Phone from "./assets/Phone";
import { LINKS } from "./config/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <WhoAreWe />
      <ContactForm />
      <FloatingCTA
        variant="whatsapp"
        position="right"
        icon={WhatsApp}
        href={`${LINKS.whatsapp1}`}
      />
      <FloatingCTA
        variant="primary"
        position="left"
        icon={Phone}
        href={`${LINKS.call1}`}
      />
    </>
  );
}
