"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { motion, AnimatePresence } from "framer-motion"

const themes = [
  { name: "Default", primary: "oklch(0.55 0.22 264)", accent: "oklch(0.60 0.24 295)" },
  { name: "Ocean", primary: "oklch(0.55 0.20 220)", accent: "oklch(0.60 0.22 200)" },
  { name: "Sunset", primary: "oklch(0.60 0.22 30)", accent: "oklch(0.65 0.24 350)" },
  { name: "Forest", primary: "oklch(0.50 0.18 150)", accent: "oklch(0.55 0.20 130)" },
]

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(0)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle("dark", newIsDark)
  }

  const applyTheme = (index: number) => {
    setCurrentTheme(index)
    const theme = themes[index]
    document.documentElement.style.setProperty("--primary", theme.primary)
    document.documentElement.style.setProperty("--accent", theme.accent)
  }

  return (
    <div className="fixed top-6 right-6 flex gap-2 z-50">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="glass-card border-border/50 hover:border-border bg-transparent"
          aria-label="Toggle dark mode"
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <Moon className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Sun className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      <Popover>
        <PopoverTrigger asChild>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              className="glass-card border-border/50 hover:border-border bg-transparent"
              aria-label="Choose theme"
            >
              <Palette className="h-5 w-5" />
            </Button>
          </motion.div>
        </PopoverTrigger>
        <PopoverContent className="w-64 glass-card border-border/50">
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-foreground">Choose Theme</h4>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme, index) => (
                <button
                  key={theme.name}
                  onClick={() => applyTheme(index)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    currentTheme === index ? "border-primary shadow-lg" : "border-border/50 hover:border-border"
                  }`}
                >
                  <div className="flex gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full" style={{ background: theme.primary }} />
                    <div className="w-6 h-6 rounded-full" style={{ background: theme.accent }} />
                  </div>
                  <div className="text-xs font-medium text-foreground">{theme.name}</div>
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
