import Form from '../components/Common/Form'
import styled from 'styled-components'

const View = styled.div`
  height: 80vh;
`
export default function Login() {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = (e.currentTarget.elements[0] as HTMLInputElement).value
    console.log('Login', value)
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
