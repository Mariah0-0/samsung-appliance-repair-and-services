const contact = {
  phone1: "9740859192",
  phone2: "9741249192",
  email: "rkappliancerepairandservices@gmail.com",
  openingHours: {
    display: "Mon–Sun, 9:00 AM – 7:00 PM",
    schema: "Mo-Su 09:00-19:00",
  },
};

const links = {
  whatsapp1: `https://wa.me/91${contact.phone1}`,
  whatsapp2: `https://wa.me/91${contact.phone2}`,
  call1: `tel:+91${contact.phone1}`,
  call2: `tel:+91${contact.phone2}`,
  email: `mailto:${contact.email}`,
};

export const siteConfig = {
  business: {
    name: "LG Appliance Repair & Services",
    brand: "LG",
    legalEntity: "LG Electronics Inc. and/or LG Electronics India Pvt. Ltd.",
    icon: "lg-favicon.ico",
  },
  contact,
  links,
  location: {
    city: "Bangalore",
    state: "Karnataka",
    country: "IN",
    locality: "Sarjapura",
    postalCode: "562125",
    serviceRadius: "20km",
    latitude: "12.861312",
    longitude: "77.773825",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124480.32016426048!2d77.6661046!3d12.8426298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae737dfb6da4d3%3A0xb5fc43730c9ac15e!2sLG%20Washing%20Machine%20Service%20Repair!5e0!3m2!1sen!2sae!4v1788839671739!5m2!1sen!2sae",
    mapsDirectionsUrl: "https://maps.app.goo.gl/xQYX9QpMmMuKNSdg8",
  },
  colors: {
    background: "#f9f8f6",
    foreground: "#140601",
    primary: "#bd4f00",
    primaryHover: "#943e00",
    secondary: "#ebd7c6",
    accent: "#4137c8",
    accentHover: "#342ca0",
  },
} as const;
