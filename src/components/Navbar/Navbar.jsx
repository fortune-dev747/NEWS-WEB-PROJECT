import styles from './Navbar.module.css'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function Navbar() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <header className={styles.header}>

      {/* Bar 1 */}
      <div className={styles.topBar}>
        <nav className={styles.topLinks}>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">AGC Archive</a>
          <a href="#">Advert Rate</a>
          <a href="#">Privacy Policy</a>
          <a href="#">AGC VIP</a>
        </nav>
        <div className={styles.topRight}>
          <span className={styles.date}>{today} |</span>
          <div className={styles.socials}>
            <a href="#"><img src="/images/navbar/IG.png" alt="IG" /></a>
            <a href="#"><img src="/images/navbar/FB.png" alt="FB" /></a>
            <a href="#"><img src="/images/navbar/X.png" alt="X" /></a>
            <a href="#"><img src="/images/navbar/tracking.png" alt="tracking" /></a>
            <a href="#"><img src="/images/navbar/LinkedIn.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>

      {/* Ad Banner + Bar 2 */}
      <div className={styles.mainSection}>

        {/* Ad Banner */}
        <div className={styles.adBanner}>
          <img src="/images/navbar/ad-navbar.png" alt="Advertisement" />
        </div>

        {/* Bar 2 */}
        <div className={styles.mainNav}>
          <div className={styles.mainNavLeft}>
            <a href="#" className={styles.logo}>
              <img src="/images/navbar/AGC-navbar.png" alt="AGC News" width={93} height={59} />
            </a>
            <nav className={styles.mainLinks}>
              <a href="#" className={`${styles.mainLink} ${styles.active}`}>Home</a>
              <a href="#">Africa</a>
              <a href="#">Politics</a>
              <a href="#">Business</a>
              <a href="#">Sport</a>
              <a href="#">Health</a>
              <a href="#">Tech</a>
              <a href="#">Opinion</a>
            </nav>
          </div>
          <nav className={styles.mainNavRight}>
            <h5 href="#">|</h5>
            <a href="#">Photos</a>
            <a href="#">Videos</a>
            <a href="#">Audio</a>
            <button className={styles.searchBtn}><FaMagnifyingGlass /></button>
            <a href="#" className={styles.login}>Log In</a>
            <span className={styles.slash}>/</span>
            <a href="#" className={styles.signup}>Sign Up</a>
          </nav>
        </div>

      </div>

    </header>
  )
}