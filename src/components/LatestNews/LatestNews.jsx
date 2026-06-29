import styles from './LatestNews.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export default function LatestNews() {
  const cards = [
    {
      id: 1,
      image: '/images/latest-news/ibu-sisi.jpg',
      category: 'Entertainment',
      headline: 'Tinubu Mourns Actors, John Okafor and Quadri Oyebamiji',
    },
    {
      id: 2,
      image: '/images/latest-news/next2.jpg',
      category: 'World News',
      headline: 'Gunfire near Haiti airport disrupts flights for second day',
    },
    {
      id: 3,
      image: '/images/latest-news/next3.png',
      category: 'World News',
      headline: 'The worst wildfire in Texas history could get even more dangerous',
    },
    {
      id: 4,
      image: '/images/latest-news/next4.jpg',
      category: 'Entertainment',
      headline: 'Moses Bliss ties the knot with Marie Wiseborn in classy wedding',
    },
  ]

  return (
    <section className={styles.latestNews}>

      {/* Header Row */}
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>LATEST NEWS</h2>
        <div className={styles.controls}>
          <button className={styles.arrow}><FaChevronLeft /></button>
          <span className={styles.dot + ' ' + styles.activeDot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <button className={styles.arrow}><FaChevronRight /></button>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        {cards.map(card => (
          <div key={card.id} className={styles.card}>
            <img src={card.image} alt={card.headline} />
            <div className={styles.overlay}>
              <span className={styles.pill}>{card.category}</span>
              <p className={styles.headline}>{card.headline}</p>
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