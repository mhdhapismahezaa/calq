import { CalculatorShell } from "@/components/calculator/calculator-shell";

import { PercentageClient } from "@/components/percentage/percentage-client";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Percentage Calculator",
  description: "Calculate percentages instantly online.",
  path: "/percentage-calculator",
});

export default function PercentageCalculatorPage() {
  return (
    <CalculatorShell
      title="Percentage Calculator"
      description="Calculate percentages quickly and accurately."
    >
      <PercentageClient />
    </CalculatorShell>
  );
}
