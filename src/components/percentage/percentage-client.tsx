"use client";

import { useMemo, useState } from "react";

import { calculatePercentage } from "@/lib/formulas";

import { formatNumber } from "@/lib/format";

import { isPositiveNumber } from "@/lib/validation";

import { toNumber } from "@/lib/number";

import { PercentageResult } from "@/components/percentage/percentage-result";

export function PercentageClient() {
  const [value, setValue] = useState("500");
  const [percentage, setPercentage] = useState("20");

  const result = useMemo(() => {
    const parsedValue = toNumber(value);

    const parsedPercentage = toNumber(percentage);

    if (!isPositiveNumber(parsedValue) || !isPositiveNumber(parsedPercentage)) {
      return "Invalid input";
    }

    const calculated = calculatePercentage(parsedValue, parsedPercentage);

    return formatNumber(calculated);
  }, [value, percentage]);

  return (
    <div className="w-full max-w-xl space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="number"
          inputMode="decimal"
          value={percentage}
          onChange={(event) => setPercentage(event.target.value)}
          placeholder="Percentage"
          aria-label="Percentage"
          className="h-14 rounded-2xl border border-(--border) bg-(--card) px-4 outline-none focus-visible:ring-2 focus-visible:ring-black/20"
        />

        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Value"
          aria-label="Value"
          className="h-14 rounded-2xl border border-(--border) bg-(--card) px-4 outline-none focus-visible:ring-2 focus-visible:ring-black/20"
        />
      </div>

      <PercentageResult value={result} />
    </div>
  );
}
