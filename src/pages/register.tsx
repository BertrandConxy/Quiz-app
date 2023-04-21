import React from 'react'
import Form from '../components/Common/Form'
import styled from 'styled-components'

const View = styled.div`
  height: 80vh;
`
export default function Register() {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = (e.currentTarget.elements[0] as HTMLInputElement).value
    console.log('registering', value)
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
