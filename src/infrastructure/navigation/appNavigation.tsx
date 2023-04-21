import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from '../../pages/home'
import Quiz from '../../pages/quiz'
import Layout from '../../pages/layout'
import Result from '../../pages/result'
import NotFound from '../../pages/notFound'

export default function AccountNavigation() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
