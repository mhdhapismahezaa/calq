import { memo } from "react";
import type { CurrencyCode } from "@/types/currency";

import { supportedCurrencies } from "@/constants/currencies";

type CurrencySelectProps = {
  value: CurrencyCode;
  onChange: (value: CurrencyCode) => void;
};

export const CurrencySelect = memo(function CurrencySelect({
  value,
  onChange,
}: CurrencySelectProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as CurrencyCode)}
      className="h-14 w-full rounded-2xl border border-(--border) bg-(--card) px-4 text-base outline-none transition-all focus-visible:ring-2 focus-visible:ring-black/20"
      aria-label="Select currency"
    >
      {supportedCurrencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
});
