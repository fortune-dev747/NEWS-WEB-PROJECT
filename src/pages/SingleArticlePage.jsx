import Navbar from '../components/Navbar/Navbar'
import ArticleHero from '../components/ArticleHero/ArticleHero'
import Footer from '../components/Footer/Footer'
import LatestNews from '../components/LatestNews/LatestNews'
import MissedStories from '../components/MissedStories/MissedStories'

export default function SingleArticlePage() {
  return (
    <>
      <Navbar adImages={['/images/navbar/navbar-politics-ad1.png', '/images/navbar/navbar-politics-ad2.png']} />
      <main>
        <ArticleHero />
        <LatestNews heading="PEOPLE ARE ALSO READING:" />
        <MissedStories />
      </main>
      <Footer />
    </>
  )
}