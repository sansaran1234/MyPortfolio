"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { navbarSoftReveal } from "../../animations/common.animations";
import { Button } from "../ui/Button";

export const Navbar = () => {
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
          <Link href="/" className="font-display font-black text-xl tracking-tighter text-primary">
            MyPortfolio
          </Link>
        </motion.div>
        
        <div className="flex items-center gap-8">
          <motion.div
            className="hidden md:flex items-center gap-6 font-technical text-[10px] uppercase font-bold tracking-widest text-outline"
            variants={navbarSoftReveal.item}
          >
            <Link href="#projects" className="hover:text-primary transition-colors">/Projects</Link>
            <Link href="#stack" className="hover:text-primary transition-colors">/Stack</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">/Contact</Link>
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
