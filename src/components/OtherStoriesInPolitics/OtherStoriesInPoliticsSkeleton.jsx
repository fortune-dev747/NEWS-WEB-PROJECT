import styles from './OtherStoriesInPoliticsSkeleton.module.css'

export default function OtherStoriesInPoliticsSkeleton() {
  return (
    <section className={styles.skeleton}>

      {/* Heading */}
      <div className={styles.heading}></div>

      <div className={styles.rows}>

        {/* Row 1 */}
        <div className={styles.row}>
          <div className={styles.storyCard}>
            <div className={styles.image}></div>
            <div className={styles.content}>
              <div className={styles.title}></div>
              <div className={styles.titleShort}></div>
              <div className={styles.posted}></div>
              <div className={styles.desc}></div>
              <div className={styles.desc}></div>
              <div className={styles.descShort}></div>
              <div className={styles.btn}></div>
            </div>
          </div>
          <div className={styles.ad250}></div>
        </div>

        {/* Row 2 */}
        <div className={styles.row}>
          <div className={styles.stackedStories}>
            {[1, 2].map(i => (
              <div key={i} className={styles.storyCard}>
                <div className={styles.image}></div>
                <div className={styles.content}>
                  <div className={styles.title}></div>
                  <div className={styles.titleShort}></div>
                  <div className={styles.posted}></div>
                  <div className={styles.desc}></div>
                  <div className={styles.descShort}></div>
                  <div className={styles.btn}></div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ad600}></div>
        </div>

      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <div className={styles.showingText}></div>
        <div className={styles.pageControls}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={styles.pageNumber}></div>
          ))}
        </div>
      </div>

    </section>
  )
}