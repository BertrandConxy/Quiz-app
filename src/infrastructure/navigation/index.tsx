import {useState} from 'react'
import AppNavigation from './appNavigation'
import AccountNavigation from './accountNavigation'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'


export default function Navigation() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div>
        {isAuthenticated ? <AppNavigation /> : <AccountNavigation />}
    </div>
  )
}
