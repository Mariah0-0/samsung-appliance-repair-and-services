"use client";

import { useState } from "react";
import { ServiceDefinition } from "@/config/services.constants";
import X from "../../assets/X";

export default function ServiceFAQ({
  service,
}: {
  service: ServiceDefinition;
}) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  if (service.faqs.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-30 bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="w-[95vw] max-w-150 md:max-w-180 mx-auto mt-25 mb-20 sm:mt-21 sm:mb-28">
        <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {service.faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={index} className="bg-background overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-4 cursor-pointer text-sm sm:text-base font-medium text-left duration-200 hover:text-primary"
                >
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-0" : "rotate-45"}`}
                  >
                    <X height={20} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-100 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-3.5 sm:px-5 sm:pb-4 text-xs sm:text-sm font-light text-[#77725F]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
