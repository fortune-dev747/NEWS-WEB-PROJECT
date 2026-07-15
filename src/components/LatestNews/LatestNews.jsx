import { useState, useEffect, useRef } from 'react'
import styles from './LatestNews.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { getLatestStories } from '../../api/api'
import LatestNewsSkeleton from './LatestNewsSkeleton'


export default function LatestNews({ heading = 'LATEST NEWS' }) {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const mobileScrollRef = useRef(null)

  const visibleCount = 4

  useEffect(() => {
    getLatestStories()
      .then(res => {
        setStories(res.data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Track scroll position on mobile
  useEffect(() => {
    const container = mobileScrollRef.current
    if (!container) return

    const handleScroll = () => {
      const cardWidth = container.firstChild?.offsetWidth + 12
      const index = Math.round(container.scrollLeft / cardWidth)
      setMobileIndex(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [stories])

  // Scroll to card when dot is clicked on mobile
  const scrollToCard = (index) => {
    const container = mobileScrollRef.current
    if (!container) return
    const cardWidth = container.firstChild?.offsetWidth + 12
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
    setMobileIndex(index)
  }

  const totalSlides = Math.ceil(stories.length / visibleCount)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const visibleStories = stories.slice(
    currentIndex * visibleCount,
    currentIndex * visibleCount + visibleCount
  )

  if (loading) return <LatestNewsSkeleton />
  if (error) return <div className={styles.error}>Failed to load stories.</div>
  if (stories.length === 0) return null

  return (
    <section className={styles.latestNews}>

      {/* Header Row */}
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>{heading}</h2>

        {/* Desktop Controls */}
        <div className={`${styles.controls} ${styles.desktopControls}`}>
          <button className={styles.arrow} onClick={handlePrev}><FaChevronLeft /></button>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
          <button className={styles.arrow} onClick={handleNext}><FaChevronRight /></button>
        </div>

        {/* Mobile Controls */}
        <div className={`${styles.controls} ${styles.mobileControls}`}>
          <button className={styles.arrow} onClick={() => scrollToCard(Math.max(0, mobileIndex - 1))}>
            <FaChevronLeft />
          </button>
          {stories.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === mobileIndex ? styles.activeDot : ''}`}
              onClick={() => scrollToCard(i)}
            ></span>
          ))}
          <button className={styles.arrow} onClick={() => scrollToCard(Math.min(stories.length - 1, mobileIndex + 1))}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Desktop Cards */}
      <div className={styles.cards}>
        {visibleStories.map(story => (
          <div key={story.id} className={styles.card}>
            <img src={story.banner_image} alt={story.title} />
            <div className={styles.overlay}>
              <span className={styles.pill}>{story.category.category_name}</span>
              <p className={styles.headline}>{story.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Scrollable Cards */}
      <div className={styles.mobileCards} ref={mobileScrollRef}>
        {stories.map(story => (
          <div key={story.id} className={styles.mobileCard}>
            <img src={story.banner_image} alt={story.title} />
            <div className={styles.overlay}>
              <span className={styles.pill}>{story.category.category_name}</span>
              <p className={styles.headline}>{story.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ad Cards */}
      <div className={styles.adRow}>
        <div className={styles.adCard}>
          <img src="/images/latest-news/latest-news-ad1.png" alt="Advertisement" />
        </div>
        <div className={styles.adCard}>
          <img src="/images/latest-news/latest-news-ad2.png" alt="Advertisement" />
        </div>
      </div>

    </section>
  )
}