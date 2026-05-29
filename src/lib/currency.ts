import type {
  CurrencyApiResponse,
  CurrencyConversionResult,
} from "@/types/currency";

const BASE_URL = "https://api.frankfurter.app";

export async function convertCurrency(
  amount: number,
  from: string,
  to: string,
): Promise<CurrencyConversionResult> {
  const searchParams = new URLSearchParams({
    amount: amount.toString(),
    from,
    to,
  });

  const response = await fetch(
    `${BASE_URL}/latest?${searchParams.toString()}`,
    {
      next: {
        revalidate: 3600,
      },
      signal: AbortSignal.timeout(10000),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch currency conversion.");
  }

  const data: CurrencyApiResponse = await response.json();

  const rate = data.rates[to];

  if (typeof rate !== "number") {
    throw new Error("Invalid exchange rate response.");
  }

  if (!rate) {
    throw new Error("Invalid currency response.");
  }

  return {
    from,
    to,
    amount,
    result: rate,
    rate: rate / amount,
  };
}
