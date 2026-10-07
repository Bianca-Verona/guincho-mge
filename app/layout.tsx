import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.guinchomge.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Guincho M.G.E | Guincho 24 Horas em Itaquaquecetuba",
    template: "%s | Guincho M.G.E",
  },

  description:
    "Guincho M.G.E em Itaquaquecetuba - SP. Atendimento 24 horas para guincho de carros, motos e remoção de veículos. Chame pelo WhatsApp.",

  keywords: [
    "guincho Itaquaquecetuba",
    "guincho 24 horas Itaquaquecetuba",
    "guincho em Itaquaquecetuba",
    "guincho para carros Itaquaquecetuba",
    "guincho para motos Itaquaquecetuba",
    "remoção de veículos Itaquaquecetuba",
    "guincho perto de mim",
    "Guincho MGE",
  ],

  authors: [
    {
      name: "Guincho M.G.E",
    },
  ],

  creator: "Guincho M.G.E",
  publisher: "Guincho M.G.E",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Guincho M.G.E",

    title:
      "Guincho M.G.E | Guincho 24 Horas em Itaquaquecetuba",

    description:
      "Guincho 24 horas em Itaquaquecetuba. Guincho para carros, motos e remoção de veículos.",

    images: [
      {
        url: "/images/logo-mge.png",
        width: 1200,
        height: 630,
        alt: "Guincho M.G.E - Guincho 24 horas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Guincho M.G.E | Guincho 24 Horas",

    description:
      "Guincho 24 horas em Itaquaquecetuba para carros, motos e remoção de veículos.",

    images: ["/images/logo-mge.png"],
  },

  icons: {
    icon: "/images/logo-mge.png",
    shortcut: "/images/logo-mge.png",
    apple: "/images/logo-mge.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}