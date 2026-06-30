import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import TopStories from '../components/Top-stories/TopStories'
import OtherStoriesInPolitics from '../components/OtherStoriesInPolitics/OtherStoriesInPolitics'


export default function PoliticsPage() {
  return (
    <>
      <Navbar adImages={['/images/navbar/navbar-politics-ad1.png', '/images/navbar/navbar-politics-ad2.png']} />
      <main>
        <TopStories heading="Latest in politics" />
        <OtherStoriesInPolitics />
      </main>
      <Footer />
    </>
  )
}