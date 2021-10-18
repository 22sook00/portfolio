import React from 'react'
import {NavContainer,NavUl,NavLi} from './StyledNav'
import {Title} from '../../Theme/GlobalStyle'

function Nav() {
  return (
    <NavContainer>
      <Title>Context</Title>
      <NavUl>
        <NavLi>Who Am I</NavLi>
        <NavLi>Skills</NavLi>
        <NavLi>Portfolio</NavLi>
        <NavLi>Contact</NavLi>
      </NavUl>
    </NavContainer>
  )
}

export default Nav
