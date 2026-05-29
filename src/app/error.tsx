"use client";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight">
        Something went wrong
      </h1>

      <p className="mt-4 max-w-md text-(--muted-foreground)">
        {error.message || "An unexpected error occurred."}
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-2xl bg-(--primary) px-5 py-3 text-sm font-medium text-(--primary-foreground) transition-all hover:opacity-90"
      >
        Try Again
      </button>
    </div>
  );
}
