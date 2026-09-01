"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/UI/Button";
import ExternalLink from "@/assets/ExternalLink";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyles: string =
    "w-full bg-background text-[13px] text-foreground placeholder:text-[#989176] px-3 py-2.5 sm:py-2";

  return (
    <section className="bg-primary">
      <div className="flex flex-col min-[890px]:flex-row min-[890px]:justify-between min-[890px]:items-center w-full min-[890px]:w-240 lg:w-255 min-[890px]:max-w-[95vw] min-[890px]:mx-auto mt-12 mb-27 min-[890px]:gap-4">
        <div className="mx-auto min-[890px]:mx-0 w-86 sm:w-full min-[890px]:w-80 max-w-[95vw] min-[890px]:max-w-75 min-[890px]:mb-17 text-background">
          <h1 className="min-[640px]:max-[889px]:text-center min-[890px]:text-left text-4xl min-[890px]:text-5xl min-[890px]:leading-14 font-bold uppercase tracking-wider mb-1 min-[890px]:mb-3">
            Let&apos;s get in touch
          </h1>
          <p className="min-[640px]:max-[889px]:text-center min-[890px]:text-left text-sm leading-5.25 min-[890px]:leading-5.75 font-light">
            Tell us what&apos;s wrong, we&apos;ll take it from there.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch min-[640px]:max-[889px]:mx-auto min-[890px]:mx-0 sm:w-[95vw] min-[640px]:max-[889px]:max-w-150 min-[890px]:max-w-140 lg:max-w-160 gap-6 sm:gap-4.5 mt-9 min-[890px]:mt-0 sm:p-4 sm:bg-secondary">
          <div className="flex flex-col self-end min-[420px]:self-auto w-86 sm:min-h-full max-w-[95vw] p-3 sm:p-0 bg-secondary sm:bg-transparent gap-3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:h-full gap-2"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`${inputStyles}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${inputStyles}`}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`${inputStyles}`}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputStyles} sm:flex-1 resize-none`}
              />
              {status === "success" && (
                <p className="text-sm text-[#08640B]">
                  Message sent! We&apos;ll get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-[#640808]">
                  Something went wrong. Please try again.
                </p>
              )}
              <div className="flex ml-auto mt-1 sm:mt-0">
                <Button variant="primary">
                  {status === "sending" ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </div>
          <div className="flex flex-col self-start min-[420px]:self-auto w-86 max-w-[95vw] p-3 sm:p-0 bg-secondary sm:bg-transparent gap-3">
            <div className="flex flex-col gap-1">
              <span className="flex justify-between items-center">
                <h2 className="text-[17px] font-semibold uppercase tracking-wide">
                  Where to find us
                </h2>
                <a
                  href="https://www.google.com/maps?ll=12.90825,77.610194&z=16&t=m&hl=en&gl=IN&mapclient=embed&q=12%C2%B054%2729.7%22N+77%C2%B036%2736.7%22E+12.908250,+77.610194@12.90825,77.6101944"
                  target="_blank"
                  className="group flex items-center gap-1 text-xs font-light"
                >
                  <span className="group-hover:underline">View Map</span>
                  <ExternalLink height={14} />
                </a>
              </span>
              <div className="h-50 pointer-events-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.991774688714!2d77.6101944!3d12.90825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzI5LjciTiA3N8KwMzYnMzYuNyJF!5e0!3m2!1sen!2sin!4v1788234203860!5m2!1sen!2sin"
                  className="w-full h-full pointer-events-auto"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              {/* map */}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[17px] font-semibold uppercase tracking-wide">
                Contact Details
              </h2>
              <ul className="text-xs font-light">
                <li>Samsung Appliance Repair & Services</li>
                <li>Bangalore, Karnataka</li>
                <li>9741249192</li>
                <li>9740859192</li>
                <li>info@domain.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
