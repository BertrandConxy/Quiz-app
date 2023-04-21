import {
  BrandLink,
  NavContainer,
  LinkItem,
  NavBox,
  NavLinks,
  HamburgerButton,
  CloseButton,
} from './NavBar.styles'
import Button from '../Common/Button'
import { useState, useEffect } from 'react'
import { Links } from '../../data/navigation'

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  const closeNav = () => {
    setToggleMenu(false)
  }
  const openNav = () => {
    setToggleMenu(true)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  useEffect(() => {
  
  }, [])

  return (
    <NavContainer>
      <BrandLink to="/">Quiz App</BrandLink>
      {(toggleMenu || screenWidth > 768) && (
        <NavBox>
          <CloseButton onClick={closeNav} />
          <NavLinks>
            {Links.map(({ id, path, text }) => (
              <LinkItem to={path} key={id} onClick={closeNav}>
                {text}
              </LinkItem>
            ))}
          </NavLinks>
          <Button text='Log Out' handleClick={()=> console.log('logged out')} danger/>
        </NavBox>
      )}
      <HamburgerButton onClick={openNav} />
    </NavContainer>
  )
}
