import React,{useState} from 'react'
import {MobileHeaderContainer,NavUl,NavLi,
  MobileNavWrapper,MobileNavBar,MobileHamburger,
  MobileNavList} from './StyledNav'
import { Link } from "react-scroll"
import { useTheme } from '../../Context/themeProvider'
import { Title } from '../../Theme/GlobalStyle';

function MobileHeader({ toggle, mode }) {

  const ThemeMode = useTheme();
  const [select, setSelect] = useState(false)

  const selectHandler = () => {
    setSelect((prev)=>!prev)
  }

  return (

    <MobileHeaderContainer theme = {ThemeMode[0]}>
      <MobileNavWrapper theme = {ThemeMode[0]}>

      <MobileNavBar theme = {ThemeMode[0]}>
      <Link 
        activeClass="active"
        to="main"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
      <Title navTitle>LSY.portfolio</Title>
      </Link>

      <MobileHamburger theme = {ThemeMode[0]}
      onClick = {selectHandler} 
      className = 'menu-trigger'>
        <span id = 'top' className = 'bar-1'></span>
        <span id = 'middle-1' className = 'bar-2'></span>
        <span id = 'middle-2' className = 'bar-2'></span>
        <span id = 'bottom' className = 'bar-1'></span>
      </MobileHamburger>

      </MobileNavBar>

      <MobileNavList 
      className = {select===true ? 'focus' : 'not-focus'}
      theme = {ThemeMode[0]}>
      <NavUl className = {select===true ? 'focus' : 'not-focus'}>
      <Link 
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <NavLi theme = {ThemeMode[0]}>About Me</NavLi>
      </Link>

        <Link 
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <NavLi theme = {ThemeMode[0]}>Portfolio</NavLi>
        </Link>

        <Link 
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <NavLi theme = {ThemeMode[0]}>Contact</NavLi>
        </Link>
        
        <NavLi onClick={toggle} mode={mode} theme = {ThemeMode[0]}>
        {ThemeMode[0] === 'light' ? 'Dark Mode' : 'White Mode'}
        </NavLi>
      </NavUl>
      </MobileNavList>

      </MobileNavWrapper>
    </MobileHeaderContainer>
  )
}

export default MobileHeader
