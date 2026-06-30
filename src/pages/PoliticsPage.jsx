import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import TopStories from '../components/Top-stories/TopStories'

export default function PoliticsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TopStories heading="Latest in politics" />
        {/* Other Stories In Politics section goes here */}
      </main>
      <Footer />
    </>
  )
}