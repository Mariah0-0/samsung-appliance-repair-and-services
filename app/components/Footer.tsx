"use client";

import Facebook from "@/assets/Facebook";
import Instagram from "@/assets/Instagram";
import Twitter from "@/assets/Twitter";
import WhatsApp from "@/assets/WhatsApp";
import Button from "@/components/UI/Button";
import { ComponentType } from "react";
import { IconProps } from "@/types/icon";
import { CONTACT, LINKS } from "../config/site";

export default function Footer() {
  const legalLinkStyles = "text-primary text-xs font-light hover:underline";

  const socialLinks: {
    id: number;
    icon: ComponentType<IconProps>;
  }[] = [
    { id: 1, icon: Instagram },
    { id: 2, icon: Facebook },
    { id: 3, icon: Twitter },
  ];

  const quickLinks: {
    id: number;
    name: string;
    href: string;
  }[] = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Services", href: "#services" },
    { id: 3, name: "Pricing", href: "#pricing" },
    { id: 4, name: "About Us", href: "#about" },
    { id: 5, name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background px-11 sm:px-10 md:px-15 pt-13 pb-21">
      <div className="flex flex-col sm:flex-row sm:justify-between max-w-220 mx-auto gap-11 sm:gap-6 mb-11">
        <div className="sm:order-2">
          <h2 className="font-medium uppercase mb-4 sm:mb-5">Quick Links</h2>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-light uppercase hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="sm:order-1">
          <h2 className="font-medium uppercase mb-4 sm:mb-5">
            Contact Details
          </h2>
          <ul className="text-xs font-light flex flex-col gap-1">
            <li>Samsung Appliance Repair & Services</li>
            <li>Bangalore, Karnataka</li>
            <li>{CONTACT.phone1}</li>
            <li>{CONTACT.phone2}</li>
            <li>{CONTACT.email}</li>
          </ul>
          <div className="flex gap-5 mt-5 sm:mt-7">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Icon height={28} color="var(--background)" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="sm:order-3">
          <h2 className="font-medium uppercase mb-3 sm:mb-5">Contact Us</h2>
          <Button
            variant="accent-outline"
            icon={WhatsApp}
            href={`${LINKS.whatsapp1}`}
          >
            9741249192
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between max-w-220 mx-auto pt-6 border-t border-t-primary/30">
        <div className="flex justify-between md:order-2 md:gap-8">
          <a href="/privacy-policy" className={legalLinkStyles}>
            Privacy Policy
          </a>
          <a href="/terms-of-service" className={legalLinkStyles}>
            Terms of Service
          </a>
        </div>
        <p className="text-primary text-xs font-light mt-5 md:mt-0">
          © 2026 Samsung Appliance Repair & Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
