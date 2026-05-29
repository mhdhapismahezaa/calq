import { NextResponse } from "next/server";

import { convertCurrency } from "@/lib/currency";

import { supportedCurrencies } from "@/constants/currencies";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const amountParam = searchParams.get("amount");

    const from = searchParams.get("from")?.toUpperCase();

    const to = searchParams.get("to")?.toUpperCase();

    if (!amountParam || !from || !to) {
      return NextResponse.json(
        {
          error: "Missing required query parameters.",
        },
        {
          status: 400,
        },
      );
    }

    const amount = Number(amountParam);

    if (Number.isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        {
          error: "Invalid amount value.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      !supportedCurrencies.includes(
        from as (typeof supportedCurrencies)[number],
      ) ||
      !supportedCurrencies.includes(to as (typeof supportedCurrencies)[number])
    ) {
      return NextResponse.json(
        {
          error: "Unsupported currency.",
        },
        {
          status: 400,
        },
      );
    }

    const conversion = await convertCurrency(amount, from, to);

    return NextResponse.json(conversion, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to convert currency.",
      },
      {
        status: 500,
      },
    );
  }
}
