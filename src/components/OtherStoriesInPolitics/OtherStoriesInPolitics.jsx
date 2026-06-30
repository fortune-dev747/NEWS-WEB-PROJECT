import styles from './OtherStoriesInPolitics.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export default function OtherStoriesInPolitics() {
  const stories = [
    {
      id: 1,
      image: '/images/other-stories/main-image.jpg',
      category: 'World News',
      headline: 'Dozens of Russian tourists were recently allowed to visit North Korea. Here’s what they saw',
      posted: 'Posted 1:32 AM, Sun March 10, 2024',
      description: 'The investigation comes after weeks of public pressure following reports of irregularities in contract awards. Lawmakers say the probe will be thorough and transparent.',
    },
    {
      id: 2,
      image: '/images/other-stories/main-image.jpg',
      category: 'World News',
      headline: 'Dozens of Russian tourists were recently allowed to visit North Korea. Here’s what they saw',
      posted: 'Posted 1:32 AM, Sun March 10, 2024',
      description: 'Officials have moved to dispel rumors of internal conflict, insisting that all parties remain aligned on key national policy priorities ahead of the new fiscal year.',
    },
    {
      id: 3,
      image: '/images/other-stories/main-image.jpg',
      category: 'World News',
      headline: 'Dozens of Russian tourists were recently allowed to visit North Korea. Here’s what they saw',
      posted: 'Posted 1:32 AM, Sun March 10, 2024',
      description: 'A coalition of opposition leaders announced a joint strategy aimed at consolidating votes and presenting a unified front in the upcoming state elections.',
    },
    {
      id: 4,
      image: '/images/other-stories/main-image.jpg',
      category: 'World News',
      headline: 'Dozens of Russian tourists were recently allowed to visit North Korea. Here’s what they saw',
      posted: 'Posted 1:32 AM, Sun March 10, 2024',
      description: 'The electoral commission confirmed the registration window will run for eight weeks, with mobile units deployed to rural and underserved communities nationwide.',
    },
    {
      id: 5,
      image: '/images/other-stories/main-image.jpg',
      category: 'World News',
      headline: 'Dozens of Russian tourists were recently allowed to visit North Korea. Here’s what they saw',
      posted: 'Posted 1:32 AM, Sun March 10, 2024',
      description: 'The bill, which seeks to reform key sections of the constitution, now moves to the Senate for concurrence before being forwarded for presidential assent.',
    },
  ]

  return (
    <section className={styles.otherStories}>
      <h2 className={styles.heading}>OTHER STORIES IN POLITICS</h2>

      <div className={styles.rows}>

        {/* Row 1 + Ad 1 */}
        <div className={styles.row}>
          <StoryCard story={stories[0]} />
          <div className={styles.ad250}>
            <img src="/images/other-stories/ad-image1.png" alt="Advertisement" />
          </div>
        </div>

        {/* Row 2 + 3 alongside tall Ad 2 */}
        <div className={styles.row}>
          <div className={styles.stackedStories}>
            <StoryCard story={stories[1]} />
            <StoryCard story={stories[2]} />
          </div>
          <div className={styles.ad600}>
            <img src="/images/other-stories/ad-image2.png" alt="Advertisement" />
          </div>
        </div>

        {/* Row 4 + 5 alongside Ad 3 */}
        <div className={styles.row}>
          <div className={styles.stackedStories}>
            <StoryCard story={stories[3]} />
            <StoryCard story={stories[4]} />
          </div>
          <div className={styles.ad466}>
            <img src="/images/other-stories/ad-image3.png" alt="Advertisement" />
          </div>
        </div>

      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <p className={styles.showingText}>Showing 1 - 10 of 68</p>
        <div className={styles.pageControls}>
          <button className={styles.pageArrow}><FaChevronLeft /></button>
          <button className={`${styles.pageNumber} ${styles.activePage}`}>1</button>
          <button className={styles.pageNumber}>2</button>
          <button className={styles.pageNumber}>3</button>
          <button className={styles.pageNumber}>4</button>
          <button className={styles.pageNumber}>5</button>
          <span className={styles.ellipsis}>...</span>
          <button className={styles.pageNumber}>8</button>
          <button className={styles.pageArrow}><FaChevronRight /></button>
        </div>
      </div>
    </section>
  )
}

function StoryCard({ story }) {
  return (
    <div className={styles.storyCard}>
      <div className={styles.imageWrapper}>
        <img src={story.image} alt={story.headline} />
        <span className={styles.pill}>{story.category}</span>
      </div>
      <div className={styles.storyContent}>
        <h3 className={styles.headline}>{story.headline}</h3>
        <p className={styles.posted}>{story.posted}</p>
        <p className={styles.description}>{story.description}</p>
        <button className={styles.continueBtn}>Continue Reading</button>
      </div>
    </div>
  )
}