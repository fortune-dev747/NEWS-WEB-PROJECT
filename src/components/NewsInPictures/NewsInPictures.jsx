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
      {/* Mobile Grid */}
      <div className={styles.mobileGrid}>
        <div className={styles.mobileMainCard}>
          <img src="/images/news-in-pictures/news-pictures1.png" alt="News in Pictures" />
          <div className={styles.mainOverlay}>
            <p className={styles.mainHeadline}>Putin promises grains, debt write-off as Russia seeks Africa allies</p>
          </div>
        </div>
        {[0, 1, 2].map(i => (
          <div key={i} className={styles.mobileCard}>
            <div className={styles.mobileThumb}>
              <img src={gridImages[0].image} alt={gridImages[i].headline} />
            </div>
            <div className={styles.mobileText}>
              <span className={styles.mobileCategory}>News</span>
              <p className={styles.mobileHeadline}>{gridImages[i].headline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}