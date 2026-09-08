const contact = {
  phone1: "9741249192",
  phone2: "9740859192",
  email: "info@domain.com",
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
    name: "Samsung Appliance Repair & Services",
    brand: "Samsung",
    icon: "samsung-favicon.ico",
  },
  contact,
  links,
  location: {
    city: "Bangalore",
    state: "Karnataka",
    country: "IN",
    locality: "Nagarbhavi",
    serviceRadius: "20km",
    latitude: "12.90825000",
    longitude: "77.61019444",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.991774688714!2d77.6101944!3d12.90825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzI5LjciTiA3N8KwMzYnMzYuNyJF!5e0!3m2!1sen!2sin!4v1788615708017!5m2!1sen!2sin",
    mapsDirectionsUrl: "https://maps.app.goo.gl/4eG5bcyiVEpBT82R9",
  },
  colors: {
    background: "#f5f4f0",
    foreground: "#031927",
    primary: "#508aa8",
    secondary: "#c8d9e6",
    accent: "#ba1200",
    accentHover: "#990F00",
  },
} as const;
