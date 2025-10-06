"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Settings, GripVertical, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LinkData } from "@/lib/links-data"

interface AdminPanelProps {
  links: LinkData[]
  onReorder: (links: LinkData[]) => void
}

export function AdminPanel({ links, onReorder }: AdminPanelProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)

  const handleDragStart = (id: string) => {
    setDraggedItem(id)
  }

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    if (!draggedItem || draggedItem === targetId) return

    const draggedIndex = links.findIndex((link) => link.id === draggedItem)
    const targetIndex = links.findIndex((link) => link.id === targetId)

    const newLinks = [...links]
    const [removed] = newLinks.splice(draggedIndex, 1)
    newLinks.splice(targetIndex, 0, removed)

    onReorder(newLinks)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full shadow-lg bg-gradient-primary hover:opacity-90"
          aria-label="Toggle admin panel"
        >
          <Settings className="w-5 h-5 mr-2" />
          Admin
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Admin Panel</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close admin panel">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="glass-card rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-2">Drag to Reorder Links</h3>
                    <p className="text-sm text-muted-foreground mb-4">Changes are simulated in this demo</p>

                    <div className="space-y-2">
                      {links.map((link) => (
                        <div
                          key={link.id}
                          draggable
                          onDragStart={() => handleDragStart(link.id)}
                          onDragOver={(e) => handleDragOver(e, link.id)}
                          onDragEnd={handleDragEnd}
                          className={`flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 cursor-move hover:border-primary transition-colors ${
                            draggedItem === link.id ? "opacity-50" : ""
                          }`}
                        >
                          <GripVertical className="w-5 h-5 text-muted-foreground" />
                          <span className="text-xl">{link.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium text-foreground text-sm">{link.title}</div>
                            <div className="text-xs text-muted-foreground">{link.type}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
                    <div className="space-y-2">
                      {links
                        .filter((link) => link.trackAnalytics)
                        .map((link) => (
                          <div key={link.id} className="flex justify-between items-center text-sm">
                            <span className="text-foreground">{link.title}</span>
                            <span className="text-muted-foreground">{link.clicks || 0} clicks</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
