export const BUSINESS = {
  name: "Samsung Appliance Repair & Services",
  brand: "Samsung",
} as const;

export const CONTACT = {
  phone1: "9741249192",
  phone2: "9740859192",
  email: "info@domain.com",
} as const;

export const LINKS = {
  whatsapp1: `https://wa.me/91${CONTACT.phone1}`,
  whatsapp2: `https://wa.me/91${CONTACT.phone2}`,
  call1: `tel:+91${CONTACT.phone1}`,
  call2: `tel:+91${CONTACT.phone2}`,
  email: `mailto:${CONTACT.email}`,
} as const;

export const LOCATION = {
  city: "Bangalore",
  state: "Karnataka",
  country: "IN",
  locality: "Nagarbhavi",
  serviceRadius: "20km",
  latitude: "12.90825000",
  longitude: "77.61019444",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.9917748855155!2d77.60761411184855!3d12.908249987348782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzI5LjciTiA3N8KwMzYnMzYuNyJF!5e0!3m2!1sen!2sin!4v1788456526722!5m2!1sen!2sin",
  mapsDirectionsUrl: "https://maps.app.goo.gl/4eG5bcyiVEpBT82R9",
} as const;
