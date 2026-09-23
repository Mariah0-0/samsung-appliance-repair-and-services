import { StaticImageData } from "next/image";
import ac from "@/assets/services-ac.webp";
import washingMachine from "@/assets/services-washing-machine.webp";
import tv from "@/assets/services-tv.webp";
import microwaveOven from "@/assets/services-microwave-oven.webp";
import refrigerator from "@/assets/services-refrigerator.webp";
import waterPurifier from "@/assets/services-water-purifier.webp";

export const VISITING_FEE = "₹449";

export type ServiceFAQ = { question: string; answer: string };

export type ServiceDefinition = {
  /** Stable internal key, never shown to the user. */
  key: string;
  /** URL slug without the city, e.g. "ac-repair". City is appended dynamically. */
  baseSlug: string;
  /** Used as the page H1, homepage card title, and pricing table label base. */
  name: string;
  /** Shorter label for the pricing table's first column. */
  pricingLabel: string;
  /** Homepage services-grid card description (existing copy, unchanged). */
  cardDesc: string;
  /** Pricing table "Covers" column (existing copy, unchanged). */
  pricingCovers: string;
  image?: StaticImageData;
  imageAlt: string;
  /** 2-3 sentence unique intro for the service page hero (avoids thin/duplicate content). */
  intro: string;
  /** Common problems customers search for, per appliance. */
  problems: string[];
  faqs: ServiceFAQ[];
  /** Optional safety caveat shown on the page (e.g. microwave/AC per client's PDF). */
  safetyNote?: string;
  /**
   * Master on/off switch. Disabled services still have full data (so the
   * client can flip this on later) but are filtered out of the homepage
   * grid, pricing table, sitemap and generateStaticParams.
   */
  enabled: boolean;
};

