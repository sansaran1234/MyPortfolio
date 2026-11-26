"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./LearningTravelArtwork.module.css";

export const KnowledgeArtwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label="Mentoring illustration with two developers at a shared desk, a code lesson board, and notes about learning, building, and reviewing together."
    >
      <div className={styles.canvas} aria-hidden="true">
        <header className={styles.heading}>
          <span>EXPLAIN · PRACTICE · GROW</span>
          <strong>Good knowledge travels.</strong>
        </header>
        <div className={styles.halo} />
        <div className={styles.board}>
          <span className={styles.label}>TODAY’S CODE SESSION</span>
          <div className={styles.code}>
            <b>{"<LearnTogether>"}</b>
            {[0, 1, 2].map((line) => (
              <motion.i
                key={line}
                animate={{ scaleX: animate ? [0.65, 1, 0.65] : 1 }}
                transition={{
                  duration: 5,
                  delay: line * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            <b>{"</LearnTogether>"}</b>
          </div>
          <div className={styles.steps}>
            <span>01 EXPLAIN</span>
            <span>02 BUILD</span>
            <span>03 REVIEW</span>
          </div>
        </div>
        <motion.div
          className={styles.note}
          initial={false}
          style={{ rotate: 5 }}
          animate={{ y: animate ? [0, -4, 0] : 0 }}
          transition={{
            y: animate
              ? {
                  duration: 6,
                  times: [0, 0.5, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }
              : { duration: reducedMotion ? 0 : 0.3, ease: "easeOut" },
          }}
        >
          <span>Small steps.</span>
          <strong>
            Shared
            <br />
            progress.
          </strong>
          <b>
            ✓ ASK WHY
            <br />✓ TRY IT OUT
          </b>
        </motion.div>
        <div className={`${styles.person} ${styles.mentor}`}>
          <i className={styles.neck} />
          <i className={styles.head} />
          <b className={styles.body} />
          <span className={styles.arm} />
        </div>
        <div className={`${styles.person} ${styles.learner}`}>
          <i className={styles.neck} />
          <i className={styles.head} />
          <b className={styles.body} />
          <span className={styles.arm} />
        </div>
        <div className={styles.desk} />
        <div className={styles.laptop}>
          <span>{"{ }"}</span>
        </div>
        <motion.div
          className={styles.bubble}
          animate={{ scale: animate ? [1, 1.04, 1] : 1 }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Aha! <b>✦</b>
        </motion.div>
        <footer className={styles.footer}>
          <span>07 / KNOWLEDGE TRANSFER</span>
          <span>From one developer to the next ↗</span>
        </footer>
      </div>
    </div>
  );
};
