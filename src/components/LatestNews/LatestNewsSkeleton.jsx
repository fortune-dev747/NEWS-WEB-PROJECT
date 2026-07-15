import styles from './LatestNewsSkeleton.module.css'

export default function LatestNewsSkeleton() {
  return (
    <section className={styles.skeleton}>
      {/* Header Row */}
      <div className={styles.headerRow}>
        <div className={styles.heading}></div>
        <div className={styles.controls}></div>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={styles.card}></div>
        ))}
      </div>

      {/* Ad Row */}
      <div className={styles.adRow}>
        <div className={styles.adCard}></div>
        <div className={styles.adCard}></div>
      </div>
    </section>
  )
}