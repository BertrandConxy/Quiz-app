import React, { useState, useEffect } from 'react'
import Button from '../Common/Button'
import { useAuthentication } from '../../services/authentication/authentication.context'

import {
  QuestionBox,
  QuestionContainer,
  Title,
  Text,
  AnswerStatusView,
  Direct,
} from './QuestionCard.styles'
import { iQuestion } from '../../pages/quiz'

interface Props {
  Questionnaire: iQuestion[]
}

interface AnswerObject {
  question: number
  answer: boolean
}

export default function QuestionCard({ Questionnaire }: Props) {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [answerStatus, setAnswerStatus] = useState<boolean | null>(null)
  const [answers, setAnswers] = useState<AnswerObject[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const currentQuestion = Questionnaire[index]
  const {
    id,
    question,
    option1,
    option2,
    option3,
    option4,
    answer,
  } = currentQuestion

  const handleClick = (answer: string) => {
    setSelectedAnswer(answer)
    return undefined
  }

  const { user } = useAuthentication()

  const updateUser = (email: string) => {
    let users = JSON.parse(localStorage.getItem('users') || '[]')

    // Find the user by email
    const userIndex = users.findIndex((user: any) => user.email === email)
    if (userIndex === -1) {
      throw new Error('User not found')
    }

    // Update the user's data
    const updatedUser = {
      ...users[userIndex],
      score: points,
    }
    users[userIndex] = updatedUser

    // Save the updated user to local storage
    localStorage.setItem('users', JSON.stringify(users))

    return updatedUser
  }

  useEffect(() => {
    if (selectedAnswer != '') {
      if (selectedAnswer == answer) {
        setPoints((points) => points + 1)
        setAnswerStatus(true)
        setAnswers([...answers, { question: index + 1, answer: true }])
      } else {
        setAnswerStatus(false)
        setAnswers([...answers, { question: index + 1, answer: false }])
      }
    }
  }, [selectedAnswer])

  // resetting selectedAnswer after each question
  useEffect(() => {
    setSelectedAnswer('')
    setAnswerStatus(false)
  }, [index])
  return (
    <div>
      <QuestionContainer>
        <Title>{question}</Title>
        <QuestionBox
          style={selectedAnswer === option1 ? styles.selected : undefined}
          onClick={() => handleClick(option1)}
        >
          <Text>{option1}</Text>
        </QuestionBox>
        <QuestionBox
          style={selectedAnswer === option2 ? styles.selected : undefined}
          onClick={() => handleClick(option2)}
        >
          <Text>{option2}</Text>
        </QuestionBox>
        <QuestionBox
          style={selectedAnswer === option3 ? styles.selected : undefined}
          onClick={() => handleClick(option3)}
        >
          <Text>{option3}</Text>
        </QuestionBox>
        <QuestionBox
          style={selectedAnswer === option4 ? styles.selected : undefined}
          onClick={() => handleClick(option4)}
        >
          <Text>{option4}</Text>
        </QuestionBox>
        {answerStatus === null ? null : (
          <AnswerStatusView>
            {index + 1 >= Questionnaire.length ? (
              <Direct
                to={'/result'}
                state={{ answers: answers, points: points }}
              >
                <Button
                  handleClick={() => updateUser(user.email)}
                  text="Done"
                />
              </Direct>
            ) : answerStatus === null ? null : (
              <Button
                handleClick={() => setIndex(index + 1)}
                text="Next Question"
              />
            )}
          </AnswerStatusView>
        )}
      </QuestionContainer>
    </div>
  )
}

const styles = {
  selected: {
    backgroundColor: '#757575',
  },
}
