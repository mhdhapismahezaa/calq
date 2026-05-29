type CurrencyInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CurrencyInput({ value, onChange }: CurrencyInputProps) {
  return (
    <input
      type="number"
      inputMode="decimal"
      min="0"
      step="any"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Enter amount"
      className="h-14 w-full rounded-2xl border border-(--border) bg-(--card) px-4 text-lg outline-none transition-all focus-visible:ring-2 focus-visible:ring-black/20"
      aria-label="Currency amount"
    />
  );
}
