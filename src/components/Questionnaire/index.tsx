import React from 'react'
import QuestionCard from '../QuestionCard'
import { iQuestion } from '../../pages/quiz'

interface Props {
  Questionnaire: iQuestion[]
}

export default function Questionnaire({ Questionnaire }: Props) {
  return <div>Questionnaire</div>
}
