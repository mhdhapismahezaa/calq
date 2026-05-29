import { CalculatorClient } from "@/components/calculator/calculator-client";
import { Container } from "@/components/layout/container";
import { CalculatorShell } from "@/components/calculator/calculator-shell";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Standard Calculator",
  description: "Perform fast and accurate mathematical calculations online.",
  path: "/calculator",
});

export default function CalculatorPage() {
  return (
    <Container>
      <CalculatorShell
        title="Standard Calculator"
        description="Perform fast and accurate mathematical calculations."
      >
        <CalculatorClient />
      </CalculatorShell>
    </Container>
  );
}
