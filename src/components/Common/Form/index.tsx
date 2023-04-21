import {
  FormContainer,
  LoginBtn,
  InputForm,
  Input,
  TextLink,
} from './Form.styles'
import { useState } from 'react'

interface Props {
  title: string
  btnText: string
  subText: string
  link: string
  path: string
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  type: string
}

export default function Form({
  title,
  btnText,
  subText,
  link,
  path,
  handleSubmit,
  type,
}: Props) {
  return (
    <FormContainer>
      <h3>{title}</h3>
      <InputForm onSubmit={handleSubmit}>
        <div>
          <Input type="text" placeholder="Username" required />
        </div>
        {type === 'register' && (
          <div>
            <Input type="text" placeholder="Email" required />
          </div>
        )}
        <div>
          <Input type="password" placeholder="Password" required />
        </div>
        <LoginBtn>{btnText}</LoginBtn>
        <p>
          {subText}? <TextLink to={path}>{link}</TextLink>{' '}
        </p>
      </InputForm>
    </FormContainer>
  )
}
