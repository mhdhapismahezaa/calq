type CalculatorShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function CalculatorShell({
  title,
  description,
  children,
}: CalculatorShellProps) {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col items-center py-16">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>

        <p className="mt-3text-(--muted-foreground)">{description}</p>
      </div>

      {children}
    </section>
  );
}
