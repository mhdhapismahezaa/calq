type PercentageResultProps = {
  value: string;
};

export function PercentageResult({ value }: PercentageResultProps) {
  return (
    <div className="surface-card flex min-h-28 items-center justify-center p-6">
      <p className="text-3xl font-bold tracking-tight">{value}</p>
    </div>
  );
}
