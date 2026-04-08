"use client";

import type { MouseEvent } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { navbarSoftReveal } from "../../animations/common.animations";
import { Button } from "../ui/Button";

export const Navbar = () => {
  const handleSectionNavigate = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-4"
      variants={navbarSoftReveal.container}
      initial="hidden"
      animate="visible"
    >
      <motion.nav
        className="glass flex w-full max-w-7xl items-center justify-between rounded-2xl border border-outline-variant/10 px-6 py-2"
        variants={navbarSoftReveal.item}
      >
        <motion.div className="flex items-center gap-4" variants={navbarSoftReveal.item}>
          <Link href="/" className="inline-flex items-center">
            <Image src="/images/logo.webp" alt="Sansaran logo" width={120} height={34} className="h-8 w-auto" />
          </Link>
        </motion.div>
        
        <div className="flex items-center gap-8">
          <motion.div
            className="hidden md:flex items-center gap-6 font-technical text-[10px] uppercase font-bold tracking-widest text-outline"
            variants={navbarSoftReveal.item}
          >
            <Link href="#personal-information" onClick={(event) => handleSectionNavigate(event, "personal-information")} className="hover:text-primary transition-colors">/Personal</Link>
            <Link href="#education" onClick={(event) => handleSectionNavigate(event, "education")} className="hover:text-primary transition-colors">/Education</Link>
            <Link href="#stack" onClick={(event) => handleSectionNavigate(event, "stack")} className="hover:text-primary transition-colors">/Stack</Link>
            <Link href="#projects" onClick={(event) => handleSectionNavigate(event, "projects")} className="hover:text-primary transition-colors">/Projects</Link>
            <Link href="#contact" onClick={(event) => handleSectionNavigate(event, "contact")} className="hover:text-primary transition-colors">/Contact</Link>
          </motion.div>
          
          <motion.div variants={navbarSoftReveal.item}>
            <Button variant="primary" size="sm" className="hidden sm:flex">
              Initiate Project
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </motion.header>
  );
};
