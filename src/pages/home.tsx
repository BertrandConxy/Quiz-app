import styled from 'styled-components'
import Button from '../components/Common/Button'
import { useNavigate } from 'react-router-dom'

const View = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  margin-bottom: 4rem;
`
const SubTitle = styled.h2`
  margin: 1rem;
`
const Text = styled.p`
  margin-top: 0.7rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`
export default function Home() {
  const navigate = useNavigate()
  return (
    <View>
      <Title>Welcome to the Quiz Session</Title>
      <SubTitle>Here are the instructions for the quiz:</SubTitle>
      <Content>
        <Text>1. For each correct answer you get 1 point</Text>
        <Text>2. There is no negative marking for the wrong answer</Text>
        <Text>3. There is no time limit for the questions</Text>
        <Text>4. All questions are compulsory</Text>
      </Content>
      <Button text="Start Quiz" handleClick={() => navigate('/quiz')} />
    </View>
  )
}
