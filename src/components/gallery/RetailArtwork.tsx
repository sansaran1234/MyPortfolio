"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./ProductionArtwork.module.css";
import art from "./RetailScenes.module.css";

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
        {scene === "fulfillment" && (
          <>
            <div className={art.floor} />
            <div className={art.rack}>
              <span>PICK BATCH · A</span>
              <div>
                {Array.from({ length: 6 }, (_, i) => (
                  <i key={i} />
                ))}
              </div>
            </div>
            <div className={art.chiller}>
              <span>CHILLER · B</span>
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className={art.picklist}>
              <b>PICK LIST</b>
              <span>✓ Grocery</span>
              <span>✓ Chilled items</span>
              <span>→ Cart location</span>
            </div>
            <motion.div
              className={art.cart}
              animate={{ x: animate ? [-8, 14, -8] : 0 }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={art.cartShadow} />
              <div className={art.cartFrame} />
              <div className={art.cartHandle} />
              <div className={art.goods}>
                <i className={art.groceryBag} />
                <i className={art.groceryBottle} />
                <i className={art.groceryCarton} />
              </div>
              <div className={art.basket} />
              <b />
              <b />
            </motion.div>
            <span className={art.sceneCaption}>
              ORDER → PICK BATCH → READY FOR DELIVERY
            </span>
          </>
        )}
        {scene === "promotion" && (
          <>
            <div className={art.original}>
              <span>ORIGINAL ITEM</span>
              <div className={art.bottle} />
              <b>Unavailable</b>
            </div>
            <motion.div
              className={art.swap}
              animate={{ x: animate ? [-3, 3, -3] : 0 }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⇄
            </motion.div>
            <div className={art.alternative}>
              <span>SUBSTITUTE ITEM</span>
              <div className={art.package} />
              <b>✓ Alternative selected</b>
              <div className={art.quantity}>
                − <strong>1</strong> +
              </div>
            </div>
            <motion.div
              className={art.coupon}
              initial={false}
              style={{ rotate: -4 }}
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
              <strong>%</strong>
              <div>
                <b>PROMOTION CHECK</b>
                <span>Free items · Delivery discount</span>
                <small>Eligibility before confirmation</small>
              </div>
            </motion.div>
          </>
        )}
        {scene === "receipt" && (
          <>
            <div className={art.receiptHalo} />
            <div className={art.printer}>
              <span>ORDER DOCUMENTS</span>
              <i />
              <div />
            </div>
            <motion.div
              className={art.receipt}
              animate={{ y: animate ? [-4, 4, -4] : 0 }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <b>RECEIPT</b>
              <small>ORDER SUMMARY</small>
              <div className={art.receiptLines}>
                {[0, 1, 2].map((i) => (
                  <span key={i}>
                    <i />
                    <i />
                  </span>
                ))}
              </div>
              <strong>PAYMENT DETAILS</strong>
              <span>Credit-card installment</span>
              <div className={art.barcode} />
            </motion.div>
            <div className={art.paymentCard}>
              <i />
              <span>PAYMENT</span>
              <b>•••• &nbsp; •••• &nbsp; ••••</b>
              <small>INSTALLMENT PLAN</small>
            </div>
            <div className={art.receiptStatus}>
              ✓ REQUEST &nbsp; → &nbsp; VERIFY &nbsp; → &nbsp; PRINT
            </div>
          </>
        )}
        {scene === "quality" && (
          <>
            <div className={art.codeWindow}>
              <div className={art.codeHeader}>
                <i />
                <i />
                <i />
                <span>REVIEW / REFACTOR</span>
              </div>
              <div className={art.codeLines}>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i}>
                    <small>{i + 1}</small>
                    <motion.i
                      animate={{ scaleX: animate ? [0.7, 1, 0.7] : 1 }}
                      transition={{
                        duration: 5,
                        delay: i * 0.15,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className={art.codeFooter}>SHARED LOGIC · CLEARER RULES</div>
            </div>
            <div className={art.testReport}>
              <b>UNIT TESTS</b>
              {["Order rules", "UI conditions", "Receipt flow"].map(
                (label, i) => (
                  <div key={label}>
                    <motion.span
                      animate={{ opacity: animate ? [0.5, 1, 0.5] : 1 }}
                      transition={{
                        duration: 3,
                        delay: i * 0.4,
                        repeat: Infinity,
                      }}
                    >
                      ✓
                    </motion.span>
                    {label}
                  </div>
                ),
              )}
              <small>VERIFY · REVIEW · REFINE</small>
            </div>
            <div className={art.review}>
              <span>✓</span>
              <div>
                <b>QA & CODE REVIEW</b>
                <small>Feedback into better code</small>
              </div>
            </div>
          </>
        )}
        <footer className={styles.footer}>
          <span>{content.footer}</span>
          <span>{content.caption}</span>
        </footer>
      </div>
    </div>
  );
};
