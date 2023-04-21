import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from '../../pages/home'
import Layout from '../../pages/layout'
import Result from '../../pages/result'
import NotFound from '../../pages/notFound'

export default function AccountNavigation() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Result />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
