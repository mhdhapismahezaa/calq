type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search calculators..."
      aria-label="Search calculators"
      autoComplete="off"
      enterKeyHint="search"
      className="h-14 w-full rounded-2xl border border-(--border) bg-(--card) px-5 text-base outline-none transition-all focus-visible:ring-2 focus-visible:ring-black/20"
    />
  );
}
