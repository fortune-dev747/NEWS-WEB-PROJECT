import styles from './Footer.module.css'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function Footer() {
  const linkRows = [
    ['Home', 'Business', 'Tech', 'Photos', 'About Us'],
    ['Africa', 'Sport', 'Opinion', 'AGC Archive', 'Contact Us'],
    ['Politics', 'Health', 'Videos', 'Privacy Policy', 'Advert Rate'],
  ]

  const mobileLinkRows = [
    ['Home', 'Sport', 'AGC Archive'],
    ['Africa', 'Business', 'Photos'],
    ['Politics', 'Health', 'Privacy Policy'],
    ['Tech', 'About Us', ''],
    ['Opinion', 'Contact Us', ''],
    ['Videos', 'Advert Rate', ''],
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top Row */}
        <div className={styles.topRow}>
          <img src="/images/footer/NEXUS-footer.png" alt="NEXUS News" className={styles.logo} />
          <div className={styles.socials}>
            <a href="#"><img src="/images/footer/IG.png" alt="IG" /></a>
            <a href="#"><img src="/images/footer/FB.png" alt="FB" /></a>
            <a href="#"><img src="/images/footer/X.png" alt="X" /></a>
            <a href="#"><img src="/images/footer/tracking.png" alt="tracking" /></a>
            <a href="#"><img src="/images/footer/LinkedIn.png" alt="LinkedIn" /></a>
          </div>
        </div>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search Nexus News" className={styles.searchInput} />
          <FaMagnifyingGlass className={styles.searchIcon} />
        </div>

        {/* Desktop Links Grid */}
        <div className={styles.linksGrid}>
          {linkRows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.linkRow}>
              {row.map((link, linkIndex) => (
                <a key={linkIndex} href="#" className={styles.link}>{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile Links Grid */}
        <div className={styles.mobileLinksGrid}>
          {mobileLinkRows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.mobileLinkRow}>
              {row.map((link, linkIndex) => (
                link ? <a key={linkIndex} href="#" className={styles.link}>{link}</a> : <span key={linkIndex}></span>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>© 2026 Nexus News. All Rights Reserved.</p>

      </div>
    </footer>
  )
}