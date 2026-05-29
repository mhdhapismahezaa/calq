import { CalculatorCard } from "@/components/home/calculator-card";

type Calculator = {
  title: string;
  description: string;
  href: string;
};

type CalculatorSectionProps = {
  title: string;
  description: string;
  calculators: Calculator[];
};

export function CalculatorSection({
  title,
  description,
  calculators,
}: CalculatorSectionProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>

        <p className="mt-2 text-(--muted-foreground)">{description}</p>
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
