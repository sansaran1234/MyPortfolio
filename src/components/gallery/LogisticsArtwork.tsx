"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./LogisticsArtwork.module.css";
import { ArtworkCloud, ArtworkSun } from "./ArtworkSky";

export const LogisticsArtwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label="Illustrated e-commerce workflow: online orders, warehouse packing, and a delivery truck carrying parcels to customers."
    >
      <div aria-hidden="true" className={styles.canvas}>
        <div className={styles.heading}>
          <span>ORDER · PACK · DELIVER</span>
          <strong>A little world of logistics.</strong>
        </div>
        <div className={styles.sun}>
          <ArtworkSun />
        </div>
        <div className={styles.cloud}>
          <ArtworkCloud />
        </div>
        <div className={styles.hill} />
        <div className={styles.route} />

        <motion.div
          className={styles.shop}
          animate={{ y: animate ? [0, -4, 0] : 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={styles.browser}>
            <i />
            <i />
            <i />
          </div>
          <div className={styles.products}>
            <b />
            <b />
            <b />
          </div>
          <div className={styles.order}>
            ORDER RECEIVED <span>✓</span>
          </div>
        </motion.div>

        <div className={styles.warehouse}>
          <div className={styles.roof} />
          <div className={styles.sign}>FULFILLMENT</div>
          <div className={styles.shelves}>
            {[0, 1, 2, 3, 4, 5].map((box) => (
              <i key={box} />
            ))}
          </div>
          <div className={styles.door}>
            <span />
          </div>
        </div>
        <div className={styles.belt} />
        <motion.div
          className={styles.parcel}
          animate={{
            x: animate ? [0, 32, 32, 0] : 0,
            opacity: animate ? [0, 1, 0, 0] : 1,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.65, 0.85, 1],
          }}
        />

        <div className={styles.house}>
          <div />
          <span />
          <i />
        </div>
        <div className={styles.tree}>
          <i />
          <b />
        </div>
        <motion.div
          className={styles.truck}
          animate={{ x: animate ? [0, 18, 0] : 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={styles.truckShadow} />
          <div className={styles.chassis} />
          <div className={styles.cargo}>
            <span>→</span>
          </div>
          <div className={styles.cab}>
            <i className={styles.window} />
            <i className={styles.doorHandle} />
            <i className={styles.headlight} />
          </div>
          <div className={styles.mirror} />
          <div className={styles.bumper} />
          <b className={styles.wheelBack} />
          <b className={styles.wheelFront} />
        </motion.div>
        <motion.div
          className={styles.delivered}
          animate={{ scale: animate ? [1, 1.07, 1] : 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✓
        </motion.div>
        <div className={styles.footer}>
          <span>01 / CONNECTED COMMERCE</span>
          <span>From cart to doorstep ↗</span>
        </div>
      </div>
    </div>
  );
};
