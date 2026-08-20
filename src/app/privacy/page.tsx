import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { addressSingleLine, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { publicCopy } from "@/lib/public-copy";

export const metadata = pageMetadata({
  title: "Privacy notice | HPSG",
  description: "Privacy notice for Hampstead Property Services Group Limited.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  const purpose = publicCopy(
    "We use enquiry data to respond to you and, if you instruct us, to carry out the work. The legal basis is our legitimate interest in answering a request you have made, and contract where we then work for you. We do not sell personal data. We do not run a marketing list from this form unless you have asked us to [TBC: confirm marketing practice].",
  );
  const retention = publicCopy(
    "[TBC: retention period for enquiry emails and form submissions]. We keep records required for tax and insurance for as long as those obligations last.",
  );
  const sharing = publicCopy(
    "Hosting is on Cloudflare. If a form provider is connected later, that provider will process submissions on our instructions. [TBC: form endpoint / processor name]. We may share data with professional advisers or insurers where required, or if the law requires it.",
  );

  return (
    <Container className="py-16 sm:py-24">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy", href: "/privacy/" },
        ]}
      />
      <p className="rule mb-8" aria-hidden="true" />
      <h1 className="font-display text-5xl font-light sm:text-6xl">Privacy notice</h1>
      <div className="mt-10 max-w-measure space-y-5 text-base leading-relaxed text-grey-700">
        <p>
          This notice is for the enquiry form and contact details on {site.url}.
          The controller is {site.legalName}, {addressSingleLine}. Contact:{" "}
          {site.email}, {site.phoneDisplay}.
        </p>
        <h2 className="pt-4 font-display text-3xl font-normal text-navy">Data we collect</h2>
        <p>
          If you send an enquiry we collect your name, email address, telephone
          number if given, the area and service you select, and the message
          you write. Server logs may record technical data such as IP address
          and browser type as part of hosting.
        </p>
        <h2 className="pt-4 font-display text-3xl font-normal text-navy">
          Purpose and legal basis
        </h2>
        <p>{purpose}</p>
        <h2 className="pt-4 font-display text-3xl font-normal text-navy">Retention</h2>
        <p>{retention}</p>
        <h2 className="pt-4 font-display text-3xl font-normal text-navy">Sharing</h2>
        <p>{sharing}</p>
        <h2 className="pt-4 font-display text-3xl font-normal text-navy">Your rights</h2>
        <p>
          You may ask for a copy of your data, correction, erasure, restriction
          or objection, and you may complain to the Information
          Commissioner&apos;s Office. Write to {site.email}.
        </p>
      </div>
    </Container>
  );
}
