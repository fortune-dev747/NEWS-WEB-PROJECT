import styles from './MissedStories.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export default function MissedStories() {
  const stories = [
    {
      id: 1,
      headline: 'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
      date: 'Feb 29, 2024',
      category: 'Finance',
    },
    {
      id: 2,
      headline: 'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
      date: 'Feb 29, 2024',
      category: 'Finance',
    },
    {
      id: 3,
      headline: 'Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest',
      date: 'Feb 29, 2024',
      category: 'Finance',
    },
    {
      id: 4,
      headline: 'Foden Sparkles As Man City Crush Spineless Man United',
      date: 'Feb 29, 2024',
      category: 'Finance',
    },
  ]

  return (
    <section className={styles.missedStories}>

      {/* Header Row */}
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>STORIES YOU MAY HAVE MISSED</h2>
        <div className={styles.controls}>
          <button className={styles.arrow}><FaChevronLeft /></button>
          <span className={styles.dot + ' ' + styles.activeDot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <button className={styles.arrow}><FaChevronRight /></button>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        {stories.map(story => (
          <div key={story.id} className={styles.card}>
            <div className={styles.topRow}>
              <span className={styles.blackSquare}></span>
              <p className={styles.headline}>{story.headline}</p>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.redDot}></span>
              <span className={styles.date}>{story.date}</span>
              <span className={styles.redDot}></span>
              <span className={styles.category}>{story.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterTop}>
            <img src="/images/missed-stories/email.png" alt="Newsletter" className={styles.newsletterImage} />
            <p className={styles.newsletterText}>Get the latest news and stories from around Africa directly into your inbox daily.</p>
          </div>
          <input type="email" placeholder="Enter your email address" className={styles.emailInput} />
          <button className={styles.subscribeBtn}>Get Me In</button>
        </div>

        {/* Ad Image */}
        <div className={styles.adImage}>
          <img src="/images/missed-stories/missed-storiesad.png" alt="Advertisement" />
        </div>

      </div>

    </section>
  )
}