import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ArticleHero.module.css'
import { FaShareAlt } from 'react-icons/fa'
import { getStory, getTopStories } from '../../api/api'

export default function ArticleHero() {
  const { id } = useParams()
  const [story, setStory] = useState(null)
  const [topStories, setTopStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    Promise.all([
      getStory(id),
      getTopStories()
    ])
      .then(([storyRes, topStoriesRes]) => {
        setStory(storyRes.data)
        const valid = topStoriesRes.data.data
          .filter(item => item.story !== null)
          .slice(0, 4)
          .map(item => item.story)
        setTopStories(valid)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      hour: '2-digit', minute: '2-digit',
      weekday: 'short', month: 'long', day: 'numeric', year: 'numeric'
    })
  }

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (error) return <div className={styles.error}>Failed to load article.</div>
  if (!story) return null

  return (
    <article className={styles.articleHero}>

      {/* Buttons Row */}
      <div className={styles.buttonsRow}>
        <button className={styles.categoryBtn}>{story.category.category_name}</button>
        <button className={styles.shareBtn}>
          <FaShareAlt className={styles.shareIcon} />
          <span>Share</span>
        </button>
      </div>

      {/* Headline */}
      <h1 className={styles.headline}>{story.title}</h1>

      {/* Meta */}
      <div className={styles.meta}>
        <span className={styles.posted}>{formatDate(story.created_at)}</span>
        <span className={styles.dot}></span>
        <span className={styles.readTime}>
          {Math.ceil(story.content.replace(/<[^>]+>/g, '').split(' ').length / 200)} minute read
        </span>
      </div>
      <p className={styles.author}>By {story.author}</p>

      {/* Main Content Row */}
      <div className={styles.mainRow}>

        {/* Left */}
        <div className={styles.leftContent}>

          {/* Large Image */}
          <div className={styles.mainImage}>
            <img src={story.banner_image} alt={story.title} />
          </div>
          <p className={styles.caption}>{story.subtitle}</p>

          {/* Article Body */}
          <div
            className={styles.bodyText}
            dangerouslySetInnerHTML={{ __html: story.content }}
          />

          {/* Wide Ad */}
          <div className={styles.wideAd}>
            <img src="/images/other-stories/single-ad2.png" alt="Advertisement" />
          </div>

          {/* Share Icons */}
          <div className={styles.shareIcons}>
            <a href="#" className={styles.shareIcon}><img src="/images/other-stories/X.png" alt="X" /></a>
            <a href="#" className={styles.shareIcon}><img src="/images/other-stories/IG.png" alt="Instagram" /></a>
            <a href="#" className={styles.shareIcon}><img src="/images/other-stories/FB.png" alt="Facebook" /></a>
            <a href="#" className={styles.shareIcon}><img src="/images/other-stories/Pin.png" alt="Pinterest" /></a>
            <a href="#" className={styles.shareIcon}><img src="/images/other-stories/LinkedIn.png" alt="LinkedIn" /></a>
            <a href="#" className={styles.shareIcon}><img src="/images/other-stories/link.png" alt="Copy Link" /></a>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className={styles.sidebar}>

          {/* Top Stories */}
          <div className={styles.topStoriesBox}>
            <h3 className={styles.sidebarHeading}>TOP STORIES</h3>
            <ul className={styles.storyList}>
              {topStories.map(s => (
                <li key={s.id} className={styles.storyItem}>
                  <span className={styles.redSquare}></span>
                  <p className={styles.storyText}>{s.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Ad 1 */}
          <div className={styles.adBox}>
            <p className={styles.adLabel}>ADVERTISEMENT</p>
            <div className={styles.ad463}>
              <img src="/images/other-stories/single-ad1.jpg" alt="Advertisement" />
            </div>
          </div>

          {/* Ad 2 */}
          <div className={styles.ad600}>
            <img src="/images/other-stories/ad-image2.png" alt="Advertisement" />
          </div>

        </div>

      </div>

    </article>
  )
}