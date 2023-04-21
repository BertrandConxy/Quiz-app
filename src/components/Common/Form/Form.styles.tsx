import { theme } from '../../../infrastructure/theme'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const FormContainer = styled.div`
background: ${theme.colors.ui.tertiary};
width: 40%;
padding: ${theme.space[2]};
margin: auto;
margin-top: 10rem;
border-radius: ${theme.space[1]};
display: flex;
align-items: center;
flex-direction: column;
`
export const LoginBtn = styled.button`
  padding: ${theme.space[2]};
  margin-right: ${theme.space[1]};
  border: none;
  border-radius: ${theme.space[1]};
  background-color: ${theme.colors.ui.success};
  font-weight: bold;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    filter: opacity(0.5);
  }
`

export const InputForm = styled.form`
display: flex;
margin-top: 1rem;
justify-content: center;
align-items: center;
flex-direction: column;
gap: ${theme.sizes[0]};
`

export const Input  = styled.input`
 padding: ${theme.sizes[0]};
 border: none;
 border-radius: 5px;

 &:focus {
    outline: 1px solid rgba(255, 255, 255, 0.5);
 }
`
export const TextLink  = styled(Link)`
color: ${theme.colors.ui.success}
text-decoration: underline;
`
