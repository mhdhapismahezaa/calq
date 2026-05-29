// src/lib/calculator.ts

import { operators } from "@/constants/calculator";

export function evaluateExpression(expression: string) {
  try {
    const sanitizedExpression = expression.replace(/×/g, "*");

    const result = Function(`"use strict"; return (${sanitizedExpression})`)();

    if (!Number.isFinite(result)) {
      return "Error";
    }

    return result.toString();
  } catch {
    return "Error";
  }
}

export function isOperator(value: string) {
  return operators.includes(value);
}

export function getLastCharacter(value: string) {
  return value.slice(-1);
}
