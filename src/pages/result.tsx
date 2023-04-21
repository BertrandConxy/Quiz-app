import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Button from '../components/Common/Button'
import { Link } from 'react-router-dom'
import { useAuthentication } from '../services/authentication/authentication.context'

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  margin-top: 4rem;
  test-align: center;
`

const Title = styled.h2`
  text-align: center;
`
const SubTitle = styled.h3`
  margin-top: 1rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 50%;
  margin: auto;
  margin-bottom: 4rem;
`

const Span = styled.span`
  margin-left: 2rem;
`

export default function Result() {
  const { user } = useAuthentication()
  const location = useLocation()
  const users = localStorage.getItem('users')
  const stringifyUsers = JSON.parse(users!)

  const character = stringifyUsers.find(
    (u: any) => u.username === user.username && u.password === user.password,
  )
  return (
    <ResultContainer>
      <Title>Recent Results</Title>
      <Content>
        <SubTitle>
          Names: <Span>{character.username}</Span>
        </SubTitle>
        <SubTitle>
          Scores: <Span>{character.score}</Span>
        </SubTitle>
      </Content>
      <Link to="/">
        <Button handleClick={() => undefined} text="Back To Home" />
      </Link>
    </ResultContainer>
  )
}
