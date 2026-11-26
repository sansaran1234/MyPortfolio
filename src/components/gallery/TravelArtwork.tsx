"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import styles from "./TravelArtwork.module.css";

export const TravelArtwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reducedMotion = useReducedMotion();
  const animate = visible && !reducedMotion;

  return (
    <div
      ref={ref}
      className={styles.scene}
      role="img"
      aria-label="Flight booking illustration with an airplane, seat selection, passenger details, live schedules, and a confirmed boarding pass."
    >
      <div className={styles.canvas} aria-hidden="true">
        <header className={styles.heading}>
          <span>SEARCH · SELECT · TAKE OFF</span>
          <strong>Every journey starts here.</strong>
        </header>
        <div className={styles.sun} />
        <motion.div
          className={styles.cloud}
          animate={{ x: animate ? [0, 12, 0] : 0 }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className={styles.flightPath} />
        <div className={styles.origin} />
        <div className={styles.destination} />
        <motion.div
          className={styles.plane}
          animate={{
            x: animate ? [0, 14, 0] : 0,
            y: animate ? [0, -9, 0] : 0,
            rotate: animate ? [-12, -8, -12] : -12,
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={styles.wings} />
          <div className={styles.tail} />
          <div className={styles.fuselage}>
            <i />
            <span />
          </div>
        </motion.div>
        <div className={styles.booking}>
          <div className={styles.toolbar}>
            <i />
            <i />
            <i />
            <span>FLIGHT BOOKING</span>
          </div>
          <div className={styles.bookingBody}>
            <div className={styles.seatPanel}>
              <span>CHOOSE YOUR SEAT</span>
              <div className={styles.seats}>
                {Array.from({ length: 12 }, (_, index) => (
                  <motion.i
                    key={index}
                    className={index === 5 ? styles.selected : undefined}
                    animate={{
                      opacity: animate && index === 5 ? [1, 0.55, 1] : 1,
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {index === 5 ? "✓" : ""}
                  </motion.i>
                ))}
              </div>
              <small>12A · WINDOW</small>
            </div>
            <div className={styles.details}>
              <span>PASSENGER</span>
              <div className={styles.passenger}>
                <i />
                <b />
                <b />
              </div>
              <span>LIVE SCHEDULE</span>
              <p>
                <b>09:40</b>
                <i>ON TIME</i>
              </p>
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
          </div>
        </div>
        <motion.div
          className={styles.ticket}
          initial={false}
          style={{ rotate: -5 }}
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
          <span className={styles.ticketLabel}>
            BOARDING PASS <b>✓ CONFIRMED</b>
          </span>
          <div className={styles.airports}>
            <strong>BKK</strong>
            <span>→</span>
            <strong>CNX</strong>
          </div>
          <div className={styles.ticketMeta}>
            <span>
              GATE <b>A8</b>
            </span>
            <span>
              SEAT <b>12A</b>
            </span>
            <span>
              BOARDING <b>09:10</b>
            </span>
          </div>
          <div className={styles.barcode} />
        </motion.div>
        <footer className={styles.footer}>
          <span>02 / TRAVEL & BOOKING</span>
          <span>From discovery to departure ↗</span>
        </footer>
      </div>
    </div>
  );
};
