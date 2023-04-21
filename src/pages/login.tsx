import Form from '../components/Common/Form'
import styled from 'styled-components'
import { useState } from 'react'

const View = styled.div`
  height: 80vh;
`
interface User {
  userName: string
  password: string
}
export default function Login() {
  const [user, setUser] = useState<User>()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userName = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    setUser({ userName, password })
    console.log('Login')
  }
  return (
    <View>
      <Form
        title="Login"
        btnText="Login"
        subText="Dont Have account"
        link="Signup"
        path="/register"
        handleSubmit={handleLogin}
      />
    </View>
  )
}
