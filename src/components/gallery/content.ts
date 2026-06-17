export const GALLERY_IDENTITY = {
  name: "Sansaran Phanchan",
  firstName: "SANSARAN",
  lastName: "PHANCHAN",
  role: "React / Next Frontend Developer",
  tagline: "Crafting premium digital experiences through code and design.",
  location: "Chiang Mai, Thailand",
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
  { label: "Location", value: "Chiang Mai, Thailand" },
  { label: "Experience", value: "7 Years" },
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
    title: "Frontend Excellence",
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
    title: "Backend Foundations",
    tools: ["Node.js", "Express.js", "PostgreSQL"],
  },
  {
    index: "03",
    title: "Creative Workflow",
    tools: ["Git", "GitHub", "Figma", "Jira", "Postman", "AI Assistants"],
  },
];

export interface Exhibition {
  index: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export const EXHIBITIONS: Exhibition[] = [
  {
    index: "01",
    title: "ERP Job Tracking System",
    description:
      "Factory performance tracking platform with real-time packaging design capabilities including dieline and texture customization.",
    tech: ["Next.js", "Shadcn UI", "Tailwind CSS"],
    image: "/images/img-ERP.webp",
  },
  {
    index: "02",
    title: "E-Commerce Logistics Platform",
    description:
      "End-to-end ordering, shipping, and pickup logistics ecosystem with complex product management workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "WebSockets"],
    image: "/images/img-Ecom.webp",
  },
  {
    index: "03",
    title: "AI-Driven Development",
    description:
      "AI article generation platform and one-click AI chat applications designed to accelerate content production.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Material UI"],
    image: "/images/img-AI.webp",
  },
  {
    index: "04",
    title: "Frontend Excellence",
    description:
      "Pixel-perfect responsive landing pages transformed from Figma into production-ready experiences.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    image: "/images/img-SEO.webp",
  },
  {
    index: "05",
    title: "Travel & Booking Systems",
    description:
      "High-performance flight booking platform supporting seat selection, passenger management, and real-time schedules.",
    tech: ["React", "TypeScript", "Material UI"],
    image: "/images/img-ARS.webp",
  },
  {
    index: "06",
    title: "Knowledge Transfer",
    description:
      "Mentoring and knowledge sharing experience for interns and junior developers.",
    tech: ["React", "Next.js", "TypeScript", "Framer Motion"],
    image: "/images/img-intern.webp",
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

export const PHILOSOPHY_QUOTES = [
  "Performance is invisible.",
  "Design is remembered.",
  "Great products require both.",
];
