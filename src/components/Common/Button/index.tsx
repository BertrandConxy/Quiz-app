import { StyledButton } from './Button.styles'
interface Props {
  text: string
  handleClick: () => void
  danger?: boolean
}

export default function Button({ text, handleClick, danger }: Props) {
  return (
    <StyledButton
      onClick={handleClick}
      className={`${danger ? 'danger' : null}`}
    >
      {text}
    </StyledButton>
  )
}
