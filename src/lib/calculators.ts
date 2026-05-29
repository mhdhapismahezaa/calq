import { calculatorCategories } from "@/constants/calculators";

export const allCalculators = calculatorCategories.flatMap(
  (category) => category.calculators,
);

export const featuredCalculators = [...allCalculators]
  .filter((calculator) => calculator.featured)
  .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));

export const calculatorCategoriesList = [
  "all",
  ...new Set(allCalculators.map((calculator) => calculator.category)),
];

export const trendingCalculators = [...allCalculators]
  .filter((calculator) => calculator.trending)
  .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
