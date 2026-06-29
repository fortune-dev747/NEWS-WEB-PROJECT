import styles from './Politics.module.css'
import { FaChevronRight } from 'react-icons/fa6'

export default function Politics() {
  const sideStories = [
    {
      id: 1,
      image: '/images/politics/fuel-petrol.jpg',
      headline: 'Foden Sparkles As Man City Crush Spineless Man United',
    },
    {
      id: 2,
      image: '/images/politics/fuel-petrol.jpg',
      headline: 'Foden Sparkles As Man City Crush Spineless Man United',
    },
    {
      id: 3,
      image: '/images/politics/fuel-petrol.jpg',
      headline: 'Foden Sparkles As Man City Crush Spineless Man United',
    },
    {
      id: 4,
      image: '/images/politics/fuel-petrol.jpg',
      headline: 'Foden Sparkles As Man City Crush Spineless Man United',
    },
    {
      id: 5,
      image: '/images/politics/fuel-petrol.jpg',
      headline: 'Foden Sparkles As Man City Crush Spineless Man United',
    },
  ]

  return (
    <section className={styles.politics}>

      {/* Left Side */}
      <div className={styles.leftSide}>

        {/* Header Row */}
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>POLITICS</h2>
          <button className={styles.arrow}><FaChevronRight /></button>
        </div>

        {/* Main Image */}
        <div className={styles.mainImage}>
          <img src="/images/politics/fuel-petrol.jpg" alt="Politics" />
        </div>

        {/* Headline & Description */}
        <div className={styles.textContent}>
          <h3 className={styles.headline}>Falana Asks FG To Review Fuel Subsidy Removal</h3>
          <p className={styles.description}>Human rights lawyer Femi Falana (SAN) wants the Federal Government to review the fuel subsidy removal policy owing to claims that Nigeria is still paying for it.</p>
        </div>

        {/* Author Row */}
        <div className={styles.authorRow}>
          <span className={styles.authorDot}></span>
          <span className={styles.authorName}>Ogechi Joseph</span>
          <span className={styles.authorDot}></span>
          <span className={styles.time}>Posted 13 mins ago</span>
        </div>

      </div>

      <div className={styles.border}>

      </div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        {sideStories.map(story => (
          <div key={story.id} className={styles.storyItem}>
            <span className={styles.redSquare}></span>
            <p className={styles.storyText}>{story.headline}</p>
            <img src={story.image} alt={story.headline} className={styles.storyImage} />
          </div>
        ))}
      </div>

    </section>
  )
}