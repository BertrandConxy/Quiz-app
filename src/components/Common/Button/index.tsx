import { StyledButton } from './Button.styles'
interface Props {
  text: string
  handleClick: () => void
}

export default function Button({ text, handleClick }: Props) {
  return (
    <StyledButton onClick={handleClick}>
      {text}
    </StyledButton>
  )
}
