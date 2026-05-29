import { HeroSection } from "@/components/home/hero-section";
import { HomepageClient } from "@/components/home/homepage-client";

import { Container } from "@/components/layout/container";

import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Modern online calculators for mathematics and currency conversion.",
  path: "/",
});

export default function HomePage() {
  return (
    <Container>
      <HeroSection />

      <section className="pb-24">
        <HomepageClient />
      </section>
    </Container>
  );
}
