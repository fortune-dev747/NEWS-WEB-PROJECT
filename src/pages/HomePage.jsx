import Navbar from '../components/Navbar/Navbar'
import TopStories from '../components/TopStories/TopStories'
import LatestNews from '../components/LatestNews/LatestNews'
import MoreStories from '../components/MoreStories/MoreStories'
import Politics from '../components/Politics/Politics'
import Business from '../components/Business/Business'
import Sport from '../components/Sport/Sport'
import FeaturedStories from '../components/FeaturedStories/FeaturedStories'
import NewsInVideos from '../components/NewsInVideos/NewsInVideos'
import NewsInPictures from '../components/NewsInPictures/NewsInPictures'
import MissedStories from '../components/MissedStories/MissedStories'
import Footer from '../components/Footer/Footer'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <TopStories />
        <LatestNews />
        <MoreStories />
        <Politics />
        <Business />
        <Sport />
        <FeaturedStories />
        <NewsInVideos />
        <NewsInPictures />
        <MissedStories />
      </main>
      <Footer />
    </>
  )
}