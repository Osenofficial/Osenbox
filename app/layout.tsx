import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "OSEN — सबके लिए सीखने और बनाने का नेटवर्क ✨",
  description:
    "Open Source & Education Network. Support for hackathons, workshops & student builders. Join our community of learners and creators.",
  keywords: ["OSEN", "Open Source", "Education", "Hackathons", "Student Builders", "Community", "Learning Network"],
  authors: [{ name: "OSEN" }],
  creator: "OSEN",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://osen.dev",
    title: "OSEN — सबके लिए सीखने और बनाने का नेटवर्क ✨",
    description: "Support for hackathons, workshops & student builders.",
    siteName: "OSEN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OSEN - Open Source & Education Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OSEN — सबके लिए सीखने और बनाने का नेटवर्क ✨",
    description: "Support for hackathons, workshops & student builders.",
    images: ["/og-image.png"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
