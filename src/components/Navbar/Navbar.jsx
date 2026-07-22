import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { FaMagnifyingGlass, FaBars, FaXmark, FaCaretDown, FaCircleUser } from 'react-icons/fa6'
import { useState } from 'react'

export default function Navbar({ adImages = ['/images/navbar/ad-navbar.png'] }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <header className={styles.header}>

      {/* Desktop Bar 1 */}
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
        <div className={styles.adBanner}>
          {adImages.map((img, index) => (
            <img key={index} src={img} alt="Advertisement" />
          ))}
        </div>

        {/* Desktop Bar 2 */}
        <div className={styles.mainNav}>
          <div className={styles.mainNavLeft}>
            <a href="#" className={styles.logo}>
              <img src="/images/navbar/NEXUS-navbar.png" alt="NEXUS News" width={143} height={59} />
            </a>
            <nav className={styles.mainLinks}>
              <NavLink to="/" end className={({ isActive }) => `${styles.mainLink} ${isActive ? styles.active : ''}`}>Home</NavLink>
              <NavLink to="/africa" className={({ isActive }) => `${styles.mainLink} ${isActive ? styles.active : ''}`}>Africa</NavLink>
              <NavLink to="/politics" className={({ isActive }) => `${styles.mainLink} ${isActive ? styles.active : ''}`}>Politics</NavLink>
              <NavLink to="/business" className={({ isActive }) => `${styles.mainLink} ${isActive ? styles.active : ''}`}>Business</NavLink>
              <NavLink to="/sport" className={({ isActive }) => `${styles.mainLink} ${isActive ? styles.active : ''}`}>Sport</NavLink>
              <NavLink to="/health" className={({ isActive }) => `${styles.mainLink} ${isActive ? styles.active : ''}`}>Health</NavLink>
              <NavLink to="/tech" className={({ isActive }) => `${styles.mainLink} ${isActive ? styles.active : ''}`}>Tech</NavLink>
              <NavLink to="/opinion" className={({ isActive }) => `${styles.mainLink} ${isActive ? styles.active : ''}`}>Opinion</NavLink>
            </nav>
          </div>
          <nav className={styles.mainNavRight}>
            <h5>|</h5>
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

      {/* Mobile Bar */}
      <div className={styles.mobileBar}>
        <div className={styles.mobileLeft}>
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
          <button className={styles.mobileSearch}><FaMagnifyingGlass /></button>
        </div>
        <a href="#" className={styles.mobileLogo}>
          <img src="/images/navbar/NEXUS-navbar.png" alt="NEXUS News" width={100} height={44} />
        </a>
        <div className={styles.mobileRight}>
          <FaCircleUser className={styles.profileIcon} />
          <FaCaretDown className={styles.dropdownIcon} />
        </div>
      </div>

      {/* Mobile Ad Banner */}
      <div className={styles.mobileAdBanner}>
        <img src={adImages[0]} alt="Advertisement" />
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerLinks}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/africa" className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink} onClick={() => setMenuOpen(false)}>Africa</NavLink>
          <NavLink to="/politics" className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink} onClick={() => setMenuOpen(false)}>Politics</NavLink>
          <NavLink to="/business" className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink} onClick={() => setMenuOpen(false)}>Business</NavLink>
          <NavLink to="/sport" className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink} onClick={() => setMenuOpen(false)}>Sport</NavLink>
          <NavLink to="/health" className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink} onClick={() => setMenuOpen(false)}>Health</NavLink>
          <NavLink to="/tech" className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink} onClick={() => setMenuOpen(false)}>Tech</NavLink>
          <NavLink to="/opinion" className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink} onClick={() => setMenuOpen(false)}>Opinion</NavLink>
        </nav>
      </div>

    </header>
  )
}