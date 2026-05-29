import { CalculatorButton } from "@/components/calculator/calculator-button";

import { calculatorButtons } from "@/constants/calculator";

type CalculatorGridProps = {
  onButtonClick: (value: string) => void;
};

export function CalculatorGrid({
  onButtonClick,
}: CalculatorGridProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {calculatorButtons.map((button) => (
        <CalculatorButton
          key={button}
          label={button}
          onClick={() => onButtonClick(button)}
        />
      ))}
    </div>
  );
}