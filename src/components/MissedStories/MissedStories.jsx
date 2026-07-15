import { useState, useEffect } from 'react'
import styles from './MissedStories.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { getMissedStories } from '../../api/api'

export default function MissedStories() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getMissedStories()
      .then(res => {
        setStories(res.data.data.slice(0, 4))
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (error) return <div className={styles.error}>Failed to load stories.</div>
  if (stories.length === 0) return null

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
              <p className={styles.headline}>{story.title}</p>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.redDot}></span>
              <span className={styles.date}>{formatDate(story.created_at)}</span>
              <span className={styles.redDot}></span>
              <span className={styles.category}>{story.category.category_name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button — mobile only */}
      <div className={styles.showMoreBtn}>
        <button className={styles.showMorePill}>Show More</button>
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