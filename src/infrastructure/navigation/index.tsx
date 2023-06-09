import { useState } from 'react'
import AppNavigation from './appNavigation'
import AccountNavigation from './accountNavigation'
import { useAuthentication } from '../../services/authentication/authentication.context'

export default function Navigation() {
  const { isAuthenticated } = useAuthentication()
  return (
    <div>{isAuthenticated ? <AppNavigation /> : <AccountNavigation />}</div>
  )
}
