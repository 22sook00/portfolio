import React from 'react'
import {NavContainer,Navs,NavUl,NavLi} from './StyledNav'
import { useTheme } from '../../Context/themeProvider'
import { Title } from '../../Theme/GlobalStyle';


function Nav({ toggle, mode }) {

  const ThemeMode = useTheme();

  return (

    <NavContainer theme = {ThemeMode[0]}>
      <Title>LSY.portfolio</Title>
      <Navs>
        <NavUl>
          <NavLi>About Me</NavLi>
          <NavLi>Portfolio</NavLi>
          <NavLi>Contact</NavLi>
          <NavLi onClick={toggle} mode={mode}>
            {ThemeMode[0] === 'light' ? 'Dark Mode' : 'White Mode'}
            <div className = {mode === 'dark' ? 'toggle-container toggle--checked' : 'toggle-container'}/>
            <div className = {mode === 'dark' ? 'toggle-circle toggle--checked' : 'toggle-circle'} />
          </NavLi>
        </NavUl>
      </Navs>
    </NavContainer>
  )
}

export default Nav
