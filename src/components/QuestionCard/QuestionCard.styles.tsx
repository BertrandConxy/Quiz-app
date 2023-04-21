import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const QuestionContainer = styled.div`
  margin-top: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h2`
  margin-bottom: 4rem;
`
export const Text = styled.p``

export const QuestionBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
  width: 40%;
  margin-bottom: ${(props) => props.theme.space[3]};
  cursor: pointer;
  background-color: transparent;
  transition: 0.4s;
  &.active {
    background-color: ${(props) => props.theme.colors.ui.tertiary};
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.ui.tertiary};
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const AnswerStatusView = styled.div`
  margin-top: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[0]};
`

export const Direct = styled(Link)``
