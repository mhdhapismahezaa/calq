"use client";

import { useEffect, useState } from "react";

import { CalculatorDisplay } from "@/components/calculator/calculator-display";
import { CalculatorGrid } from "@/components/calculator/calculator-grid";

import { evaluateExpression, isOperator } from "@/lib/calculator";

export function CalculatorClient() {
  const [expression, setExpression] = useState("0");

  function handleButtonClick(value: string) {
    if (value === "C") {
      setExpression("0");
      return;
    }

    if (value === "⌫") {
      setExpression((prev) => {
        if (prev === "Error") {
          return "0";
        }

        if (prev.length <= 1) {
          return "0";
        }

        return prev.slice(0, -1);
      });

      return;
    }

    if (value === "=") {
      setExpression((prev) => {
        if (prev === "Error") {
          return "0";
        }

        return evaluateExpression(prev);
      });

      return;
    }

    setExpression((prev) => {
      if (prev === "Error") {
        if (isOperator(value)) {
          return "0";
        }

        return value;
      }

      const lastCharacter = prev.slice(-1);

      // Prevent repeated operators
      if (isOperator(value) && isOperator(lastCharacter)) {
        return prev.slice(0, -1) + value;
      }

      // Prevent multiple decimals in same number
      if (value === ".") {
        const parts = prev.split(/[+\-*/]/);
        const currentNumber = parts[parts.length - 1];

        if (currentNumber.includes(".")) {
          return prev;
        }
      }

      // Replace initial zero
      if (prev === "0" && !isOperator(value)) {
        return value;
      }

      return prev + value;
    });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const key = event.key;

      const allowedKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        ".",
      ];

      if (allowedKeys.includes(key)) {
        handleButtonClick(key);
        return;
      }

      if (key === "Enter" || key === "=") {
        event.preventDefault();

        handleButtonClick("=");
        return;
      }

      if (key === "Backspace") {
        handleButtonClick("⌫");
        return;
      }

      if (key === "Escape") {
        handleButtonClick("C");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expression]);

  return (
    <div className="w-full max-w-md space-y-4">
      <CalculatorDisplay value={expression} />

      <CalculatorGrid onButtonClick={handleButtonClick} />
    </div>
  );
}
