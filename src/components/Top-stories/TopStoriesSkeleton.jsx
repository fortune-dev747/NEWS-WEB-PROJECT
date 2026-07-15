import styles from './TopStoriesSkeleton.module.css'

export default function TopStoriesSkeleton() {
  return (
    <section className={styles.skeleton}>
      <div className={styles.heading}></div>
      <div className={styles.grid}>
        {/* Large left */}
        <div className={styles.mainStory}></div>
        {/* Right side */}
        <div className={styles.rightSide}>
          <div className={styles.squareRow}>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </div>
    </section>
  )
}