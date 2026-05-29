type BMIResultProps = {
  bmi: string;
  category: string;
};

export function BMIResult({ bmi, category }: BMIResultProps) {
  return (
    <div className="surface-card space-y-4 p-8 text-center">
      <div>
        <p className="text-smtext-(--muted-foreground)">Your BMI</p>

        <h2 className="mt-2 text-5xl font-bold">{bmi}</h2>
      </div>

      <div>
        <p className="text-smtext-(--muted-foreground)">Category</p>

        <p className="mt-1 text-xl font-semibold">{category}</p>
      </div>
    </div>
  );
}
