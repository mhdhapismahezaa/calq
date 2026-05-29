import { memo } from "react";
import clsx from "clsx";

type CalculatorButtonProps = {
  label: string;
  onClick: () => void;
};

export const CalculatorButton = memo(function CalculatorButton({
  label,
  onClick,
}: CalculatorButtonProps) {
  const isOperator = ["+", "-", "*", "/", "="].includes(label);

  return (
    <button
      type="button"
      aria-label={`Calculator button ${label}`}
      onClick={onClick}
      className={clsx(
        `flex h-16 select-none items-center justify-center rounded-2xl border border-(--border) text-lg font-semibold transition-all outline-none hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-black/20`,
        isOperator
          ? "bg-(--primary) text-(--primary-foreground)"
          : "bg-(--card)",
      )}
    >
      {label}
    </button>
  );
});
