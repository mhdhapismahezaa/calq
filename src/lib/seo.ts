import type { Metadata } from "next";

type CreateMetadataProps = {
  title: string;
  description: string;
  path?: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function createMetadata({
  title,
  description,
  path = "",
}: CreateMetadataProps): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Calq",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    metadataBase: new URL(siteUrl),
  };
}
