import React from 'react'
import {NavContainer,Navs,NavUl,NavLi} from './StyledNav'
import { Link } from "react-scroll"
import { useTheme } from '../../Context/themeProvider'
import { Title } from '../../Theme/GlobalStyle';


function Nav({ toggle, mode }) {

  const ThemeMode = useTheme();

  return (

    <NavContainer theme = {ThemeMode[0]}>
      
      <Link 
        activeClass="active"
        to="main"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
      <Title>LSY.portfolio</Title>
      </Link>
      
      <Navs>
        <NavUl>
        <Link 
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <NavLi>About Me</NavLi>
        </Link>

        <Link 
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <NavLi>Portfolio</NavLi>
          </Link>

        <Link 
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <NavLi>Contact</NavLi>
        </Link>

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
