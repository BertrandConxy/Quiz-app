import React from 'react'
import QuestionCard from '../components/QuestionCard'
export interface iQuestion {
  id: number
  question: string
  option1: string
  option2: string
  option3: string
  option4: string
  answer: string
}

const questionnaire: iQuestion[] = [
  {
    id: 1,
    question: 'what is the biggest lake in the world?',
    option1: 'Tanganyika',
    option2: 'Nakuru',
    option3: 'Kivu',
    option4: 'Dakar',
    answer: 'Kivu',
  },
  {
    id: 2,
    question: '2 + 100 = ?',
    option1: '70',
    option2: '50',
    option3: '102',
    option4: '90',
    answer: '102',
  },
  {
    id: 3,
    question: 'who invented the telephone?',
    option1: 'Graham Bell',
    option2: 'Gregory Tone',
    option3: 'Kiriban Peter',
    option4: 'Christopher Columbus',
    answer: 'Graham Bell',
  },
]

export default function Quiz() {
  return <QuestionCard Questionnaire={questionnaire} />
}
