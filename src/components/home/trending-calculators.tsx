import { CalculatorCard } from "@/components/home/calculator-card";

import type { CalculatorItem } from "@/types/calculator";

type TrendingCalculatorsProps = {
  calculators: CalculatorItem[];
};

export function TrendingCalculators({ calculators }: TrendingCalculatorsProps) {
  if (calculators.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Trending Calculators
        </h2>

        <p className="mt-2 text-(--muted-foreground)">
          Popular calculators used by many users.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.href}
            title={calculator.title}
            description={calculator.description}
            href={calculator.href}
          />
        ))}
      </div>
    </section>
  );
}
