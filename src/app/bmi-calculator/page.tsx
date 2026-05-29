import { CalculatorShell } from "@/components/calculator/calculator-shell";

import { BMIClient } from "@/components/bmi/bmi-client";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "BMI Calculator",
  description: "Calculate your body mass index instantly online.",
  path: "/bmi-calculator",
});

export default function BMICalculatorPage() {
  return (
    <CalculatorShell
      title="BMI Calculator"
      description="Calculate your body mass index instantly."
    >
      <BMIClient />
    </CalculatorShell>
  );
}
