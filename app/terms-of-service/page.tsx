import { CONTACT } from "@/config/site.constants";
import { getDomain } from "@/config/site.server";

export default async function PrivacyPolicy() {
  const h2Styles: string = "text-2xl font-semibold mb-4";
  const ulStyles: string = "list-disc pl-5 space-y-1.5";
  const domain = await getDomain();

  return (
    <section className="w-220 max-w-[95vw] mx-auto my-18">
      <h1 className="text-4xl font-bold text-primary mb-7">
        Terms & Conditions
      </h1>

      <p className="mb-2">
        <span>Effective date: </span>
        <span className="font-semibold">October 1, 2026</span>
      </p>
      <p className="mb-2">
        Welcome to Samsung Appliance Repair & Services. These Terms & Conditions
        (&quot;Terms&quot;) govern your use of our website {domain} and our
        appliance repair and maintenance services.
      </p>
      <p className="mb-7">
        By accessing or using our Site and services, you agree to be bound by
        these Terms. If you do not agree, please do not use our services.
      </p>

      <h2 className={h2Styles}>1. Services</h2>
      <p className="mb-2">
        We provide repair, installation, and maintenance services for home
        appliances including refrigerators, washing machines, televisions, water
        purifiers, and air conditioners.
      </p>
      <p className="mb-7">
        Service availability may vary by location, and all bookings are subject
        to confirmation.
      </p>

      <h2 className={h2Styles}>2. Booking & Appointments</h2>
      <p className="mb-2">
        When you book a service, you agree to provide accurate details (name,
        address, phone number, appliance information).
      </p>
      <p className="mb-7">
        Appointments are scheduled based on technician availability. We may
        contact you to confirm, reschedule, or update appointment details.
      </p>

      <h2 className={h2Styles}>3. Payments</h2>
      <p className="mb-2">
        <span className="font-semibold">A visiting charge of ₹449</span>
        <span>
          {" "}
          applies for every service visit. This charge covers technician
          doorstep inspection and fault diagnosis, and is separate from any
          repair or spare parts cost.
        </span>
      </p>
      <p className="mb-2">
        Service charges must be paid as per the agreed rate at the time of
        booking or upon completion of service.
      </p>
      <p className="mb-7">
        Prices may vary depending on spare parts, labor, or additional work
        required. Online payments, where available, are processed securely by
        third-party payment providers.
      </p>

      <h2 className={h2Styles}>4. Warranty</h2>
      <p className="mb-2">
        <span className="font-semibold">
          We offer a 90-day replacement warranty
        </span>
        <span>
          {" "}
          on repairs and parts. If a product is not in good working order within
          this period, we will replace it.{" "}
        </span>
        <span className="font-semibold">
          No visiting charge applies for a service visit made under this
          warranty.
        </span>
      </p>
      <p className="mb-7">
        Warranty does not cover damages caused by misuse, negligence, natural
        wear and tear, or unauthorized repairs by third parties.
      </p>

      <h2 className={h2Styles}>5. Customer Responsibilities</h2>
      <p className="mb-2">
        Customers are responsible for ensuring safe access to the appliance and
        maintaining a safe working environment for technicians.
      </p>
      <p className="mb-7">
        Appliances must be in a condition suitable for repair, and customers
        must disclose any prior modifications or damage.
      </p>

      <h2 className={h2Styles}>6. Limitation of Liability</h2>
      <p className="mb-2">
        While we strive for the highest service quality, Samsung Appliance
        Repair & Services is not liable for indirect damages, delays, or issues
        outside our control (such as defective parts, power outages, or user
        negligence).
      </p>
      <p className="mb-7">
        Our liability is limited to the amount paid for the specific service.
      </p>

      <h2 className={h2Styles}>7. Cancellations & Refunds</h2>
      <p className="mb-2">
        You may cancel or reschedule a service by notifying us in advance.
        Last-minute cancellations may be subject to a cancellation fee.
      </p>
      <p className="mb-7">
        Refunds, if applicable, will be processed according to our refund
        policy.
      </p>

      <h2 className={h2Styles}>8. Intellectual Property</h2>
      <p className="mb-7">
        All content on this Site, including logos, text, and images, is the
        property of Samsung Appliance Repair & Services and cannot be used
        without prior written consent.
      </p>

      <h2 className={h2Styles}>9. Changes to Terms</h2>
      <p className="mb-2">
        We may update these Terms from time to time. Any changes will be posted
        on this page with a revised effective date.
      </p>
      <p className="mb-7">
        Continued use of our services constitutes acceptance of the updated
        Terms.
      </p>

      <h2 className={h2Styles}>10. Governing Law</h2>
      <p className="mb-7">
        These Terms are governed by the laws of India. Any disputes shall be
        subject to the jurisdiction of the courts in Bangalore, India.
      </p>

      <h2 className={h2Styles}>11. Contact Us</h2>
      <p className="mb-2">
        If you have questions about these Terms & Conditions, please contact us:
      </p>
      <ul className={`${ulStyles} mb-7`}>
        <li>
          <span className="font-semibold">Business:</span>
          <span> Samsung Appliance Repair & Services</span>
        </li>
        <li>
          <span className="font-semibold">Website:</span>
          <span> {domain}</span>
        </li>
        <li>
          <span className="font-semibold">Phone:</span>
          <span> {CONTACT.phone1}</span>
        </li>
        <li>
          <span className="font-semibold">Alternate phone:</span>
          <span> {CONTACT.phone2}</span>
        </li>
      </ul>
    </section>
  );
}
