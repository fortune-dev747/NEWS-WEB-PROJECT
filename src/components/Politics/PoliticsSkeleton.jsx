import styles from './PoliticsSkeleton.module.css'

export default function PoliticsSkeleton() {
  return (
    <section className={styles.skeleton}>

      {/* Left Side */}
      <div className={styles.leftSide}>
        <div className={styles.heading}></div>
        <div className={styles.mainImage}></div>
        <div className={styles.title}></div>
        <div className={styles.titleShort}></div>
        <div className={styles.description}></div>
        <div className={styles.description}></div>
        <div className={styles.author}></div>
      </div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={styles.storyItem}>
            <div className={styles.storyText}></div>
            <div className={styles.storyImage}></div>
          </div>
        ))}
      </div>

    </section>
  )
}