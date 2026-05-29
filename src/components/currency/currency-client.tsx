// src/components/currency/currency-client.tsx

"use client";

import { useEffect, useState, useCallback } from "react";

import { ArrowLeftRight } from "lucide-react";

import { CurrencyInput } from "@/components/currency/currency-input";
import { CurrencyResult } from "@/components/currency/currency-result";
import { CurrencySelect } from "@/components/currency/currency-select";

import type { CurrencyCode, CurrencyConversionResult } from "@/types/currency";

import { formatNumber } from "@/lib/format";

export function CurrencyClient() {
  const [amount, setAmount] = useState("1");

  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>("USD");

  const [toCurrency, setToCurrency] = useState<CurrencyCode>("IDR");

  const [result, setResult] = useState("0");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const fetchConversion = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const parsedAmount = Number(amount);

      if (Number.isNaN(parsedAmount) || parsedAmount <= 0) {
        setResult("0");
        return;
      }

      const searchParams = new URLSearchParams({
        amount,
        from: fromCurrency,
        to: toCurrency,
      });

      const response = await fetch(`/api/currency?${searchParams.toString()}`);

      const data: CurrencyConversionResult | { error: string } =
        await response.json();

      if (!response.ok) {
        throw new Error("error" in data ? data.error : "Conversion failed.");
      }

      if (!("result" in data)) {
        throw new Error("Conversion failed: missing result.");
      }

      const formattedResult = formatNumber(data.result);

      setResult(formattedResult);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }, [amount, fromCurrency, toCurrency]);

  function handleSwapCurrencies() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchConversion();
  }, [fetchConversion]);

  return (
    <div className="w-full max-w-md space-y-4">
      <CurrencyInput value={amount} onChange={setAmount} />

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <CurrencySelect value={fromCurrency} onChange={setFromCurrency} />

        <button
          type="button"
          aria-label="Swap currencies"
          onClick={handleSwapCurrencies}
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-(--border) bg-(--card) transition-all active:scale-95"
        >
          <ArrowLeftRight size={20} />
        </button>

        <CurrencySelect value={toCurrency} onChange={setToCurrency} />
      </div>

      <CurrencyResult result={result} loading={loading} error={error} />
    </div>
  );
}
