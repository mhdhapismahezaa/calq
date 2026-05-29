import { CurrencyClient } from "@/components/currency/currency-client";
import { Container } from "@/components/layout/container";
import { CalculatorShell } from "@/components/calculator/calculator-shell";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Currency Converter",
  description: "Convert currencies instantly using live exchange rates online.",
  path: "/currency-converter",
});

export default function CurrencyConverterPage() {
  return (
    <Container>
      <CalculatorShell
        title="Currency Converter"
        description="Convert currencies instantly using live exchange rates."
      >
        <CurrencyClient />
      </CalculatorShell>
    </Container>
  );
}
