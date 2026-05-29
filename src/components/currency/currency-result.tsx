type CurrencyResultProps = {
  result: string;
  loading: boolean;
  error: string | null;
};

export function CurrencyResult({
  result,
  loading,
  error,
}: CurrencyResultProps) {
  return (
    <div className="surface-card p-6">
      <p className="text-sm text-(--muted-foreground)">Converted Amount</p>

      <div className="mt-2">
        {loading ? (
          <p className="text-2xl font-medium">Loading...</p>
        ) : error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : (
          <p className="text-3xl font-semibold tracking-tight">{result}</p>
        )}
      </div>
    </div>
  );
}
