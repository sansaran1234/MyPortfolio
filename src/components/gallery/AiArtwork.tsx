"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./ProductionArtwork.module.css";

export const AiArtwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label="AI content platform illustration with a writing prompt, generated article, and one-click AI chat with animated typing indicators."
    >
      <div className={styles.canvas} aria-hidden="true">
        <header className={styles.heading}>
          <span>PROMPT · CREATE · CONVERSE</span>
          <strong>A small spark. A new story.</strong>
        </header>
        <div className={`${styles.halo} ${styles.aiHalo}`} />
        <div className={styles.prompt}>
          <span className={styles.label}>YOUR NEXT IDEA</span>
          <p>Turn a thought into a story…</p>
          <span className={styles.generate}>✦ GENERATE ARTICLE</span>
        </div>
        <motion.div
          className={styles.spark}
          animate={{
            scale: animate ? [0.9, 1.1, 0.9] : 1,
            rotate: animate ? [-8, 8, -8] : 0,
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={styles.document}>
          <span className={styles.label}>AI DRAFT</span>
          <h3>
            Ideas taking
            <br />
            shape.
          </h3>
          <div className={styles.articleVisual} />
          {[0, 1, 2, 3].map((line) => (
            <motion.i
              key={line}
              className={styles.textLine}
              animate={{ scaleX: animate ? [0.25, 1, 1, 0.25] : 1 }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: line * 0.25,
                times: [0, 0.35, 0.85, 1],
                ease: "easeInOut",
              }}
            />
          ))}
          <span className={styles.ready}>✓ READY TO REFINE</span>
        </div>
        <div className={styles.chat}>
          <span className={styles.label}>ONE-CLICK AI CHAT</span>
          <div className={styles.bubble}>Make it a little more inspiring.</div>
          <div className={styles.reply}>
            <span>✦</span>
            <span>Let’s explore</span>
            {[0, 1, 2].map((dot) => (
              <motion.i
                key={dot}
                animate={{
                  y: animate ? [0, -3, 0] : 0,
                  opacity: animate ? [0.4, 1, 0.4] : 1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
              />
            ))}
          </div>
        </div>
        <footer className={styles.footer}>
          <span>04 / AI-DRIVEN CREATION</span>
          <span>From first thought to first draft ↗</span>
        </footer>
      </div>
    </div>
  );
};
