import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import PoliticsPage from './pages/PoliticsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/politics" element={<PoliticsPage />} />
    </Routes>
  )
}