export const services: ServiceDefinition[] = [
  {
    key: "ac",
    baseSlug: "ac-repair",
    name: "AC Repair",
    pricingLabel: "AC",
    cardDesc:
      "Deep cleaning, gas leak repair, PCB issues, and compressor servicing. Both for split and window ACs.",
    pricingCovers: "Gas leak, PCB, compressor, deep clean",
    image: ac,
    imageAlt: "Technician servicing a split air conditioner unit",
    intro:
      "Warm air, water leaking indoors, or an AC that won't turn on at all? Our technicians diagnose split and window units on the spot and give you a clear quote before any repair starts.",
    problems: [
      "Not cooling",
      "Water leakage",
      "Not turning on",
      "Remote problems",
      "Electrical / control issues",
      "Gas leak / refrigerant issues",
    ],
    faqs: [
      {
        question: "How much does AC repair cost?",
        answer: `The visiting and diagnosis fee is ${VISITING_FEE}. Once the technician inspects the unit, you'll get a repair quote to approve before any work begins.`,
      },
      {
        question: "Do you repair both split and window ACs?",
        answer:
          "Yes, our technicians service split, window, and cassette AC units.",
      },
      {
        question: "My AC isn't cooling, do you check for a gas leak first?",
        answer:
          "Yes. We diagnose the actual cause, cooling issue, gas leak, or a compressor or electrical fault, before recommending a refrigerant/gas top-up, so you don't pay for a re-gas you don't need.",
      },
      {
        question: "How soon can someone come out?",
        answer:
          "Same-day visits are available across our service area, subject to technician availability.",
      },
    ],
    safetyNote:
      "We diagnose the actual fault first and only recommend a refrigerant/gas top-up when that's genuinely what's needed.",
    enabled: true,
  },
  {
    key: "washing-machine",
    baseSlug: "washing-machine-repair",
    name: "Washing Machine Repair",
    pricingLabel: "Washing Machine",
    cardDesc:
      "Drum issues, motor repairs, drain valve faults, and auto-sensor issues. For front & top loads, and semi-automatic machines.",
    pricingCovers: "Drum, motor, drain valve",
    image: washingMachine,
    imageAlt: "Technician repairing the drum of a washing machine",
    intro:
      "Machine won't spin, drain, or fill properly? We repair front-load, top-load, and semi-automatic washing machines, and walk you through what's actually wrong before we fix it.",
    problems: [
      "Not spinning",
      "Not draining",
      "Not filling",
      "Leakage",
      "Not starting",
      "Error codes",
    ],
    faqs: [
      {
        question: "How much does washing machine repair cost?",
        answer: `A ${VISITING_FEE} visiting fee covers the inspection and diagnosis. Repair costs depend on the part or issue and are quoted upfront.`,
      },
      {
        question:
          "Do you repair front-load, top-load, and semi-automatic machines?",
        answer: "Yes, we service all three types.",
      },
      {
        question: "My washing machine is showing an error code, can you help?",
        answer:
          "Yes, our technicians can read and diagnose common error codes across major brands.",
      },
      {
        question: "Is same-day service available?",
        answer:
          "Yes, in most cases, depending on technician availability in your area.",
      },
    ],
    enabled: true,
  },
  {
    key: "tv",
    baseSlug: "tv-repair",
    name: "TV Repair",
    pricingLabel: "TV (LED/Smart)",
    cardDesc:
      "Screen issues, motherboard problems, display and sound troubleshooting. For LED, OLED, and Smart TVs.",
    pricingCovers: "Screen, motherboard, sound",
    image: tv,
    imageAlt: "Technician inspecting the back panel of a flat-screen TV",
    intro:
      "Black screen, no sound, or a Smart TV that won't connect? We troubleshoot display, motherboard, and connectivity issues on LED, OLED, and Smart TVs at your doorstep.",
    problems: [
      "No display",
      "Sound but no picture",
      "Black screen",
      "Backlight issues",
      "HDMI / connectivity issues",
      "Smart TV problems",
    ],
    faqs: [
      {
        question: "How much does TV repair cost?",
        answer: `Diagnosis starts at ${VISITING_FEE}. If a part needs replacing, we'll quote the cost before proceeding.`,
      },
      {
        question: "Do you repair Smart TVs and connectivity issues?",
        answer:
          "Yes, including HDMI/connectivity problems and Smart TV software issues, alongside display and sound faults.",
      },
      {
        question: "Can a broken screen be repaired?",
        answer:
          "It depends on the model and panel availability. The technician will confirm during inspection.",
      },
    ],
    enabled: true,
  },
  {
    key: "microwave",
    baseSlug: "microwave-repair",
    name: "Microwave Oven Repair",
    pricingLabel: "Microwave Oven",
    cardDesc:
      "Heating issues, magnetron replacement, glass plate fixes, and control panel repairs. For solo, grill, and convection models.",
    pricingCovers: "Heating, magnetron, glass plate, control panel",
    image: microwaveOven,
    imageAlt: "Technician repairing the control panel of a microwave oven",
    intro:
      "Microwave not heating, sparking, or the keypad not responding? We service solo, grill, and convection microwave ovens, and handle magnetron and control panel repairs safely.",
    problems: [
      "Not heating",
      "Not turning on",
      "Turntable issues",
      "Keypad issues",
      "Door issues",
      "Unusual noise",
    ],
    faqs: [
      {
        question: "How much does microwave repair cost?",
        answer: `The visiting/diagnosis fee is ${VISITING_FEE}, with any part or repair cost quoted before we proceed.`,
      },
      {
        question: "Is it safe to open the microwave myself to check the fault?",
        answer:
          "No, we'd advise against that. Microwaves store high-voltage charge internally even when unplugged. Leave the diagnosis and repair to a trained technician.",
      },
      {
        question: "Do you repair solo, grill, and convection microwaves?",
        answer: "Yes, all three types.",
      },
    ],
    safetyNote:
      "Microwaves hold a high-voltage charge internally, even unplugged. Don't open the casing yourself; our technicians handle that safely.",
    enabled: true,
  },
  {
    key: "refrigerator",
    baseSlug: "refrigerator-repair",
    name: "Refrigerator Repair",
    pricingLabel: "Refrigerator",
    cardDesc:
      "Compressor issues, gas refill, thermostat problems, and defrost repairs. For single-door, double-door, and cooler models.",
    pricingCovers: "Compressor, gas refill, thermostat",
    image: refrigerator,
    imageAlt: "Technician checking the compressor of a refrigerator",
    intro:
      "Fridge not cooling, freezer running warm, or water pooling underneath? We repair single-door, double-door, and cooler-style refrigerators, and diagnose before recommending a gas refill.",
    problems: [
      "Not cooling",
      "Freezer not cooling",
      "Water leakage",
      "Ice maker issues",
      "Noise",
      "Door issues",
    ],
    faqs: [
      {
        question: "How much does refrigerator repair cost?",
        answer: `A ${VISITING_FEE} visiting fee covers inspection and diagnosis; repair costs are quoted after that.`,
      },
      {
        question: "Do you handle single-door and double-door fridges?",
        answer: "Yes, along with cooler-style units.",
      },
      {
        question: "Why is my fridge running but not cooling?",
        answer:
          "Could be a compressor fault, gas leak, or a thermostat issue. Our technician will pinpoint the actual cause before quoting a repair.",
      },
    ],
    enabled: true,
  },
  {
    key: "water-purifier",
    baseSlug: "water-purifier-repair",
    name: "Water Purifier Repair",
    pricingLabel: "Water Purifier",
    cardDesc:
      "Filter & membrane replacement, low water flow, leakage fixes, & UV/UF component servicing. For RO, UV, and UF purifiers.",
    pricingCovers: "Filter change, leakage, low flow",
    image: waterPurifier,
    imageAlt: "Technician servicing an RO water purifier under a kitchen sink",
    intro:
      "Slow water flow, a leaking unit, or water that tastes off? We service RO, UV, and UF purifiers, including filter/membrane changes and UV component repairs.",
    problems: [
      "Low water flow",
      "Leakage",
      "Filter / membrane issues",
      "UV / UF component faults",
      "Bad taste or odor",
      "Not dispensing water",
    ],
    faqs: [
      {
        question: "How much does water purifier repair cost?",
        answer: `Visiting/diagnosis is ${VISITING_FEE}; filter, membrane, or part replacement is quoted separately.`,
      },
      {
        question: "Do you service RO, UV, and UF purifiers?",
        answer: "Yes, all three types.",
      },
    ],
    // Not yet offered — data kept ready, hidden from all pages until enabled.
    enabled: false,
  },
  {
    key: "dishwasher",
    baseSlug: "dishwasher-repair",
    name: "Dishwasher Repair",
    pricingLabel: "Dishwasher",
    cardDesc:
      "Draining and filling faults, poor cleaning performance, leaks, and noisy cycles fixed at your doorstep.",
    pricingCovers: "Draining, filling, leaks, cleaning performance",
    imageAlt: "Technician repairing a built-in dishwasher",
    intro:
      "Dishwasher not draining, not cleaning properly, or leaking onto the floor? We diagnose and repair the cycle, drain, and fill issues that stop a dishwasher from doing its job.",
    problems: [
      "Not draining",
      "Not cleaning",
      "Not filling",
      "Leaking",
      "Noise",
      "Not starting",
    ],
    faqs: [
      {
        question: "How much does dishwasher repair cost?",
        answer: `Visiting/diagnosis is ${VISITING_FEE}, with any repair cost quoted upfront before work begins.`,
      },
    ],
    // Not yet offered — data kept ready, hidden from all pages until enabled.
    enabled: false,
  },
];

export function getEnabledServices(): ServiceDefinition[] {
  return services.filter((s) => s.enabled);
}

export function getServiceByUrlSlug(
  slug: string,
): ServiceDefinition | undefined {
  return getEnabledServices().find((s) => s.baseSlug === slug);
}

export const repairProcess: { title: string; desc: string }[] = [
  {
    title: "Inspection",
    desc: "A technician visits and inspects the appliance in person.",
  },
  {
    title: "Diagnosis",
    desc: "We identify the actual fault, not just the symptom.",
  },
  {
    title: "Quotation & Approval",
    desc: "You get a clear repair quote and approve it before any work starts.",
  },
  {
    title: "Repair",
    desc: "The technician carries out the repair at your doorstep.",
  },
  {
    title: "Testing",
    desc: "The appliance is tested to confirm the issue is fully resolved.",
  },
];
