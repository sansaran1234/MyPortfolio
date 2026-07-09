export const GALLERY_IDENTITY = {
  name: "Sansaran Phanchan",
  firstName: "SANSARAN",
  lastName: "PHANCHAN",
  role: "React / Next Frontend Developer",
  tagline: "Crafting premium digital experiences through code and design.",
  location: "Bangkok, Chiang Mai",
  email: "sansaran.p10@gmail.com",
  github: "github.com/sansaran1234",
  githubUrl: "https://github.com/sansaran1234",
};

export const GALLERY_HERO_STATS = [
  { value: "2059+", label: "GitHub Contributions" },
  { value: "124+", label: "Weekly Commits" },
];

export const MANIFESTO_LINES = [
  "I don't build interfaces.",
  "I create experiences.",
  "I engineer them to scale.",
  "Design and performance should coexist.",
];

export const ARTIST_PROFILE: { label: string; value: string }[] = [
  { label: "Name", value: "Sansaran Phanchan" },
  { label: "Nickname", value: "Ball" },
  { label: "Born", value: "28 July 1997" },
  { label: "Nationality", value: "Thai" },
  { label: "Location", value: "Bangkok, Chiang Mai" },
  { label: "Experience", value: "6+ Years" },
];

export const ARTIST_AVAILABILITY = ["Freelance", "Contract", "Full-Time"];

export const ARTIST_PHILOSOPHY = [
  "Discipline.",
  "Consistency.",
  "Long-term Growth.",
];

export interface CraftPanel {
  index: string;
  title: string;
  tools: string[];
}

export const CRAFT_PANELS: CraftPanel[] = [
  {
    index: "01",
    title: "Frontend",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Material UI",
    ],
  },
  {
    index: "02",
    title: "Backend",
    tools: ["Node.js", "Express.js", "PostgreSQL"],
  },
  {
    index: "03",
    title: "Tools",
    tools: ["Git", "GitHub", "Figma", "Jira", "Postman", "AI Assistants"],
  },
];

export interface Exhibition {
  index: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  company: string;
  experience: string;
}

export const EXHIBITIONS: Exhibition[] = [
  {
    index: "01",
    title: "E-Commerce Logistics Platform",
    description:
      "End-to-end ordering, shipping, and pickup logistics ecosystem with complex product management workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "WebSockets"],
    image: "/images/img-Ecom.webp",
    company: "NEVER SLEEP",
    experience: "2020 - 2023",
  },
  {
    index: "02",
    title: "Travel & Booking Systems",
    description:
      "High-performance flight booking platform supporting seat selection, passenger management, and real-time schedules.",
    tech: ["React", "TypeScript", "Material UI"],
    image: "/images/img-ARS.webp",
    company: "T.I.K. SYSTEMS, Gother",
    experience: "2023 - 2024, March - July 2026",
  },
  {
    index: "03",
    title: "ERP Job Tracking System",
    description:
      "Factory performance tracking platform with real-time packaging design capabilities including dieline and texture customization.",
    tech: ["Next.js", "Shadcn UI", "Tailwind CSS"],
    image: "/images/img-ERP.webp",
    company: "LUCA BLOCK",
    experience: "2026 - 2024",
  },
  {
    index: "04",
    title: "AI-Driven Development",
    description:
      "AI article generation platform and one-click AI chat applications designed to accelerate content production.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Material UI"],
    image: "/images/img-AI.webp",
    company: "LUCA BLOCK",
    experience: "2026 - 2024",
  },
  {
    index: "05",
    title: "Frontend Excellence",
    description:
      "Pixel-perfect responsive landing pages transformed from Figma into production-ready experiences.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    image: "/images/img-SEO.webp",
    company: "LUCA BLOCK",
    experience: "2026 - 2024",
  },
  {
    index: "06",
    title: "Knowledge Transfer",
    description:
      "Mentoring and knowledge sharing experience for interns and junior developers.",
    tech: ["React", "Next.js", "TypeScript", "Framer Motion"],
    image: "/images/img-intern.webp",
    company: "LUCA BLOCK",
    experience: "2026 - 2024",
  },
];

export const CAREER_METRICS = [
  { value: "2059+", label: "Contributions" },
  { value: "7", label: "Years Experience" },
  { value: "124+", label: "Weekly Commits" },
  { value: "100+", label: "Delivered Features" },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  field: string;
  meta: string;
}

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    degree: "Bachelor of Business Administration",
    institution: "Maejo University",
    field: "Business Information Systems",
    meta: "Graduated 2020",
  },
  {
    degree: "Secondary Education",
    institution: "Muang Mae Hong Son Municipal School",
    field: "Science & Mathematics",
    meta: "2016",
  },
];

export const PHILOSOPHY_STATEMENT =
  "True dedication is not merely the act of working hard for a moment, but the commitment to consistently show up and refine your craft even when the initial excitement fades and the path ahead becomes arduous. It is in the quiet, persistent pursuit of excellence that one discovers the true measure of their character and the eventual realization of their highest ambitions.";
