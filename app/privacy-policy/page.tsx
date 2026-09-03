import { CONTACT } from "@/config/site.constants";
import { getDomain } from "@/config/site.server";

export default async function PrivacyPolicy() {
  const h2Styles: string = "text-2xl font-semibold mb-4";
  const ulStyles: string = "list-disc pl-5 space-y-1.5";
  const domain = await getDomain();

  return (
    <section className="w-220 max-w-[95vw] mx-auto my-18">
      <h1 className="text-4xl font-bold text-primary mb-7">Privacy Policy</h1>

      <p className="mb-2">
        <span>Effective date: </span>
        <span className="font-semibold">October 1, 2026</span>
      </p>
      <p className="mb-7">
        Samsung Appliance Repair & Services (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) operates {domain} (the &quot;Site&quot;) and is
        committed to protecting your privacy. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your personal information when
        you visit our Site or use our services.
      </p>

      <h2 className={h2Styles}>Information We Collect</h2>
      <p className="mb-2">
        We may collect the following categories of information:
      </p>
      <ul className={`${ulStyles} mb-7`}>
        <li>
          <span className="font-semibold">Contact information:</span>
          <span>
            {" "}
            name, email address, phone number (for example, when you request a
            service or send an inquiry).
          </span>
        </li>
        <li>
          <span className="font-semibold">Service details:</span>
          <span>
            {" "}
            appliance type, problem description, service preferences,
            appointment dates/times and related notes.
          </span>
        </li>
        <li>
          <span className="font-semibold">Usage data:</span>
          <span>
            {" "}
            information about how you use our Site (pages visited, IP address,
            browser type, device, referring pages).
          </span>
        </li>
        <li>
          <span className="font-semibold">Payment information:</span>
          <span>
            {" "}
            if you pay online, payment data is collected by our payment
            processor — we do not store full payment card details on our
            servers.
          </span>
        </li>
        <li>
          <span className="font-semibold">Communications:</span>
          <span>
            {" "}
            records of your communications with us (email, chat, phone logs) for
            customer service and quality assurance.
          </span>
        </li>
      </ul>

      <h2 className={h2Styles}>How We Use Your Information</h2>
      <p className="mb-2">
        We use the information we collect for purposes including:
      </p>
      <ul className={`${ulStyles} mb-7`}>
        <li>
          Responding to inquiries and scheduling or completing appliance repair
          and maintenance services.
        </li>
        <li>Providing customer support and follow-up communications.</li>
        <li>Processing payments and sending receipts or invoices.</li>
        <li>
          Improving our services, Site functionality, and user experience.
        </li>
        <li>
          Sending promotional messages or offers (only if you opt in), and
          important service-related updates or notices.
        </li>
        <li>
          Detecting, preventing and responding to fraud, abuse, or technical
          issues.
        </li>
      </ul>

      <h2 className={h2Styles}>
        Legal Basis for Processing (where applicable)
      </h2>
      <p className="mb-7">
        When required by law, we rely on your consent, performance of a contract
        (e.g., providing a booked service), or our legitimate interests
        (improving services, preventing fraud). Where applicable, you have
        rights to withdraw consent or object to certain processing — see
        &quot;Your Rights&quot; below.
      </p>

      <h2 className={h2Styles}>Sharing & Disclosure</h2>
      <p className="mb-2">We may share your information with:</p>
      <ul className={`${ulStyles} mb-7`}>
        <li>
          Third-party service providers (e.g., payment processors, booking
          platforms, cloud hosts, email providers) who assist us in operating
          the Site and delivering services — they act under contract and only on
          our instructions.
        </li>
        <li>
          When required by law or to respond to legal process, protect vital
          interests, or defend our rights.
        </li>
        <li>
          In connection with a business transaction (e.g., sale, merger,
          reorganization), subject to confidentiality protections.
        </li>
      </ul>

      <h2 className={h2Styles}>Cookies & Tracking Technologies</h2>
      <p className="mb-7">
        We and third parties may use cookies, web beacons, and similar
        technologies to collect usage information. Cookies help us remember
        preferences, analyze Site performance, and improve user experience. You
        can manage or disable cookies via your browser settings; however,
        disabling cookies may limit certain Site features.
      </p>

      <h2 className={h2Styles}>Security</h2>
      <p className="mb-7">
        We take reasonable administrative, technical, and physical measures to
        protect personal data against unauthorized access, loss, misuse, or
        alteration. While we strive to protect your information, no method of
        transmission or electronic storage is 100% secure. Please exercise care
        when sharing sensitive information.
      </p>

      <h2 className={h2Styles}>Data Retention</h2>
      <p className="mb-7">
        We retain personal data only as long as necessary to fulfill the
        purposes outlined in this policy, comply with legal obligations, resolve
        disputes, and enforce agreements. After that, we securely delete or
        anonymize the data.
      </p>

      <h2 className={h2Styles}>Children</h2>
      <p className="mb-7">
        Our Site and services are not directed to children under 13 (or the
        applicable minimum age in your jurisdiction). We do not knowingly
        collect personal information from children. If you believe we have
        collected data from a child, please contact us so we can promptly delete
        it.
      </p>

      <h2 className={h2Styles}>Your Rights</h2>
      <p className="mb-2">
        Depending on your location and applicable law, you may have rights to:
      </p>
      <ul className={`${ulStyles} mb-2`}>
        <li>Access the personal information we hold about you.</li>
        <li>Request correction of inaccurate or incomplete information.</li>
        <li>Request deletion of your personal information.</li>
        <li>Object to or restrict certain processing activities.</li>
        <li>
          Receive a copy of your data in a portable format (where applicable).
        </li>
      </ul>
      <p className="mb-7">
        To exercise these rights or for any privacy-related requests, contact us
        using the details below. We may need to verify your identity before
        responding.
      </p>

      <h2 className={h2Styles}>Third-Party Links</h2>
      <p className="mb-7">
        Our Site may contain links to third-party websites. We are not
        responsible for the privacy practices of other sites. Please review the
        privacy policies of any third-party sites you visit.
      </p>

      <h2 className={h2Styles}>International Transfers</h2>
      <p className="mb-7">
        If your information is transferred outside your country (for example, to
        service providers or cloud hosts), we will take steps to ensure
        appropriate safeguards are in place to protect your information in
        accordance with applicable law.
      </p>

      <h2 className={h2Styles}>Policy Changes</h2>
      <p className="mb-7">
        We may update this Privacy Policy from time to time. If we make material
        changes, we will post the updated policy on this page with a revised
        effective date. We encourage you to review this page periodically.
      </p>

      <h2 className={h2Styles}>Contact Us</h2>
      <p className="mb-2">
        If you have questions, requests, or concerns about this Privacy Policy
        or our privacy practices, please contact us:
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
