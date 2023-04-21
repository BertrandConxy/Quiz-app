import { createContext, useContext, useEffect, useState } from 'react'
import { iChildrenNode } from '../../typeDefs/childrenNode'

import { login, register } from './authentication.service'
interface User {
  username: string
  email: string
  password: string
  score: number
}
interface iUserContext {
  user: User
  isAuthenticated: boolean
  onLogin: (username: string, password: string) => void
  onRegister: (username: string, email: string, password: string) => void
  onLogout: () => void
}
export const AuthenticationContext = createContext({} as iUserContext)

export function useAuthentication() {
  return useContext(AuthenticationContext)
}

export default function AuthenticationProvider({ children }: iChildrenNode) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const onLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  const onRegister = (username: string, email: string, password: string) => {
    const user = register(username, email, password)
    setUser(user)
    setIsAuthenticated(true)
  }
  const onLogin = (username: string, password: string) => {
    const user = login(username, password)
    setUser(user)
    setIsAuthenticated(true)
  }
  return (
    <AuthenticationContext.Provider
      value={{
        user: user!,
        isAuthenticated: isAuthenticated,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
