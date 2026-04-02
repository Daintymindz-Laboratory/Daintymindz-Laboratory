import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
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
  openGraph: {
    title: "DAINTYMINDZ LAB — Engineering Intelligent Futures",
    description:
      "A future-focused research institute and innovation studio dedicated to intelligence research for impact.",
    type: "website",
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
      <body className="noise-overlay min-h-full flex flex-col">{children}</body>
    </html>
  );
}
