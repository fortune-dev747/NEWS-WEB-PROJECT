import { useState, useEffect } from 'react'
import styles from './MoreStories.module.css'
import { FaCrown } from 'react-icons/fa'
import { getEditorPicks } from '../../api/api'
import MoreStoriesSkeleton from './MoreStoriesSkeleton'

export default function MoreStories() {
  const [mainStory, setMainStory] = useState(null)
  const [sideStories, setSideStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getEditorPicks()
      .then(res => {
        const valid = res.data.data.filter(item => item.story !== null)
        setMainStory(valid[0]?.story)
        setSideStories(valid.slice(1, 6).map(item => item.story))
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <MoreStoriesSkeleton />
  if (error) return <div className={styles.error}>Failed to load stories.</div>
  if (!mainStory) return null

  return (
    <section className={styles.moreStories}>

      {/* Left Large Card */}
      <div className={styles.leftCard}>
        <img src={mainStory.banner_image} alt={mainStory.title} />
        <div className={styles.badge}>
          <span className={styles.crownCircle}>
            <FaCrown className={styles.crownIcon} />
          </span>
          <span>Editor's Pick</span>
        </div>
        <div className={styles.leftContent}>
          <h2 className={styles.headline}>{mainStory.title}</h2>
          <p className={styles.subHeadline}>{mainStory.subtitle}</p>
          <div className={styles.author}>
            <span className={styles.authorDot}></span>
            <span className={styles.authorName}>{mainStory.author}</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.rightSide}>
        <h3 className={styles.rightHeading}>MORE STORIES</h3>
        <ul className={styles.storyList}>
          {sideStories.map(story => (
            <li key={story.id} className={styles.storyItem}>
              <span className={styles.redSquare}></span>
              <p className={styles.storyText}>{story.title}</p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}