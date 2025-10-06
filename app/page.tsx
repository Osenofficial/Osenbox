"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ProfileCard } from "@/components/profile-card"
import { LinkCard } from "@/components/link-card"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { linksData, type LinkData } from "@/lib/links-data"

export default function Home() {
  const [links, setLinks] = useState<LinkData[]>(linksData)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const primaryLinks = links.filter((link) => link.type === "primary")
  const promoLinks = links.filter((link) => link.type === "promo")
  const secondaryLinks = links.filter((link) => link.type === "secondary")
  const miniLinks = links.filter((link) => link.type === "mini")
  const donationLinks = links.filter((link) => link.type === "donation")

  return (
    <main className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <ThemeSwitcher />

      <div className="max-w-7xl mx-auto">
        {/* Mobile: Single column, Desktop: Two columns */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-start">
          {/* Profile Section */}
          <div className="lg:sticky lg:top-8">
            <ProfileCard />
          </div>

          {/* Links Section */}
          <div className="space-y-6">
            {/* Primary CTA */}
            {primaryLinks.map((link, index) => (
              <LinkCard key={link.id} link={link} index={index} />
            ))}

            {/* Promo Card */}
            {promoLinks.map((link, index) => (
              <LinkCard key={link.id} link={link} index={primaryLinks.length + index} />
            ))}

            {/* Secondary Links */}
            <div className="grid sm:grid-cols-2 gap-4">
              {secondaryLinks.map((link, index) => (
                <LinkCard key={link.id} link={link} index={primaryLinks.length + promoLinks.length + index} />
              ))}
            </div>

            {/* Mini Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {miniLinks.map((link, index) => (
                <LinkCard key={link.id} link={link} index={index} />
              ))}
            </motion.div>

            {/* Donation */}
            {donationLinks.map((link, index) => (
              <LinkCard key={link.id} link={link} index={links.length - 1 + index} />
            ))}

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-center pt-8 pb-4 space-y-3"
            >
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <a href="mailto:osen.info1@gmail.com" className="hover:text-primary transition-colors">
                  osen.info1@gmail.com
                </a>
                <span>•</span>
                <a href="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
                <span>•</span>
                <a href="/privacy" className="hover:text-primary transition-colors">
                  Privacy
                </a>
              </div>
              <p className="text-sm text-muted-foreground">© 2025 OSEN. Built with ❤️ for builders.</p>
            </motion.footer>
          </div>
        </div>
      </div>
    </main>
  )
}
