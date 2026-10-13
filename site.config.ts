import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Nail Couture",
  tagline: "Shellac, Bio Gel, Gel X, and nail art in Brampton. Where your nails meet luxury.",
  category: "Nail salon",
  schemaType: "BeautySalon",
  area: "Brampton, ON",
  siteUrl: "https://nail-couture-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#C48B9F" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton nail studio",
    headline: "Where your nails meet luxury",
    subhead: "Shellac, Bio Gel, Gel X, cat eye, and custom nail art. Book your appointment by Instagram DM.",
    images: [
      { src: "/images/post-3.jpg", alt: "Festive blue French tip nail art" },
      { src: "/images/post-2.jpg", alt: "Nail art set by Nail Couture" },
      { src: "/images/post-4.jpg", alt: "Luxury manicure detail" },
    ],
    secondaryCta: { label: "See services", href: "#menu" },
  },

  highlights: [
    "Shellac, Bio Gel, and Gel X",
    "Nail art and cat eye",
    "Torbram and Bovaird, Brampton",
    "Book by Instagram DM",
  ],

  about: {
    title: "Luxury nails, made for you",
    body: [
      "Nail Couture is a Brampton nail studio offering Shellac, Bio Gel, Gel X, cat eye looks, and custom nail art. Whether you are getting ready for a festival or everyday polish, we help your nails look finished and festive.",
      "Bookings are open near Torbram and Bovaird. Send a DM to reserve your appointment. Bring a friend and ask about our current festive offers.",
    ],
    image: { src: "/images/post-7.jpg", alt: "Nail art moment by Nail Couture" },
  },

  menu: {
    label: "Services",
    title: "What we offer",
    intro: "Popular services. Message us for pricing on your look and length.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your look and length.",
    groups: [
      {
        title: "Nails",
        items: [
          { name: "Shellac", description: "Long lasting colour and shine." },
          { name: "Bio Gel", description: "Natural looking strength and overlay." },
          { name: "Gel X", description: "Extensions for length and shape." },
          { name: "Nail art", description: "Custom designs for everyday and festive looks." },
          { name: "Cat eye", description: "Magnetic cat eye finish." },
        ],
      },
    ],
    footnote: "Ask about festive deals and bring a friend offers when you book.",
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "Blue French tip festive nails", caption: "Festive French tips", href: "https://www.instagram.com/p/DeZsuCTRbl7/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "Bookings open nail set", caption: "Bookings open", href: "https://www.instagram.com/p/DeaJe_9RYmS/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1350, alt: "Festive discount manicure", caption: "Festive ready", href: "https://www.instagram.com/p/DeYIYbKEW43/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1350, alt: "Nail art design close up", caption: "Nail art moment", href: "https://www.instagram.com/p/DeNtuKmxRNb/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1350, alt: "Bring a friend promo set", caption: "Bring a friend", href: "https://www.instagram.com/p/DeA7mNHx-o-/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1350, alt: "Client nail session", caption: "In the chair", href: "https://www.instagram.com/p/DeQL-yjRvEj/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1350, alt: "Festival nails promo", caption: "Festival ready", href: "https://www.instagram.com/p/DeakgodxlIX/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "nail.couture13",
    embeds: [
      "https://www.instagram.com/p/DeZsuCTRbl7/",
      "https://www.instagram.com/p/DeNtuKmxRNb/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book in a quick DM",
    intro: "Appointments are booked through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Nail Couture! I would like to book an appointment.\nPreferred date:\nService (Shellac, Bio Gel, Gel X, nail art, cat eye):\nDesign idea:\n",
    links: [],
    note: "Located near Torbram and Bovaird in Brampton. Ask about festive deals when you DM.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM on Instagram with your preferred date, service, and design idea. We will confirm your appointment in chat." },
    { q: "Where are you located?", a: "We are in Brampton near Torbram and Bovaird." },
    { q: "What services do you offer?", a: "Shellac, Bio Gel, Gel X, nail art, and cat eye looks." },
    { q: "Do you have any deals?", a: "Festive deals run seasonally. Bring a friend for 10 percent off Shellac, Bio Gel, and Gel X when that offer is active. Ask in your DM." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario (Torbram and Bovaird)",
    socials: [],
  },

  seo: {
    title: "Nail Couture | Shellac, Bio Gel and Gel X in Brampton",
    description: "Nail Couture in Brampton offers Shellac, Bio Gel, Gel X, cat eye, and nail art near Torbram and Bovaird. Book by Instagram DM.",
    keywords: ["Brampton nail tech", "Gel X Brampton", "Shellac nails Brampton", "nail art Torbram Bovaird"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
