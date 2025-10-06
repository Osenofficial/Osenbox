"use client"

import { motion } from "framer-motion"
import { ExternalLink, TrendingUp } from "lucide-react"
import type { LinkData } from "@/lib/links-data"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface LinkCardProps {
  link: LinkData
  index: number
  isDragging?: boolean
}

export function LinkCard({ link, index, isDragging = false }: LinkCardProps) {
  const [clicks, setClicks] = useState(link.clicks || 0)

  const handleClick = () => {
    if (link.trackAnalytics) {
      setClicks((prev) => prev + 1)
      console.log(`[v0] Analytics: Link "${link.title}" clicked. Total clicks: ${clicks + 1}`)
    }
  }

  if (link.type === "primary") {
    return (
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`block ${isDragging ? "cursor-move" : ""}`}
      >
        <Button
          size="lg"
          className="w-full h-auto py-6 px-8 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl text-white"
        >
          <span className="mr-3 text-2xl">{link.icon}</span>
          <div className="flex-1 text-left">
            <div className="text-white">{link.title}</div>
            {link.subtitle && <div className="text-sm text-white/80 font-normal">{link.subtitle}</div>}
          </div>
          <ExternalLink className="w-5 h-5 ml-3 text-white/80" />
        </Button>
      </motion.a>
    )
  }

  if (link.type === "promo") {
    return (
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`block ${isDragging ? "cursor-move" : ""}`}
      >
        <div className="glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          {link.image && (
            <div className="relative h-40 overflow-hidden">
              <img src={link.image || "/placeholder.svg"} alt={link.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">{link.icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">{link.title}</h3>
                {link.subtitle && <p className="text-sm text-muted-foreground">{link.subtitle}</p>}
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </motion.a>
    )
  }

  if (link.type === "mini") {
    return (
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 * index, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground hover:text-primary transition-colors ${
          isDragging ? "cursor-move" : ""
        }`}
      >
        <span>{link.icon}</span>
        <span>{link.title}</span>
      </motion.a>
    )
  }

  if (link.type === "donation") {
    return (
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`block ${isDragging ? "cursor-move" : ""}`}
      >
        <div className="glass-card rounded-2xl p-6 border-2 border-accent/30 hover:border-accent/50 transition-colors shadow-lg hover:shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
              {link.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1">{link.title}</h3>
              {link.subtitle && <p className="text-sm text-muted-foreground">{link.subtitle}</p>}
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </motion.a>
    )
  }

  // Secondary type
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`block ${isDragging ? "cursor-move" : ""}`}
    >
      <div className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
            {link.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-1">{link.title}</h3>
            {link.subtitle && <p className="text-sm text-muted-foreground">{link.subtitle}</p>}
          </div>
          <div className="flex flex-col items-end gap-1">
            <ExternalLink className="w-5 h-5 text-muted-foreground" />
            {link.trackAnalytics && clicks > 0 && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3" />
                <span>{clicks}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.a>
  )
}
