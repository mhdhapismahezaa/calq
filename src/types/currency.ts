export type CurrencyCode =
  | "USD"
  | "EUR"
  | "GBP"
  | "JPY"
  | "IDR"
  | "SGD"
  | "AUD"
  | "CAD"
  | "CNY"
  | "KRW";

export type CurrencyApiResponse = {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};

export type CurrencyConversionResult = {
  from: string;
  to: string;
  amount: number;
  result: number;
  rate: number;
};