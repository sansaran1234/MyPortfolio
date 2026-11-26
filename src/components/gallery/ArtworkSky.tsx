import styles from "./ArtworkSky.module.css";

export const ArtworkSun = () => (
  <div aria-hidden="true" className={styles.sun} />
);

export const ArtworkCloud = () => (
  <div aria-hidden="true" className={styles.cloud}>
    <i />
    <i />
    <i />
    <span />
  </div>
);
