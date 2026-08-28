export default function Pricing() {
  const pricingData: {
    appliance: string;
    covers: string;
    fee: string;
  }[] = [
    {
      appliance: "AC",
      covers: "Gas leak, PCB, compressor, deep clean",
      fee: "₹449",
    },
    {
      appliance: "Washing Machine",
      covers: "Drum, motor, drain valve",
      fee: "₹449",
    },
    {
      appliance: "TV (LED/Smart)",
      covers: "Screen, motherboard, sound",
      fee: "₹449",
    },
    {
      appliance: "Water Purifier",
      covers: "Filter change, leakage, low flow",
      fee: "₹449",
    },
    {
      appliance: "Refrigerator",
      covers: "Compressor, gas refill, thermostat",
      fee: "₹449",
    },
  ];

  return (
    <section>
      <div className="w-[95vw] mx-auto mt-25 mb-20 sm:mt-18 sm:mb-25">
        <h1 className="text-center text-3xl sm:text-4xl font-bold uppercase tracking-wider mb-11">
          Pricing
        </h1>
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
            {pricingData.map((row, index) => (
              <tr key={index}>
                <td className="pl-0.75 pr-2 py-5 text-sm md:text-base lg:text-[17px]">
                  {row.appliance}
                </td>
                <td className="px-2 py-5 text-sm md:text-base lg:text-[17px] font-light">
                  {row.covers}
                </td>
                <td className="pl-2 pr-0.75 py-5 text-base md:text-lg lg:text-[19px] font-semibold">
                  {row.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
