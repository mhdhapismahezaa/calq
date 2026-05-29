import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-(--border) py-6">
      <Container>
        <p className="text-sm text-(--muted-foreground)">
          © 2026 Calq. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}