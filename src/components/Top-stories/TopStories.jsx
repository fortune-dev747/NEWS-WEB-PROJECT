import styles from './TopStories.module.css'

export default function TopStories() {
  return (
    <section className={styles.topStories}>
      <h2 className={styles.heading}>TOP STORIES</h2>

      <div className={styles.storiesGrid}>
        {/* Large Left Image */}
        <div className={styles.mainStory}>
          <img src="/images/top-stories/Putin.png" alt="Latest Today" />
          <div className={styles.mainOverlay}>
            <span className={styles.tag}>LATEST TODAY</span>
            <p className={styles.mainDesc}>Putin promises grains, debt write-off as Russia seeks Africa allies.</p>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.rightSide}>

          {/* Top Two Squares */}
          <div className={styles.squareRow}>
            <div className={styles.squareStory}>
              <img src="/images/top-stories/President-Bola_Ahmed.jpg" alt="News Today" />
              <div className={styles.overlay}>
                <span className={styles.tag}>NEWS TODAY</span>
                <p className={styles.desc}>Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji.</p>
              </div>
            </div>
            <div className={styles.squareStory}>
              <img src="/images/top-stories/President-Bola_Ahmed.jpg" alt="News Today" />
              <div className={styles.overlay}>
                <span className={styles.tag}>NEWS TODAY</span>
                <p className={styles.desc}>Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji.</p>
              </div>
            </div>
          </div>

          {/* Bottom Rectangle */}
          <div className={styles.bottomStory}>
            <img src="/images/top-stories/third-part.png" alt="News Today" />
            <div className={styles.overlay}>
              <span className={styles.tag}>NEWS TODAY</span>
              <p className={styles.desc}>African Union summit concludes with landmark trade agreement signed by 42 member states.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}