import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl">Privacy</h1>
      <p className="mt-4 text-grey-700">[TBC: Privacy notice in Prompt 7]</p>
    </Container>
  );
}
