import styled from 'styled-components'
import { theme } from '../../infrastructure/theme'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${theme.colors.ui.secondary};
  padding: ${theme.space[3]};
`

export const NavLinks = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    gap: ${theme.sizes[1]};
  }
`

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-flow: column;
    padding: ${theme.sizes[1]};
    align-items: flex-start;
    gap: ${theme.sizes[1]};
    z-index: 11;
    background-color: ${theme.colors.ui.quaternary};
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
`

export const BrandLink = styled(Link)`
  font-size: ${theme.fontSizes.h1};
  font-weight: bold;
  color: ${theme.colors.ui.primary};
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    font-size: ${theme.fontSizes.h3};
  }
`
export const LinkItem = styled(NavLink)`
  color: ${theme.colors.ui.primary};
  font-size: ${theme.fontSizes.body};
  margin-right: ${theme.space[2]};
  transition: 0.4s;
  &:hover {
    filter: opacity(0.5);
  }
  &.active {
    color: ${theme.colors.ui.success};
  }
`

export const HamburgerButton = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: ${theme.sizes[2]};
    top: -10px;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`

export const CloseButton = styled(IoClose)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: ${theme.sizes[2]};
    top: -${theme.sizes[1]};
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
