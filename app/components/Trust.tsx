"use client";

import Button from "@/components/UI/Button";
import Calendar from "@/assets/Calendar";
import Trust1 from "@/assets/Trust1";
import Trust2 from "@/assets/Trust2";
import Trust3 from "@/assets/Trust3";
import { ComponentType } from "react";
import { IconProps } from "@/types/icon";
import { LINKS } from "@/config/site.constants";

export default function Trust() {
  const cards: {
    icon: ComponentType<IconProps>;
    title: string;
    desc: string[];
  }[] = [
    {
      icon: Trust1,
      title: "24/7 Repair Services",
      desc: [
        "Fast diagnosis and dependable refrigerator repairs",
        "Skilled servicing for washing machines, microwaves, and ovens",
        "Repair and upkeep for water heaters and air conditioners",
      ],
    },
    {
      icon: Trust2,
      title: "Trusted Technicians",
      desc: [
        "Experienced specialists across all major appliance brands",
        "Doorstep service that's quick, affordable, and done right",
      ],
    },
    {
      icon: Trust3,
      title: "Keep Your Home Running Smoothly",
      desc: [
        "All-round care for your essential home appliances",
        "Repairs focused on restoring performance and extending appliance life",
      ],
    },
  ];

  return (
    <section className="bg-primary">
      <div className="max-w-75 sm:w-210 sm:max-w-[95vw] mx-auto mt-25 mb-20 sm:mt-18 sm:mb-15">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-3 md:gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex-1 bg-background px-5 sm:px-3 md:px-5 pt-4.75 pb-8.5 md:pb-8"
              >
                <div className="flex justify-center items-center w-19 h-19">
                  <Icon color="var(--foreground)" height={55} />
                </div>
                <h2 className="mt-2 text-xl font-bold">{card.title}</h2>
                <ol className="list-decimal list-outside ml-4.25 mt-3">
                  {card.desc.map((listItem, listIndex) => (
                    <li key={listIndex} className="text-sm font-light">
                      {listItem}
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
        <div className="w-fit mx-auto mt-10">
          <Button
            variant="primary"
            icon={Calendar}
            href={`${LINKS.call1}`}
            target="_blank"
          >
            Schedule a service
          </Button>
        </div>
      </div>
    </section>
  );
}
