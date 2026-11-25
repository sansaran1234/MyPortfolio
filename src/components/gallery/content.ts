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

const BIRTH_DATE = {
  year: 1997,
  month: 6,
  day: 28,
} as const;

const CAREER_START_YEAR = 2020;

const calculateAge = (
  birthDate: typeof BIRTH_DATE,
  today = new Date(),
) => {
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.month ||
    (today.getMonth() === birthDate.month && today.getDate() >= birthDate.day);

  return today.getFullYear() - birthDate.year - (hasHadBirthdayThisYear ? 0 : 1);
};

const calculateYearsOfExperience = (
  startYear: number,
  today = new Date(),
) => today.getFullYear() - startYear;

const age = calculateAge(BIRTH_DATE);
const yearsOfExperience = calculateYearsOfExperience(CAREER_START_YEAR);

export const ARTIST_PROFILE: { label: string; value: string }[] = [
  { label: "Name", value: "Sansaran Phanchan" },
  { label: "Nickname", value: "Ball" },
  { label: "Born", value: `28 July 1997 (${age} Years Old)` },
  { label: "Nationality", value: "Thai" },
  { label: "Location", value: "Bangkok, Chiang Mai" },
  { label: "Experience", value: `${yearsOfExperience}+ Years` },
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

export enum Company {
  NEVER_SLEEP = "NEVER SLEEP",
  TIK_SYSTEMS = "T.I.K. SYSTEMS",
  LUCA_BLOCK = "LUCA BLOCK",
  GOTHER_SEO = "Search Engine Optimization (Gother)",
}

export type Exhibition = {
  index: string;
  title: string;
  description: string;
  tech: string[];
  company: Company;
  experience: string;
} & (
  | { artwork: "logistics"; image?: never }
  | { artwork: "travel"; image?: never }
  | { artwork: "erp"; image?: never }
  | { artwork: "ai"; image?: never }
  | { artwork: "frontend"; image?: never }
  | { artwork: "packaging"; image?: never }
  | { artwork: "knowledge"; image?: never }
  | { artwork: "gother"; image?: never }
  | { artwork?: never; image: string }
);

export const EXHIBITIONS: Exhibition[] = [
  {
    index: "01",
    title: "E-Commerce Logistics Platform",
    description:
      "End-to-end ordering, shipping, and pickup logistics ecosystem with complex product management workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "WebSockets"],
    artwork: "logistics",
    company: Company.NEVER_SLEEP,
    experience: "2020 - 2023",
  },
  {
    index: "02",
    title: "Travel & Booking Systems",
    description:
      "High-performance flight booking platform supporting seat selection, passenger management, and real-time schedules.",
    tech: ["React", "Next.js", "TypeScript", "Framer Motion", "Material UI"],
    artwork: "travel",
    company: Company.TIK_SYSTEMS,
    experience: "2023 - 2024",
  },
  {
    index: "03",
    title: "ERP Job Tracking System",
    description:
      "Factory performance tracking platform with real-time packaging design capabilities including dieline and texture customization.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Shadcn UI", "Tailwind CSS"],
    artwork: "erp",
    company: Company.LUCA_BLOCK,
    experience: "2024 - 2026",
  },
  {
    index: "04",
    title: "AI-Driven Development",
    description:
      "AI article generation platform and one-click AI chat applications designed to accelerate content production.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Material UI"],
    artwork: "ai",
    company: Company.LUCA_BLOCK,
    experience: "2024 - 2026",
  },
  {
    index: "05",
    title: "Frontend Excellence",
    description:
      "Pixel-perfect responsive landing pages transformed from Figma into production-ready experiences.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    artwork: "frontend",
    company: Company.LUCA_BLOCK,
    experience: "2024 - 2026",
  },
  {
    index: "06",
    title: "Custom 3D Packaging \nE-Commerce",
    description:
      "E-commerce platform for selling and designing custom packaging boxes with interactive 3D previews, order status tracking, and flexible delivery or self-pickup options.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    artwork: "packaging",
    company: Company.LUCA_BLOCK,
    experience: "2024 - 2026",
  },
  {
    index: "07",
    title: "Knowledge Transfer",
    description:
      "Mentoring and knowledge sharing experience for interns and junior developers.",
    tech: ["React", "Next.js", "TypeScript", "Framer Motion"],
    artwork: "knowledge",
    company: Company.LUCA_BLOCK,
    experience: "2024 - 2026",
  },
  {
    index: "08",
    title: "Gother Flight Platform",
    description:
      "React and Next.js flight booking experience - responsive across web and mobile, with flight detail flows, campaign carousels, pre-booking validation, and measurable LCP gains through bundle optimization.",
    tech: ["React", "Next.js", "TypeScript", "Framer Motion", "Shadcn UI", "Tailwind CSS"],
    artwork: "gother",
    company: Company.GOTHER_SEO,
    experience: "March - July 2026 (Contract)",
  },
];

export const CAREER_METRICS = [
  { value: "2059+", label: "Contributions" },
  { value: "6+", label: "Years Experience" },
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
