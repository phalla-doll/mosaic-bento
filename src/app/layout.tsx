import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../fonts/cabinet-grotesk-100.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grotesk-200.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grotesk-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grotesk-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grotesk-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grotesk-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grotesk-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/cabinet-grotesk-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-cabinet-grotesk",
});

export const metadata: Metadata = {
  title: "Mosaic Bento Grid",
  description:
    "A curated collection of the finest interface designs, components, and layouts",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cabinetGrotesk.variable} dark`}>
      <body className={`${cabinetGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
