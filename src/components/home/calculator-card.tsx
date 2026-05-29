import Link from "next/link";

type CalculatorCardProps = {
  title: string;
  description: string;
  href: string;
};

export function CalculatorCard({
  title,
  description,
  href,
}: CalculatorCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Open ${title}`}
      className="surface-card block p-6 interactive-button hover:-translate-y-1 hover:shadow-lg"
    >
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>

      <p className="mt-3 text-sm text-(--muted-foreground)">{description}</p>
    </Link>
  );
}
