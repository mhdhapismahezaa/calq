// src/components/home/homepage-client.tsx

"use client";

import { useMemo, useState } from "react";

import { SearchInput } from "@/components/home/search-input";

import { FeaturedCalculators } from "@/components/home/featured-calculators";

import {
  allCalculators,
  calculatorCategoriesList,
  featuredCalculators,
  trendingCalculators,
} from "@/lib/calculators";

import { CategoryFilter } from "@/components/home/category-filter";

import { TrendingCalculators } from "@/components/home/trending-calculators";

import { CategorySection } from "@/components/home/category-section";

export function HomepageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCalculators = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allCalculators.filter((calculator) => {
      const matchesSearch =
        query === "" ||
        [calculator.title, calculator.description, calculator.category]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesCategory =
        activeCategory === "all" || calculator.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const visibleCalculators = useMemo(() => {
    const shouldHideFeatured = search.trim() === "" && activeCategory === "all";

    if (!shouldHideFeatured) {
      return filteredCalculators;
    }

    return filteredCalculators.filter((calculator) => !calculator.featured);
  }, [filteredCalculators, search, activeCategory]);

  const groupedCalculators = useMemo(() => {
    return visibleCalculators.reduce<Record<string, typeof visibleCalculators>>(
      (groups, calculator) => {
        const category = calculator.category;

        if (!groups[category]) {
          groups[category] = [];
        }

        groups[category].push(calculator);

        return groups;
      },
      {},
    );
  }, [visibleCalculators]);

  if (allCalculators.length === 0) {
    return null;
  }

  return (
    <section className="space-y-12">
      <SearchInput value={search} onChange={setSearch} />

      <CategoryFilter
        categories={calculatorCategoriesList}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      {search.trim() === "" && activeCategory === "all" && (
        <FeaturedCalculators calculators={featuredCalculators} />
      )}

      {visibleCalculators.length > 0 ? (
        <div className="space-y-14">
          {search.trim() === "" && activeCategory === "all" && (
            <TrendingCalculators calculators={trendingCalculators} />
          )}

          {Object.entries(groupedCalculators)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([category, calculators]) => (
              <CategorySection
                key={category}
                title={`${category} calculators`}
                calculators={calculators}
              />
            ))}
        </div>
      ) : (
        <div className="surface-card flex items-center justify-center p-10 text-center">
          <p className="text-(--muted-foreground)">No calculators found.</p>
        </div>
      )}
    </section>
  );
}
