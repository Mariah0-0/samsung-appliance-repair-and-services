"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site.constants";

const { business } = site;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { id: number; name: string; link: string }[] = [
    { id: 1, name: "Home", link: "/#home" },
    { id: 2, name: "Services", link: "/#services" },
    { id: 3, name: "Pricing", link: "/#pricing" },
    { id: 4, name: "About Us", link: "/#about" },
    { id: 5, name: "Contact Us", link: "/#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 z-5 w-full bg-background"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-col-reverse min-[360px]:flex-row justify-between items-end min-[360px]:items-center h-23 min-[360px]:h-18 px-4 sm:px-6 lg:px-10 py-3.5 min-[360px]:py-0">
        <Link
          href="/"
          className="self-start min-[360px]:self-auto text-sm md:text-[15px] lg:text-base whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          aria-label={`${business.name} - Home`}
        >
          <span className="font-bold uppercase">{business.brand} </span>
          <span className="font-medium">Appliance Repair &amp; Services</span>
        </Link>

        {/* Desktop links */}
        <div
          className="hidden md:flex justify-between items-center w-[53%] max-w-160"
          role="menubar"
          aria-label="Desktop navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="group relative text-[15px] lg:text-base whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1"
              role="menuitem"
              tabIndex={0}
            >
              {link.name}
              <span className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-foreground scale-x-0 origin-left will-change-transform group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden relative flex flex-col justify-center items-center w-8 h-8 gap-1.25 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          <span
            className={`block w-7 h-1 bg-foreground transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.25" : ""
            }`}
          />
          <span
            className={`block w-7 h-1 bg-foreground transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-7 h-1 bg-foreground transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.25" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-foreground/15 bg-background transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        role="menu"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
      >
        <div
          className="flex flex-col py-2 border-b border-foreground/15"
          role="none"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 text-[15px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
