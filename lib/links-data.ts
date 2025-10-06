export interface LinkData {
  id: string
  type: "primary" | "secondary" | "mini" | "promo" | "donation"
  title: string
  subtitle?: string
  url: string
  icon?: string
  image?: string
  startDate?: Date
  endDate?: Date
  trackAnalytics?: boolean
  clicks?: number
}

export const linksData: LinkData[] = [
  {
    id: "1",
    type: "primary",
    title: "Join Community",
    subtitle: "Connect with 500+ student builders",
    url: "https://chat.whatsapp.com/LNpN1jiUyx7A0cAKTWke40",
    icon: "🚀",
    trackAnalytics: true,
    clicks: 0,
  },
  {
    id: "2",
    type: "promo",
    title: "🎁 Get Support for Your Event",
    subtitle: "Apply for swag, mentorship & monetary support",
    url: "https://forms.gle/B8ELnp7awGkZTwveA",
    image: "/hackathon-event-colorful-coding.jpg",
    trackAnalytics: true,
    clicks: 0,
  },
  {
    id: "3",
    type: "secondary",
    title: "Work with Us",
    subtitle: "Join the OSEN team and build together",
    url: "https://forms.gle/ThYa7iZahLSUfjNb7",
    icon: "💼",
    trackAnalytics: true,
    clicks: 0,
  },
  {
    id: "6",
    type: "mini",
    title: "GitHub",
    url: "https://github.com/Osenofficial",
    icon: "⚡",
    trackAnalytics: false,
  },
]

export const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/osenofficial/", icon: "instagram" },
  { name: "X", url: "https://x.com/osenofficial", icon: "x" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/osenofficial", icon: "linkedin" },
  { name: "WhatsApp", url: "https://chat.whatsapp.com/LNpN1jiUyx7A0cAKTWke40", icon: "whatsapp" },
  { name: "GitHub", url: "https://github.com/Osenofficial", icon: "github" },
]
