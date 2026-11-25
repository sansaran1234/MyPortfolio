"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./CommerceArtwork.module.css";

export const FrontendArtwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label="Responsive frontend illustration with matching desktop and mobile landing pages, design guides, and an animated design cursor."
    >
      <div className={styles.canvas} aria-hidden="true">
        <header className={styles.heading}>
          <span>DESIGN · BUILD · ADAPT</span>
          <strong>Good design, every screen.</strong>
        </header>
        <div className={styles.halo} />
        <div className={styles.guide} />
        <div className={styles.desktop}>
          <div className={styles.toolbar}>
            <i />
            <i />
            <i />
            <span>RESPONSIVE LANDING PAGE</span>
          </div>
          <div className={styles.page}>
            <div className={styles.nav}>
              <b />
              <i />
            </div>
            <div className={styles.hero}>
              <div className={styles.copy}>
                <strong>
                  Made for
                  <br />
                  the everyday.
                </strong>
                <i />
                <i />
                <b />
              </div>
              <div className={styles.landscape} />
            </div>
            <div className={styles.cards}>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <motion.div
          className={styles.phone}
          animate={{ y: animate ? [0, -4, 0] : 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <strong>
            Made for
            <br />
            the everyday.
          </strong>
          <div className={styles.landscape} />
          <div className={styles.cards}>
            <i />
            <i />
          </div>
        </motion.div>
        <motion.div
          className={styles.cursor}
          animate={{
            x: animate ? [0, -16, 0] : 0,
            y: animate ? [0, -8, 0] : 0,
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={styles.badge}>✓ PIXEL-PERFECT · DESKTOP TO MOBILE</div>
        <footer className={styles.footer}>
          <span>05 / FRONTEND EXCELLENCE</span>
          <span>From design file to living page ↗</span>
        </footer>
      </div>
    </div>
  );
};
