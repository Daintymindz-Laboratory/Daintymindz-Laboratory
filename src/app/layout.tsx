import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const themeScript = `(() => {
  try {
    const storedTheme = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : systemTheme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();`;

const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL("https://daintymindz.com"),
  title: "DAINTYMINDZ LAB — Engineering Intelligent Futures",
  description:
    "DAINTYMINDZ LAB is a future-focused research institute and innovation studio dedicated to intelligence research for impact.",
  keywords: [
    "DAINTYMINDZ",
    "research lab",
    "intelligence research",
    "applied AI",
    "innovation studio",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: isProduction,
    follow: isProduction,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "DAINTYMINDZ LAB — Engineering Intelligent Futures",
    description:
      "A future-focused research institute and innovation studio dedicated to intelligence research for impact.",
    type: "website",
    url: "https://daintymindz.com",
    siteName: "DAINTYMINDZ LAB",
    images: [
      {
        url: "https://daintymindz.com/images/daintymind/daintymind-hero-dark.png",
        width: 1200,
        height: 630,
        alt: "DAINTYMINDZ LAB — Engineering Intelligent Futures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAINTYMINDZ LAB — Engineering Intelligent Futures",
    description:
      "A future-focused research institute and innovation studio dedicated to intelligence research for impact.",
    images: ["https://daintymindz.com/images/daintymind/daintymind-hero-dark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="noise-overlay min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
