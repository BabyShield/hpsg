import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Group",
};

export default function GroupPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl">The group</h1>
      <p className="mt-4 text-grey-700">
        [TBC: Group page copy, brand list and URLs in Prompt 7]
      </p>
    </Container>
  );
}
