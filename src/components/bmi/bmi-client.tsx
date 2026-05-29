"use client";

import { useMemo, useState } from "react";

import { calculateBMI, getBMICategory } from "@/lib/formulas";

import { formatNumber } from "@/lib/format";

import { toNumber } from "@/lib/number";

import { isPositiveNumber } from "@/lib/validation";

import { BMIResult } from "@/components/bmi/bmi-result";

export function BMIClient() {
  const [weight, setWeight] = useState("70");

  const [height, setHeight] = useState("175");

  const result = useMemo(() => {
    const parsedWeight = toNumber(weight);

    const parsedHeight = toNumber(height);

    if (!isPositiveNumber(parsedWeight) || !isPositiveNumber(parsedHeight)) {
      return {
        bmi: "Invalid",
        category: "Invalid input",
      };
    }

    const bmi = calculateBMI(parsedWeight, parsedHeight);

    return {
      bmi: formatNumber(bmi),
      category: getBMICategory(bmi),
    };
  }, [weight, height]);

  return (
    <div className="w-full max-w-xl space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="number"
          inputMode="decimal"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
          placeholder="Weight (kg)"
          aria-label="Weight in kilograms"
          className="
            h-14 rounded-2xl border border-(--border) bg-(--card) px-4 outline-none focus-visible:ring-2 focus-visible:ring-black/20"
        />

        <input
          type="number"
          inputMode="decimal"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
          placeholder="Height (cm)"
          aria-label="Height in centimeters"
          className="h-14 rounded-2xl border border-(--border) bg-(--card) px-4 outline-none focus-visible:ring-2 focus-visible:ring-black/20"
        />
      </div>

      <BMIResult bmi={result.bmi} category={result.category} />
    </div>
  );
}
