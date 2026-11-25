"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./ProductionArtwork.module.css";

const SCENES = {
  fulfillment: {
    eyebrow: "ORDER · PICK · FULFILL",
    title: "Every order, accounted for.",
    board: "RETAIL OPERATIONS",
    columns: ["ORDERS", "PICKING", "READY"],
    cards: ["Order list", "Pick batch", "Chiller / cart"],
    note: "ORDER DETAILS",
    lines: ["Out-of-hours", "Hotel channel", "Payment rules"],
    footer: "09 / ORDER MANAGEMENT",
    caption: "From order to fulfillment ↗",
  },
  promotion: {
    eyebrow: "SELECT · SUBSTITUTE · CONFIRM",
    title: "The right alternative.",
    board: "SUBSTITUTION WORKFLOW",
    columns: ["SELECT", "REVIEW", "CONFIRM"],
    cards: ["Alternative", "Quantity", "Recalculate"],
    note: "PROMOTIONS",
    lines: ["Free items", "Delivery discount", "Eligibility"],
    footer: "10 / SUBSTITUTION & PROMOTIONS",
    caption: "Clear choices, consistent rules ↗",
  },
  receipt: {
    eyebrow: "REQUEST · VERIFY · PRINT",
    title: "Details that add up.",
    board: "RECEIPT WORKFLOW",
    columns: ["REQUEST", "CHECK", "PRINT"],
    cards: ["Order details", "Store settings", "Receipt PDF"],
    note: "ORDER DOCUMENT",
    lines: ["Payment details", "Installment info", "Print summary"],
    footer: "11 / RECEIPTS & BILLING",
    caption: "From request to document ↗",
  },
  quality: {
    eyebrow: "TEST · REVIEW · REFINE",
    title: "Confidence in every change.",
    board: "QUALITY WORKFLOW",
    columns: ["TEST", "REVIEW", "VERIFY"],
    cards: ["Business rules", "Shared logic", "QA feedback"],
    note: "REVIEW NOTES",
    lines: ["Unit coverage", "Less duplication", "Feature demos"],
    footer: "12 / TESTING & CODE QUALITY",
    caption: "Small checks, stronger foundations ↗",
  },
} as const;

export const RetailArtwork = ({ scene }: { scene: keyof typeof SCENES }) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;
  const content = SCENES[scene];

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label={`${content.board}: ${content.cards.join(", ")}. ${content.lines.join(", ")}.`}
    >
      <div className={styles.canvas} aria-hidden="true">
        <header className={styles.heading}>
          <span>{content.eyebrow}</span>
          <strong>{content.title}</strong>
        </header>
        <div className={styles.halo} />
        <div className={styles.window}>
          <div className={styles.toolbar}>
            <i />
            <i />
            <i />
            <span>{content.board}</span>
          </div>
          <div className={styles.board}>
            {content.columns.map((column, index) => (
              <div key={column} className={styles.column}>
                <span>{column}</span>
                <motion.div
                  className={styles.job}
                  animate={{ y: animate ? [0, -3, 0] : 0 }}
                  transition={{
                    duration: 4,
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {content.cards[index]}
                  <b />
                  <b />
                  <small>{index === 2 ? "✓ CHECKED" : "→"}</small>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className={styles.editor}
          animate={{ y: animate ? [0, -4, 0] : 0, rotate: 4 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className={styles.label}>{content.note}</span>
          <div className={styles.retailChecklist}>
            {content.lines.map((line) => (
              <div key={line}>
                <span>✓</span>
                {line}
              </div>
            ))}
          </div>
        </motion.div>
        <footer className={styles.footer}>
          <span>{content.footer}</span>
          <span>{content.caption}</span>
        </footer>
      </div>
    </div>
  );
};
