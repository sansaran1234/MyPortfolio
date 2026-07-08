"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GALLERY_IDENTITY } from "./content";

const NAV_ITEMS = [
  { id: "personal-information", label: "Personal" },
  { id: "education", label: "Education" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const GalleryNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className="fixed inset-x-0 top-0 z-[80] mix-blend-difference"
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-12 text-white max-[577px]:hidden">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-cursor="hover"
          className="font-gallery-display text-sm uppercase tracking-[0.3em]"
        >
          SP — Studio
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              data-cursor="hover"
              className="font-gallery-body text-xs uppercase tracking-[0.2em] opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              /{item.label}
            </button>
          ))}
        </div>

        <span
          className={`font-gallery-body text-[10px] uppercase tracking-[0.25em] transition-opacity duration-500 ${
            scrolled ? "opacity-60" : "opacity-100"
          }`}
        >
          {GALLERY_IDENTITY.location}
        </span>
      </nav>
    </motion.header>
  );
};
