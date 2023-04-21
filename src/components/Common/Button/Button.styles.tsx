import { theme } from '../../../infrastructure/theme'
import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: ${theme.space[2]};
  margin-right: ${theme.space[1]};
  border: none;
  border-radius: ${theme.space[1]};
  background-color: ${theme.colors.ui.success};
  font-weight: bold;
  transition: 0.4s;
  cursor: pointer;
  &.danger {
    background-color: ${theme.colors.ui.danger};
  }
  &:hover {
    filter: opacity(0.5);
  }
`
