"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { id: number; name: string; scrollTo: number }[] = [
    { id: 1, name: "Home", scrollTo: 0 },
    { id: 2, name: "Services", scrollTo: 0 },
    { id: 3, name: "Pricing", scrollTo: 0 },
    { id: 4, name: "About Us", scrollTo: 0 },
    { id: 5, name: "Contact Us", scrollTo: 0 },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-background">
      <div className="flex flex-col-reverse min-[360px]:flex-row justify-between items-end min-[360px]:items-center h-25 min-[360px]:h-20 px-4 sm:px-6 lg:px-10 py-4 min-[360px]:py-0">
        <div className="self-start min-[360px]:self-auto text-[15px] lg:text-base whitespace-nowrap">
          <span className="font-bold uppercase">Samsung </span>
          <span className="font-medium">Appliance Repair &amp; Services</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex justify-between items-center w-[53%] max-w-160">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="text-[15px] lg:text-base whitespace-nowrap cursor-pointer"
            >
              {link.name}
            </div>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden relative flex flex-col justify-center items-center w-8 h-8 gap-1.25 shrink-0"
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
        className={`md:hidden overflow-hidden border-t border-foreground/10 bg-background transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-6 gap-6">
          {navLinks.map((link) => (
            <div
              key={link.id}
              onClick={() => setIsOpen(false)}
              className="font-medium cursor-pointer"
            >
              {link.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
