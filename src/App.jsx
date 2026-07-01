import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import PoliticsPage from './pages/PoliticsPage'
import SingleArticlePage from './pages/SingleArticlePage'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/politics" element={<PoliticsPage />} />
      <Route path="/politics/:id" element={<SingleArticlePage />} />
    </Routes>
  )
}