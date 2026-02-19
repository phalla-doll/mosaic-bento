export type GridSize = "small" | "wide" | "tall" | "big";

export interface BentoItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  imageUrl?: string;
  backgroundColor?: string;
  size: GridSize;
  cta?: string;
  date?: string;
  darkText?: boolean;
}

export type Category =
  | "All"
  | "Design"
  | "Development"
  | "Marketing"
  | "Productivity"
  | "More";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}
