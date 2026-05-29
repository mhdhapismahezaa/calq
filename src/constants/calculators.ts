import type { CalculatorItem } from "@/types/calculator";

type CalculatorCategory = {
  title: string;
  description: string;
  calculators: CalculatorItem[];
};

export const calculatorCategories: CalculatorCategory[] = [
  {
    title: "General Calculators",
    description: "Basic calculators for everyday calculations.",
    calculators: [
      {
        title: "Standard Calculator",
        description: "Perform quick and easy mathematical calculations.",
        href: "/calculator",
        category: "general",
        featured: true,
        popularity: 100,
        trending: true,
      },
      {
        title: "Percentage Calculator",
        description: "Calculate percentages quickly and accurately.",
        href: "/percentage-calculator",
        category: "general",
        featured: false,
        popularity: 80,
        trending: false,
      },
      {
        title: "BMI Calculator",
        description: "Calculate body mass index instantly.",
        href: "/bmi-calculator",
        category: "general",
        featured: true,
        popularity: 75,
        trending: true,
      },
    ],
  },
  {
    title: "Finance Calculators",
    description: "Currency and financial conversion tools.",
    calculators: [
      {
        title: "Currency Converter",
        description: "Convert currencies using live exchange rates.",
        href: "/currency-converter",
        category: "finance",
        featured: true,
        popularity: 90,
        trending: true,
      },
    ],
  },
];
