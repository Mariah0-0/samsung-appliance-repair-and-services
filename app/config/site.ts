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
