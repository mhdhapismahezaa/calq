type CalculatorDisplayProps = {
  value: string;
};

export function CalculatorDisplay({ value }: CalculatorDisplayProps) {
  return (
    <div
      aria-live="polite"
      className="surface-card flex min-h-28 items-end justify-end overflow-hidden p-6"
    >
      <span className="w-full overflow-x-auto text-right text-4xl font-semibold tracking-tight scrollbar-none">
        {value}
      </span>
    </div>
  );
}
