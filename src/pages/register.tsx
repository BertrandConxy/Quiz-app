import React from 'react'
import Form from '../components/Common/Form'
import styled from 'styled-components'
import { useAuthentication } from '../services/authentication/authentication.context'
import { useNavigate } from 'react-router-dom'
const View = styled.div`
  height: 80vh;
`
export default function Register() {
  const navigate = useNavigate()
  const { onRegister } = useAuthentication()

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userName = (e.currentTarget.elements[0] as HTMLInputElement).value
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value
    const password = (e.currentTarget.elements[2] as HTMLInputElement).value
    const result = onRegister(userName, email, password)
    navigate('/')
  }
  return (
    <View>
      <Form
        title="Sign Up"
        btnText="Register"
        subText="Have account"
        link="Login"
        path="/"
        handleSubmit={handleRegister}
        type="register"
      />
    </View>
  )
}
