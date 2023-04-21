import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from '../../pages/login'
import Register from '../../pages/register'
import NotFound from '../../pages/notFound'


export default function AccountNavigation() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
   </Routes>
  )
}
