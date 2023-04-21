import React from 'react'
import {
  QuestionBox,
  QuestionContainer,
  Title,
  Text,
} from './QuestionCard.styles'

export default function QuestionCard() {
  return (
    <QuestionContainer>
      <Title>What is the biggest country in Africa?</Title>
      <QuestionBox>
        <Text>Ghana</Text>
      </QuestionBox>
      <QuestionBox>
        <Text>Ghana</Text>
      </QuestionBox>
    </QuestionContainer>
  )
}
