import Link from "next/link";
import { VISITING_FEE, getEnabledServices } from "@/config/services.constants";

export default function Pricing() {
  const services = getEnabledServices();

  return (
    <section id="pricing" className="scroll-mt-30">
      <div className="w-[95vw] mx-auto mt-25 mb-20 sm:mt-18 sm:mb-25">
        <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11">
          Pricing
        </h2>
        <table className="w-[95vw] max-w-130 sm:max-w-150 lg:max-w-200 mx-auto">
          <thead>
            <tr className="border-t border-b border-secondary">
              <th className="text-left pl-0.75 pr-2 py-5 text-[13px] sm:text-sm lg:text-[15px] text-primary font-semibold">
                Appliance
              </th>
              <th className="text-left px-2 py-5 text-[13px] sm:text-sm lg:text-[15px] text-primary font-semibold">
                Covers
              </th>
              <th className="text-left pl-2 pr-0.75 py-5 text-[13px] sm:text-sm lg:text-[15px] text-primary font-semibold">
                Visiting Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr
                key={s.key}
                className="group relative cursor-pointer transition-colors duration-100 hover:text-primary"
              >
                <td className="pl-0.75 pr-2 py-5 text-sm md:text-base lg:text-[17px]">
                  <Link
                    href={`/services/${s.baseSlug}`}
                    className="relative z-2"
                  >
                    {s.pricingLabel}
                  </Link>
                </td>
                <td className="px-2 py-5 text-sm md:text-base lg:text-[17px] font-light">
                  {s.pricingCovers}
                </td>
                <td className="pl-2 pr-0.75 py-5 text-base md:text-lg lg:text-[19px] font-semibold">
                  ₹{VISITING_FEE}
                </td>
                <td className="absolute inset-0 p-0">
                  <Link
                    href={`/services/${s.baseSlug}`}
                    className="block w-full h-full"
                    aria-label={`View ${s.pricingLabel} service page`}
                  >
                    <span className="sr-only">
                      View {s.pricingLabel} service page
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
