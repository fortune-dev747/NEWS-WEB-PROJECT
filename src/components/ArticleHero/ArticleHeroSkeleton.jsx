import styles from './ArticleHeroSkeleton.module.css'

export default function ArticleHeroSkeleton() {
  return (
    <article className={styles.skeleton}>

      {/* Buttons Row */}
      <div className={styles.buttonsRow}>
        <div className={styles.categoryBtn}></div>
        <div className={styles.shareBtn}></div>
      </div>

      {/* Headline */}
      <div className={styles.headline}></div>
      <div className={styles.headlineShort}></div>

      {/* Meta */}
      <div className={styles.meta}>
        <div className={styles.metaItem}></div>
        <div className={styles.metaItem}></div>
      </div>
      <div className={styles.author}></div>

      {/* Main Row */}
      <div className={styles.mainRow}>

        {/* Left Content */}
        <div className={styles.leftContent}>
          <div className={styles.mainImage}></div>
          <div className={styles.caption}></div>
          <div className={styles.bodyText}></div>
          <div className={styles.bodyText}></div>
          <div className={styles.bodyTextShort}></div>
          <div className={styles.wideAd}></div>
          <div className={styles.bodyText}></div>
          <div className={styles.bodyText}></div>
          <div className={styles.bodyTextShort}></div>
          <div className={styles.shareIcons}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className={styles.shareIcon}></div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeading}></div>
          {[1,2,3,4].map(i => (
            <div key={i} className={styles.storyItem}></div>
          ))}
          <div className={styles.ad463}></div>
          <div className={styles.ad600}></div>
        </div>

      </div>

    </article>
  )
}