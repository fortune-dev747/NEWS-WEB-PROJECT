import styles from './MoreStoriesSkeleton.module.css'

export default function MoreStoriesSkeleton() {
  return (
    <section className={styles.skeleton}>

      {/* Left Large Card */}
      <div className={styles.leftCard}></div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        <div className={styles.heading}></div>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={styles.storyItem}></div>
        ))}
      </div>

    </section>
  )
}