import styles from './MoreStories.module.css'
import { FaCrown } from 'react-icons/fa'

export default function MoreStories() {
  const stories = [
    'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
    'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
    'Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest',
    'Foden Sparkles As Man City Crush Spineless Man United',
    'Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog',
  ]

  return (
    <section className={styles.moreStories}>

      {/* Left Large Card */}
      <div className={styles.leftCard}>
        <img src="/images/more-stories/dangote.jpg" alt="Editor's Pick" />
        <div className={styles.badge}>
          <span className={styles.crownCircle}>
            <FaCrown className={styles.crownIcon} />
          </span>
          <span>Editor's Pick</span>
        </div>
        <div className={styles.leftContent}>
          <h2 className={styles.headline}>Dangote Refinery's second crude oil shipment leaves US for Nigeria</h2>
          <p className={styles.subHeadline}>First cargo to arrive next week</p>
          <div className={styles.author}>
            <span className={styles.authorDot}></span>
            <span className={styles.authorName}>Ogechi Joseph</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        <h3 className={styles.rightHeading}>MORE STORIES</h3>
        <ul className={styles.storyList}>
          {stories.map((story, index) => (
            <li key={index} className={styles.storyItem}>
              <span className={styles.redSquare}></span>
              <p className={styles.storyText}>{story}</p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}