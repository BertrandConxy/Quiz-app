import { theme } from '../../../infrastructure/theme'
import styled from 'styled-components'

export const FormContainer = styled.div`
background: ${theme.colors.ui.tertiary};
width: 50%;
margin: auto;
margin-top: 10rem;
border-radius: ${theme.space[1]};
display: flex;
align-items: center;
flex-direction: column;
`