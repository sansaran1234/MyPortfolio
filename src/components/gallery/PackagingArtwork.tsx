"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./CommerceArtwork.module.css";

export const PackagingArtwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label="Custom packaging e-commerce illustration with a three-dimensional box preview, color choices, order specifications, delivery and pickup options, and production tracking."
    >
      <div className={styles.canvas} aria-hidden="true">
        <header className={styles.heading}>
          <span>CUSTOMIZE · PREVIEW · ORDER</span>
          <strong>A box made to be yours.</strong>
        </header>
        <div className={styles.halo} />
        <div className={styles.studio}>
          <div className={styles.toolbar}>
            <i />
            <i />
            <i />
            <span>3D PACKAGING STUDIO</span>
          </div>
          <div className={styles.grid}>
            <div className={styles.orbit}>
              <span>360°</span>
            </div>
            <motion.div
              className={styles.box}
              animate={{
                y: animate ? [0, -4, 0] : 0,
                rotate: animate ? [-3, 3, -3] : 0,
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={styles.side} />
              <div className={styles.front} />
              <div className={styles.top} />
            </motion.div>
          </div>
          <div className={styles.swatches}>
            <i />
            <i />
            <i />
            <span>MAKE IT YOURS</span>
          </div>
        </div>
        <div className={styles.checkout}>
          <span className={styles.label}>YOUR CUSTOM BOX</span>
          <h3>
            Designed by you.
            <br />
            Made to order.
          </h3>
          <div className={styles.spec}>CUSTOM PRINT · 100 PIECES</div>
          <div className={styles.options}>
            <span>✓ DELIVERY</span>
            <span>SELF-PICKUP</span>
          </div>
          <div className={styles.status}>
            <span>ORDER IN PRODUCTION</span>
            <motion.i
              animate={{ opacity: animate ? [0.4, 1, 0.4] : 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          <div className={styles.track}>
            <motion.i
              animate={{ scaleX: animate ? [0.4, 0.8, 0.4] : 0.8 }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
        <footer className={styles.footer}>
          <span>06 / CUSTOM PACKAGING</span>
          <span>From your imagination to your door ↗</span>
        </footer>
      </div>
    </div>
  );
};
