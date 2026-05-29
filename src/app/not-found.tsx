import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight">404</h1>

      <p className="mt-4 text-lg">Page not found.</p>

      <Link
        href="/"
        className="mt-6 rounded-2xl bg-(--primary) px-5 py-3 text-sm font-medium text-(--primary-foreground) transition-all hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
