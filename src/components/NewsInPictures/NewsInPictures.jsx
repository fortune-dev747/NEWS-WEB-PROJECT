import styles from './NewsInPictures.module.css'
import { FaChevronRight } from 'react-icons/fa6'

export default function NewsInPictures() {
  const gridImages = [
    {
      id: 1,
      image: '/images/news-in-pictures/news-pictures2.jpg',
      headline: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    },
    {
      id: 2,
      image: '/images/news-in-pictures/news-pictures2.jpg',
      headline: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    },
    {
      id: 3,
      image: '/images/news-in-pictures/news-pictures2.jpg',
      headline: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    },
    {
      id: 4,
      image: '/images/news-in-pictures/news-pictures2.jpg',
      headline: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    },
  ]

  return (
    <section className={styles.newsInPictures}>

      {/* Header Row */}
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>NEWS IN PICTURES</h2>
        <div className={styles.viewMore}>
          <span>View more</span>
          <FaChevronRight />
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>

        {/* Large Left Image */}
        <div className={styles.mainCard}>
          <img src="/images/news-in-pictures/news-pictures1.png" alt="News in Pictures" />
          <div className={styles.mainOverlay}>
            <p className={styles.mainHeadline}>Putin promises grains, debt write-off as Russia seeks Africa allies</p>
          </div>
        </div>

        {/* Right 2x2 Grid */}
        <div className={styles.grid}>
          {gridImages.map(pic => (
            <div key={pic.id} className={styles.gridCard}>
              <img src={pic.image} alt={pic.headline} />
              <div className={styles.gridOverlay}>
                <p className={styles.gridHeadline}>{pic.headline}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}