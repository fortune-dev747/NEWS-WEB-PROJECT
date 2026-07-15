import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './TopStories.module.css'
import { getTopStories } from '../../api/api'
import TopStoriesSkeleton from './TopStoriesSkeleton'

export default function TopStories({ heading = 'TOP STORIES' }) {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTopStories()
      .then(res => {
        setStories(res.data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <TopStoriesSkeleton />
  if (error) return <div className={styles.error}>Failed to load stories.</div>
  if (stories.length === 0) return null

  const mainStory = stories[0]?.story
  const squareStory1 = stories[1]?.story
  const squareStory2 = stories[2]?.story
  const bottomStory = stories[3]?.story || stories[2]?.story


  return (
    <section className={styles.topStories}>
      <h2 className={styles.heading}>{heading}</h2>

      <div className={styles.storiesGrid}>
        {/* Large Left Image */}
        {mainStory && (
          <div className={styles.mainStory}>
            <Link to={`/story/${mainStory.id}`}><img src={mainStory.banner_image} alt={mainStory.title} /></Link>
            <div className={styles.mainOverlay}>
              <span className={styles.tag}>LATEST TODAY</span>
              <p className={styles.mainDesc}>{mainStory.title}</p>
            </div>
          </div>
        )}

        {/* Right Side */}
        <div className={styles.rightSide}>

          {/* Top Two Squares */}
          <div className={styles.squareRow}>
            {squareStory1 && (
              <div className={styles.squareStory}>
                <img src={squareStory1.banner_image} alt={squareStory1.title} />
                <div className={styles.overlay}>
                  <span className={styles.tag}>NEWS TODAY</span>
                  <p className={styles.desc}>{squareStory1.title}</p>
                </div>
              </div>
            )}
            {squareStory2 && (
              <div className={styles.squareStory}>
                <img src={squareStory2.banner_image} alt={squareStory2.title} />
                <div className={styles.overlay}>
                  <span className={styles.tag}>NEWS TODAY</span>
                  <p className={styles.desc}>{squareStory2.title}</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Rectangle */}
          {bottomStory && (
            <div className={styles.bottomStory}>
              <img src={bottomStory.banner_image} alt={bottomStory.title} />
              <div className={styles.overlay}>
                <span className={styles.tag}>NEWS TODAY</span>
                <p className={styles.desc}>{bottomStory.title}</p>
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  )
}



