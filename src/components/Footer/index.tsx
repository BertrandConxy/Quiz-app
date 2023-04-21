import React from 'react'
import { FooterContainer, BrandLink, Text } from './Footer.styles'
export default function Footer() {
  return (
    <FooterContainer>
      <BrandLink to="/">Quiz App</BrandLink>
      <Text>Copyright All Rights Reserved 2023</Text>
    </FooterContainer>
  )
}
