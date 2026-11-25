"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./LearningTravelArtwork.module.css";

export const GotherArtwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label="Gother flight platform illustration with a destination campaign carousel, flight search results, mobile flight details, and pre-booking checks."
    >
      <div className={styles.canvas} aria-hidden="true">
        <header className={styles.heading}>
          <span>DISCOVER · COMPARE · BOOK</span>
          <strong>Your next escape, closer.</strong>
        </header>
        <div className={`${styles.halo} ${styles.sky}`} />
        <div className={styles.browser}>
          <div className={styles.toolbar}>
            <i />
            <i />
            <i />
            <span>GOTHER · FLIGHTS</span>
          </div>
          <div className={styles.campaign}>
            <div className={styles.sun} />
            <div className={styles.mountains} />
            <span>
              FIND YOUR
              <br />
              <strong>next adventure.</strong>
            </span>
            <div className={styles.dots}>
              {[0, 1, 2].map((dot) => (
                <motion.i
                  key={dot}
                  animate={{
                    opacity: animate ? [0.3, 1, 0.3] : dot === 0 ? 1 : 0.3,
                  }}
                  transition={{ duration: 6, delay: dot * 2, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
          <div className={styles.search}>
            <b>BKK</b>
            <span>→</span>
            <b>CNX</b>
            <i>SEARCH</i>
          </div>
          <div className={styles.flight}>
            <span>
              09:40 <small>BANGKOK</small>
            </span>
            <i>──── DIRECT ────</i>
            <span>
              10:55 <small>CHIANG MAI</small>
            </span>
          </div>
          <div className={styles.flight}>
            <span>
              14:20 <small>BANGKOK</small>
            </span>
            <i>──── DIRECT ────</i>
            <span>
              15:35 <small>CHIANG MAI</small>
            </span>
          </div>
        </div>
        <motion.div
          className={styles.phone}
          animate={{ y: animate ? [0, -4, 0] : 0 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className={styles.label}>FLIGHT DETAILS</span>
          <strong>
            BKK
            <br />
            <span>↓</span>
            <br />
            CNX
          </strong>
          <div className={styles.checks}>
            <span>✓ Passenger</span>
            <span>✓ Flight details</span>
            <span>✓ Ready to book</span>
          </div>
          <div className={styles.continue}>CONTINUE →</div>
        </motion.div>
        <div className={styles.caption}>WEB + MOBILE · A SMOOTHER JOURNEY</div>
        <footer className={styles.footer}>
          <span>08 / GOTHER FLIGHT PLATFORM</span>
          <span>From discovery to takeoff ↗</span>
        </footer>
      </div>
    </div>
  );
};
