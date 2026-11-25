"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./ProductionArtwork.module.css";

export const ErpArtwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label="Factory ERP illustration showing a production job board, performance progress, and packaging design with a box preview, color swatches, and a dieline."
    >
      <div className={styles.canvas} aria-hidden="true">
        <header className={styles.heading}>
          <span>PLAN · PRODUCE · TRACK</span>
          <strong>Every detail, in production.</strong>
        </header>
        <div className={styles.halo} />
        <div className={styles.window}>
          <div className={styles.toolbar}>
            <i />
            <i />
            <i />
            <span>PRODUCTION BOARD</span>
          </div>
          <div className={styles.board}>
            <div className={styles.column}>
              <span>QUEUED</span>
              <div className={styles.job}>
                JOB 024
                <b />
                <b />
              </div>
              <div className={styles.job}>
                JOB 025
                <b />
              </div>
            </div>
            <div className={styles.column}>
              <span>IN PROGRESS</span>
              <motion.div
                className={styles.job}
                animate={{ y: animate ? [0, -3, 0] : 0 }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                JOB 023
                <b />
                <small>PACKAGING</small>
              </motion.div>
            </div>
            <div className={styles.column}>
              <span>COMPLETE</span>
              <div className={styles.job}>
                JOB 022
                <b />
                <small>✓ QC PASSED</small>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.editor}>
          <span className={styles.label}>PACKAGE STUDIO</span>
          <motion.div
            className={styles.box}
            animate={{
              y: animate ? [0, -4, 0] : 0,
              rotate: animate ? [-3, 3, -3] : 0,
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.boxSide} />
            <div className={styles.boxFront} />
            <div className={styles.boxTop} />
          </motion.div>
          <div className={styles.swatches}>
            <i />
            <i />
            <i />
          </div>
          <div className={styles.dieline} />
        </div>
        <div className={styles.progress}>
          PRODUCTION PERFORMANCE <span>LIVE</span>
          <div>
            <motion.i
              animate={{ scaleX: animate ? [0.45, 0.85, 0.45] : 0.85 }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
        <footer className={styles.footer}>
          <span>03 / ERP & PACKAGING</span>
          <span>From workflow to finished work ↗</span>
        </footer>
      </div>
    </div>
  );
};
