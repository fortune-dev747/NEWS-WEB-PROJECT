import { useState, useEffect } from 'react'
import styles from './OtherStoriesInPolitics.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { getCategoryStories } from '../../api/api'
import OtherStoriesInPoliticsSkeleton from './OtherStoriesInPoliticsSkeleton'

const STORIES_PER_PAGE = 5

export default function OtherStoriesInPolitics() {
  const [allStories, setAllStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    getCategoryStories(1)
      .then(res => {
        setAllStories(res.data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      hour: '2-digit', minute: '2-digit',
      weekday: 'short', month: 'long', day: 'numeric', year: 'numeric'
    })
  }

  const totalPages = Math.ceil(allStories.length / STORIES_PER_PAGE)
  const from = (currentPage - 1) * STORIES_PER_PAGE + 1
  const to = Math.min(currentPage * STORIES_PER_PAGE, allStories.length)
  const stories = allStories.slice((currentPage - 1) * STORIES_PER_PAGE, currentPage * STORIES_PER_PAGE)

  if (loading) return <OtherStoriesInPoliticsSkeleton />
  if (error) return <div className={styles.error}>Failed to load stories.</div>
  if (allStories.length === 0) return null

  const mainStory = stories[0]
  const stackedRow1 = stories.slice(1, 3)
  const stackedRow2 = stories.slice(3, 5)

  const getPageNumbers = () => {
    const pages = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i)
      }
      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

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
        <p className={styles.showingText}>Showing {from} - {to} of {allStories.length}</p>
        <div className={styles.pageControls}>
          <button
            className={styles.pageArrow}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          {getPageNumbers().map((page, index) => (
            page === '...'
              ? <span key={`ellipsis-${index}`} className={styles.ellipsis}>...</span>
              : <button
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