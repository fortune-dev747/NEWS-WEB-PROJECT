import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import PoliticsPage from './pages/PoliticsPage'
import SingleArticlePage from './pages/SingleArticlePage'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/politics" element={<PoliticsPage />} />
      <Route path="/politics/:articleId" element={<SingleArticlePage />} />
      <Route path="/africa" element={<HomePage />} />
      <Route path="/business" element={<HomePage />} />
      <Route path="/sport" element={<HomePage />} />
      <Route path="/health" element={<HomePage />} />
      <Route path="/tech" element={<HomePage />} />
      <Route path="/opinion" element={<HomePage />} />
    </Routes>
  )
}