import styles from './ArticleHero.module.css'
import { FaShareAlt } from 'react-icons/fa'

export default function ArticleHero() {
  const topStories = [
    'Binance: Nigeria orders cryptocurrency firm to pay $10bn',
    'Rivers Community Protests Alleged Killing Of Indigenes By Militia',
    'Foden Sparkles As Man City Crush Spineless Man United',
    'Zamfara Verifies 3,079 Retirees, Settles N2.3bn Gratuity Backlog',
  ]

  return (
    <article className={styles.articleHero}>

      {/* Buttons Row */}
      <div className={styles.buttonsRow}>
        <button className={styles.categoryBtn}>World News</button>
        <button className={styles.shareBtn}>
          <FaShareAlt className={styles.shareIcon} />
          <span>Share</span>
        </button>
      </div>

      {/* Headline */}
      <h1 className={styles.headline}>Putin promises grains, debt write-off as Russia seeks Africa allies</h1>

      {/* Meta */}
      <div className={styles.meta}>
        <span className={styles.posted}>Posted 1:32 AM, Sun March 10, 2024</span>
        <span className={styles.dot}></span>
        <span className={styles.readTime}>4 minute read</span>
      </div>
      <p className={styles.author}>By Ogechi Joseph</p>

      {/* Main Content Row */}
      <div className={styles.mainRow}>

        {/* Left */}
        <div className={styles.leftContent}>

          {/* Large Image */}
          <div className={styles.mainImage}>
            <img src="/images/other-stories/Putin.png" alt="Article" />
          </div>
          <p className={styles.caption}>Russia-Africa-Forum. Photo: Getty Images</p>

          {/* First Body Text */}
          <p className={styles.bodyText}>Former President John Dramani Mahama has emphasized the importance of education to the country's development, noting that the sector consistently receives a significant portion of budgetary allocations from every government. <br></br>  <br></br>  He highlighted that the education sector remains instrumental in producing human capital for accelerated development. Mahama expressed appreciation for individuals who contribute their resources to supplement the government's efforts in educating the youth. <br></br>  <br></br>  Mahama made these remarks on Saturday at the 40th Anniversary of the enstoolment of Togbe Dzegblade IV of Adaklu Kodzobi. His address was delivered by Mr. Kwame Agbodza, the Member of Parliament of Adaklu. <br></br>  <br></br>  He commended Togbe Dzegblade for establishing an educational fund to assist brilliant but needy students in the area.</p>

          {/* Wide Ad */}
          <div className={styles.wideAd}>
            <img src="/images/other-stories/single-ad2.png" alt="Advertisement" />
          </div>

          {/* Second Body Text */}
          <p className={styles.bodyText}>The former President urged students to take advantage of the fund to enhance their skills. <br></br>  <br></br>  Mahama noted that prior to the political dispensation, chiefs played a prominent role in community leadership, ensuring development in their respective areas. <br></br>  <br></br>  He applauded Togbe Dzegblade for his 40-year tenure on the stool without chieftaincy disputes, which contributed to the rapid development of the community. <br></br>  <br></br>  Togbe Gbogbi Atsa V, Paramount Chief and President of the Adaklu Traditional Council, praised Togbe Dzegblade for his significant contributions to the development of Adaklu across various sectors. <br></br>  <br></br>  "I commend you for your hard work and excellent demonstration of neighbourliness that have helped to establish and maintain peaceful coexistence with other traditional areas," he stated.</p>

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
              {topStories.map((story, index) => (
                <li key={index} className={styles.storyItem}>
                  <span className={styles.redSquare}></span>
                  <p className={styles.storyText}>{story}</p>
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