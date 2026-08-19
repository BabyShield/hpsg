import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl">Contact</h1>
      <p className="mt-4 text-grey-700">
        {site.phoneDisplay}
        <br />
        {site.email}
      </p>
      <p className="mt-4 text-grey-700">[TBC: Contact form and hours in Prompt 7]</p>
    </Container>
  );
}
