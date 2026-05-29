type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`interactive-button rounded-2xl border px-4 py-2 text-sm font-medium capitalize
              ${
                isActive
                  ? "border-transparent bg-(--primary) text-(--primary-foreground)"
                  : "border-(--border) bg-(--card)"
              }
`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
