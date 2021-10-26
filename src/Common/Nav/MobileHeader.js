import React,{useState} from 'react'
import {MobileHeaderContainer,NavUl,NavLi,
  MobileNavWrapper,MobileNavBar,
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
      <i className="fas fa-bars"
      onClick = {selectHandler}
      ></i>
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
        </NavLi>
      </NavUl>
      </MobileNavList>

      </MobileNavWrapper>
    </MobileHeaderContainer>
  )
}

export default MobileHeader
