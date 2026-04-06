import type { LucideIcon } from "lucide-react";
import {
  CameraIcon,
  ImagePlusIcon,
  PaletteIcon,
  SparklesIcon,
  Wand2Icon,
  ZapIcon,
} from "lucide-react";

/** MIME types accepted for user source images (upload + generation API). */
export const ACCEPTED_SOURCE_IMAGE_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
]);

export const HIGHLIGHTS: { label: string; icon: LucideIcon }[] = [
  { label: "AI Magic", icon: Wand2Icon },
  { label: "Art Styles", icon: SparklesIcon },
  { label: "Instant", icon: ZapIcon },
  { label: "Creative", icon: CameraIcon },
];

export const GALLERY_STATS = [
  { value: "5K+", label: "Images created" },
  { value: "1K+", label: "Happy users" },
  { value: "4.8/5", label: "User rating" },
] as const;

export const GALLERY_IMAGES = [
  { src: "/gallery-1.png", alt: "Stylized rainy character portrait" },
  { src: "/gallery-2.png", alt: "Stylized family gardening scene" },
  { src: "/gallery-3.png", alt: "Stylized fantasy mushroom scene" },
  { src: "/gallery-4.png", alt: "Stylized coffee making scene" },
] as const;

export const HERO_VIDEO_SRC =
  "https://ik.imagekit.io/irkgvnx0ei/hero.mp4?updatedAt=1774983897888";

export const SHOWCASE_BG_VIDEO_SRC = "https://ik.imagekit.io/irkgvnx0ei/showcase.mp4";

export const CENTER_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "#pricing" },
  { label: "Styles", href: "#styles", chevron: true },
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "/privacy" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Styles", href: "#styles" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Craft", href: "/craft" },
] as const;

export const FEATURED_STYLES = [
  "Storybook 3D",
  "Anime Cel",
  "Clay Render",
  "Pixart",
] as const;

export const WORKFLOW_STYLE_PREVIEW = [
  FEATURED_STYLES[0],
  FEATURED_STYLES[1],
  FEATURED_STYLES[2],
] as const;

export type MarketingTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: MarketingTestimonial[] = [
  {
    text: "This workflow completely changed how quickly we can turn original photos into polished campaign-ready visuals.",
    image:
      "https://plus.unsplash.com/premium_photo-1683140683821-a3a418670cc0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amit Singh",
    role: "Operations Manager",
  },
  {
    text: "The interface is clear, the outputs are consistent, and the rollout across our team was surprisingly effortless.",
    image:
      "https://plus.unsplash.com/premium_photo-1691030256264-59cdf9414ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FyYW4lMjB2ZXJtYXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Karan Verma",
    role: "IT Manager",
  },
  {
    text: "Support has been thoughtful from the start, and the product already feels much more refined than most creative AI tools.",
    image:
      "https://plus.unsplash.com/premium_photo-1734603746591-cdac6d02a83e?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Utkarsh Sharma",
    role: "Customer Support Lead",
  },
  {
    text: "It preserves the essence of our source images while still giving every result a more elevated and art-directed finish.",
    image:
      "https://images.unsplash.com/photo-1634065611612-e2260c49b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVoYXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Neha Patel",
    role: "CEO",
  },
  {
    text: "We saw immediate time savings once it became part of our content pipeline, especially for rapid visual explorations.",
    image:
      "https://images.unsplash.com/photo-1659632777935-d0fb7a480e91?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rohit Kumar",
    role: "Project Manager",
  },
  {
    text: "The outputs are premium enough for client reviews, which has helped us move from concept to approval much faster.",
    image:
      "https://images.unsplash.com/photo-1747264465369-cf92a7b3ae54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFuamFsaXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Anjali Singh",
    role: "Business Analyst",
  },
  {
    text: "It gave our team a cleaner way to experiment with multiple directions without compromising subject fidelity.",
    image:
      "https://images.unsplash.com/photo-1702707350409-5d9ff72a2e4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFiaGlzaGVrfGVufDB8fDB8fHww",
    name: "Vikram Desai",
    role: "Marketing Director",
  },
  {
    text: "The experience feels premium end to end, and our customers noticed the jump in quality immediately.",
    image:
      "https://images.unsplash.com/photo-1653379672758-79f4160a5be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByaXlhfGVufDB8fDB8fHww",
    name: "Priya Nair",
    role: "Sales Manager",
  },
  {
    text: "The product helped us improve output quality and consistency while still giving the team room to move quickly.",
    image:
      "https://images.unsplash.com/photo-1630827224569-d88bf1602633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGFyaXNoJTIwSVR8ZW58MHx8MHx8fDA%3D",
    name: "Harish Gupta",
    role: "E-commerce Manager",
  },
];

export const TESTIMONIAL_COLUMNS = [
  TESTIMONIALS.slice(0, 3),
  TESTIMONIALS.slice(3, 6),
  TESTIMONIALS.slice(6, 9),
];

export type HowItWorksStep = {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "Step 1",
    title: "Upload your image",
    body: "Start with a portrait, pet photo, or scene you already love. Clear subjects and good lighting work best.",
    icon: ImagePlusIcon,
  },
  {
    step: "Step 2",
    title: "Choose a style",
    body: "Pick a curated look like Storybook 3D, Anime Cel, or Clay Render without writing prompts or adjusting settings.",
    icon: PaletteIcon,
  },
  {
    step: "Step 3",
    title: "Generate the transformation",
    body: "VisionCraft restyles the image while protecting composition, identity cues, and the small details that matter.",
    icon: SparklesIcon,
    featured: true,
  },
];



