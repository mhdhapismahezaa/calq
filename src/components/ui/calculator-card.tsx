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
      className="
        rounded-2xl
        border
        border-(--border)
        bg-(--card)
        p-6
        transition-all
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <h2 className="text-xl font-semibold tracking-tight">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
        {description}
      </p>
    </Link>
  );
}