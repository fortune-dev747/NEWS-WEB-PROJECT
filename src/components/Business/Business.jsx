import { useState, useEffect } from 'react'
import styles from './Business.module.css'
import { FaChevronRight } from 'react-icons/fa6'
import { getCategoryStories } from '../../api/api'
import BusinessSkeleton from './BusinessSkeleton'

export default function Business() {
  const [mainStory, setMainStory] = useState(null)
  const [sideStories, setSideStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCategoryStories(2)
      .then(res => {
        const stories = res.data.data
        setMainStory(stories[0])
        setSideStories(stories.slice(1))
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    })
  }

  if (loading) return <BusinessSkeleton />
  if (error) return <div className={styles.error}>Failed to load stories.</div>
  if (!mainStory) return null

  return (
    <section className={styles.business}>

      {/* Left Side */}
      <div className={styles.leftSide}>

        {/* Header Row */}
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>BUSINESS</h2>
          <button className={styles.arrow}><FaChevronRight /></button>
        </div>

        {/* Main Image */}
        <div className={styles.mainImage}>
          <img src={mainStory.banner_image} alt={mainStory.title} />
        </div>

        {/* Headline & Description */}
        <div className={styles.textContent}>
          <h3 className={styles.headline}>{mainStory.title}</h3>
          <p className={styles.description}>{mainStory.description}</p>
        </div>

        {/* Author Row */}
        <div className={styles.authorRow}>
          <span className={styles.authorDot}></span>
          <span className={styles.authorName}>{mainStory.author}</span>
          <span className={styles.authorDot}></span>
          <span className={styles.time}>{formatDate(mainStory.created_at)}</span>
        </div>

      </div>

      <div className={styles.border}></div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        {sideStories.map(story => (
          <div key={story.id} className={styles.storyItem}>
            <span className={styles.redSquare}></span>
            <p className={styles.storyText}>{story.title}</p>
            <img src={story.banner_image} alt={story.title} className={styles.storyImage} />
          </div>
        ))}
      </div>

    </section>
  )
}