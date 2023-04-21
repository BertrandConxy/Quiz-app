import styled from 'styled-components'

export const QuestionContainer = styled.div`
  margin-top: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h3``
export const Text = styled.p``

export const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
  width: 40%;
  margin-bottom: ${(props) => props.theme.space[3]};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Rounded = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid;
  border-color: #666af6;
  padding: 7px;
  text-align: center;
  margin-right: 5px;
`
