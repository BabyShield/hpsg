import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl">About</h1>
      <p className="mt-4 text-grey-700">[TBC: About page copy in Prompt 7]</p>
    </Container>
  );
}
