import { useState, useEffect } from 'react'
import styles from './OtherStoriesInPolitics.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { getCategoryStories } from '../../api/api'

export default function OtherStoriesInPolitics() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [perPage, setPerPage] = useState(20)

  useEffect(() => {
    setLoading(true)
    getCategoryStories(1, currentPage)
      .then(res => {
        setStories(res.data.data)
        setTotalPages(res.data.meta.last_page)
        setTotal(res.data.meta.total)
        setPerPage(res.data.meta.per_page)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [currentPage])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      hour: '2-digit', minute: '2-digit',
      weekday: 'short', month: 'long', day: 'numeric', year: 'numeric'
    })
  }

  const from = (currentPage - 1) * perPage + 1
  const to = Math.min(currentPage * perPage, total)

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (error) return <div className={styles.error}>Failed to load stories.</div>
  if (stories.length === 0) return null

  const mainStory = stories[0]
  const stackedRow1 = stories.slice(1, 3)
  const stackedRow2 = stories.slice(3, 5)

  return (
    <section className={styles.otherStories}>
      <h2 className={styles.heading}>OTHER STORIES IN POLITICS</h2>

      <div className={styles.rows}>

        {/* Row 1 + Ad 1 */}
        <div className={styles.row}>
          <StoryCard story={mainStory} formatDate={formatDate} />
          <div className={styles.ad250}>
            <img src="/images/other-stories/ad-image1.png" alt="Advertisement" />
          </div>
        </div>

        {/* Rows 2 & 3 + Ad 2 */}
        {stackedRow1.length > 0 && (
          <div className={styles.row}>
            <div className={styles.stackedStories}>
              {stackedRow1.map(story => (
                <StoryCard key={story.id} story={story} formatDate={formatDate} />
              ))}
            </div>
            <div className={styles.ad600}>
              <img src="/images/other-stories/ad-image2.png" alt="Advertisement" />
            </div>
          </div>
        )}

        {/* Rows 4 & 5 + Ad 3 */}
        {stackedRow2.length > 0 && (
          <div className={styles.row}>
            <div className={styles.stackedStories}>
              {stackedRow2.map(story => (
                <StoryCard key={story.id} story={story} formatDate={formatDate} />
              ))}
            </div>
            <div className={styles.ad466}>
              <img src="/images/other-stories/ad-image3.png" alt="Advertisement" />
            </div>
          </div>
        )}

      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <p className={styles.showingText}>Showing {from} - {to} of {total}</p>
        <div className={styles.pageControls}>
          <button
            className={styles.pageArrow}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`${styles.pageNumber} ${page === currentPage ? styles.activePage : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={styles.pageArrow}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

function StoryCard({ story, formatDate }) {
  return (
    <div className={styles.storyCard}>
      <div className={styles.imageWrapper}>
        <img src={story.banner_image} alt={story.title} />
        <span className={styles.pill}>{story.category.category_name}</span>
      </div>
      <div className={styles.storyContent}>
        <h3 className={styles.headline}>{story.title}</h3>
        <p className={styles.posted}>{formatDate(story.created_at)}</p>
        <p className={styles.description}>{story.description}</p>
        <button className={styles.continueBtn}>Continue Reading</button>
      </div>
    </div>
  )
}