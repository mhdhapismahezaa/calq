import { roundNumber } from "@/lib/number";

export function calculatePercentage(value: number, percentage: number) {
  return roundNumber((value * percentage) / 100);
}

export function calculateBMI(weightKg: number, heightCm: number) {
  const heightMeter = heightCm / 100;

  return roundNumber(weightKg / (heightMeter * heightMeter));
}

export function getBMICategory(bmi: number) {
  if (bmi < 18.5) {
    return "Underweight";
  }

  if (bmi < 25) {
    return "Normal weight";
  }

  if (bmi < 30) {
    return "Overweight";
  }

  return "Obesity";
}
