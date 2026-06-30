import styles from './FeaturedStories.module.css'
import { FaChevronRight } from 'react-icons/fa6'

export default function FeaturedStories() {
  const bottomStories = [
    'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
    'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
    'Former NGX Group Chairman Abimbola Ogunbanjo Laid To Rest',
    'Foden Sparkles As Man City Crush Spineless Man United',
    'Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog',
  ]

  return (
    <section className={styles.featuredStories}>

      {/* Left Column */}
      <div className={styles.column}>

        {/* Header */}
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>FEATURED STORIES</h2>
          <button className={styles.arrow}><FaChevronRight /></button>
        </div>

        {/* Image Card */}
        <div className={styles.imageCard}>
          <img src="/images/featured-stories/featured-stories1.jpg" alt="Featured Story" />
          <span className={styles.pill}>Editorial</span>
        </div>

        {/* Headline */}
        <h3 className={styles.headline}>Dozens of Russian tourists were recently allowed to visit North Korea. Here’s what they saw</h3>

        {/* Author Row */}
        <div className={styles.authorRow}>
          <span className={styles.authorDot}></span>
          <span className={styles.authorName}>Ogechi Joseph</span>
           <span className={styles.authorDot}></span>
          <span className={styles.time}>Posted 13 mins ago</span>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Stories */}
        <ul className={styles.storyList}>
          {bottomStories.map((story, index) => (
            <li key={index} className={styles.storyItem}>
              <p className={styles.storyText}>{story}</p>
            </li>
          ))}
        </ul>

      </div>

      {/* Middle Column — same as left */}
      <div className={styles.middleColumn}>

        {/* Image Card */}
        <div className={styles.imageCard}>
          <img src="/images/featured-stories/featured-stories2.png" alt="Featured Story" />
          <span className={styles.pill}>Opinion</span>
        </div>

        {/* Headline */}
        <h3 className={styles.headline}>Scrap Constituency Projects</h3>

        {/* Author Row */}
        <div className={styles.authorRow}>
          <span className={styles.authorDot}></span>
          <span className={styles.authorName}>Ogechi Joseph</span>
          <span className={styles.authorDot}></span>
          <span className={styles.time}>Posted 13 mins ago</span>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Stories */}
        <ul className={styles.storyList}>
          {bottomStories.map((story, index) => (
            <li key={index} className={styles.storyItem}>
              <p className={styles.storyText}>{story}</p>
            </li>
          ))}
        </ul>

      </div>

      {/* Right Column — Ads */}
      <div className={styles.rightColumn}>
        <p className={styles.adLabel}>ADVERTISEMENT</p>
        <div className={styles.adTop}>
          <img src="/images/featured-stories/side-ad1.jpg" alt="Advertisement" />
        </div>
        <div className={styles.adBottom}>
          <img src="/images/featured-stories/side-ad2.jpg" alt="Advertisement" />
        </div>
      </div>

    </section>
  )
}