import styles from './NewsInVideos.module.css'
import { FaChevronRight, FaPlay } from 'react-icons/fa6'

export default function NewsInVideos() {
  const videos = [
    {
      id: 1,
      image: '/images/news-in-videos/news-video1.jpg',
      category: 'World News',
      headline: 'US storm: Massive blizzard hits California and Nevada',
    },
    {
      id: 2,
      image: '/images/news-in-videos/news-video2.jpg',
      category: 'World News',
      headline: 'US storm: Massive blizzard hits California and Nevada',
    },
    {
      id: 3,
      image: '/images/news-in-videos/news-video2.jpg',
      category: 'World News',
      headline: 'US storm: Massive blizzard hits California and Nevada',
    },
    {
      id: 4,
      image: '/images/news-in-videos/news-video1.jpg',
      category: 'World News',
      headline: 'US storm: Massive blizzard hits California and Nevada',
    },
    {
      id: 5,
      image: '/images/news-in-videos/news-video2.jpg',
      category: 'World News',
      headline: 'US storm: Massive blizzard hits California and Nevada',
    },
    {
      id: 6,
      image: '/images/news-in-videos/news-video2.jpg',
      category: 'World News',
      headline: 'US storm: Massive blizzard hits California and Nevada',
    },
  ]

  return (
    <section className={styles.newsInVideos}>

      {/* Header Row */}
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>NEWS IN VIDEOS</h2>
        <div className={styles.viewMore}>
          <span>View more</span>
          <FaChevronRight />
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={video.image} alt={video.headline} />
              <span className={styles.pill}>{video.category}</span>
              <div className={styles.playBtn}>
                <FaPlay className={styles.playIcon} />
              </div>
            </div>
            <div className={styles.cardText}>
              <span className={styles.categoryLabel}>{video.category}</span>
              <p className={styles.headline}>{video.headline}</p>
            </div>
            <div className={styles.divider}></div>
          </div>
        ))}
      </div >

      {/* Mobile Grid */}
      <div className={styles.mobileGrid}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={videos[0].image} alt={videos[0].headline} />
            <span className={styles.pill}>{videos[0].category}</span>
            <div className={styles.playBtn}><FaPlay className={styles.playIcon} /></div>
          </div>
          <div className={styles.cardText}>
            <p className={styles.headline}>{videos[0].headline}</p>
          </div>
          <div className={styles.divider}></div>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={videos[1].image} alt={videos[i].headline} />
              <div className={styles.playBtn}><FaPlay className={styles.playIcon} /></div>
            </div>
            <div className={styles.cardText}>
              <span className={styles.categoryLabel}>{videos[i].category}</span>
              <p className={styles.headline}>{videos[i].headline}</p>
            </div>
          </div>
        ))}
      </div>

    </section >
  )
}