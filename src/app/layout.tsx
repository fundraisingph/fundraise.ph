import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fundraise.ph | The Trust Layer for Filipino Giving",
  description: "Fundraise.ph is a nonprofit technology organization building trusted, transparent, compliant, and verified fundraising infrastructure for Filipinos worldwide through Fundraising.ph.",
  keywords: [
    "Fundraise.ph", "Fundraising.ph", "Filipino fundraising", "Filipino crowdfunding",
    "bayanihan platform", "trusted fundraising Philippines", "nonprofit technology Philippines",
    "online fundraising Philippines", "Filipino diaspora giving", "verified campaigns Philippines",
    "marketplace fundraising Philippines", "transparent donations Philippines",
    "campaign verification Philippines", "fundraising compliance Philippines", "Filipino giving platform"
  ],
  authors: [{ name: "Fundraise.ph" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Fundraise.ph | The Trust Layer for Filipino Giving",
    description: "Fundraise.ph is a nonprofit technology organization building trusted, transparent, compliant, and verified fundraising infrastructure for Filipinos worldwide.",
    siteName: "Fundraise.ph",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundraise.ph | The Trust Layer for Filipino Giving",
    description: "Building the trusted fundraising infrastructure for Filipinos worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
