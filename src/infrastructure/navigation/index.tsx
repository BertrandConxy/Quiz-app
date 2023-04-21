import { useState } from 'react'
import AppNavigation from './appNavigation'
import AccountNavigation from './accountNavigation'

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <div>{isAuthenticated ? <AppNavigation /> : <AccountNavigation />}</div>
  )
}
