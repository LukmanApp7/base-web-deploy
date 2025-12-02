import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Enhanced SEO metadata for printing business
export const metadata: Metadata = {
  title: "PrintPro - Professional Printing Services | Business Cards, Brochures & More",
  description:
    "Premium printing services for business cards, brochures, posters, and custom designs. Fast turnaround, competitive pricing, and exceptional quality. Upload your design or use our templates.",
  keywords: [
    "printing services",
    "business cards",
    "brochures",
    "posters",
    "custom printing",
    "professional printing",
    "online printing",
  ],
  authors: [{ name: "PrintPro" }],
  openGraph: {
    title: "PrintPro - Professional Printing Services",
    description: "Premium printing services with fast turnaround and competitive pricing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintPro - Professional Printing Services",
    description: "Premium printing services with fast turnaround and competitive pricing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
