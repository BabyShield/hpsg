import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl">Projects</h1>
      <p className="mt-4 text-grey-700">
        [TBC: 6 HR project summaries and photographs in Prompt 7]
      </p>
    </Container>
  );
}
