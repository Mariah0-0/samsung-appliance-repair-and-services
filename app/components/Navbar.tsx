"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { id: number; name: string; link: string }[] = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Services", link: "#services" },
    { id: 3, name: "Pricing", link: "#pricing" },
    { id: 4, name: "About Us", link: "#about" },
    { id: 5, name: "Contact Us", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-5 w-full bg-background">
      <div className="flex flex-col-reverse min-[360px]:flex-row justify-between items-end min-[360px]:items-center h-23 min-[360px]:h-18 px-4 sm:px-6 lg:px-10 py-3.5 min-[360px]:py-0">
        <a
          href=""
          className="self-start min-[360px]:self-auto text-sm md:text-[15px] lg:text-base whitespace-nowrap"
        >
          <span className="font-bold uppercase">Samsung </span>
          <span className="font-medium">Appliance Repair &amp; Services</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex justify-between items-center w-[53%] max-w-160">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="group relative text-[15px] lg:text-base whitespace-nowrap cursor-pointer"
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
        className={`md:hidden overflow-hidden border-y border-foreground/15 bg-background transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col py-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 text-[15px] cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
