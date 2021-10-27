import React,{useState,useEffect} from 'react'
import {NavContainer,Navs,NavUl,NavLi} from './StyledNav'
import { Link } from "react-scroll"
import { useTheme } from '../../Context/themeProvider'
import { Title } from '../../Theme/GlobalStyle';


function Nav({ toggle, mode }) {

  const [navBg , setNavBg] = useState('')
  const [scrollY, setScrollY] = useState(0);

  const ScrollStatus = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 200) {
      setNavBg('makeBgColor');
    }else{
      setNavBg('');
    }
  };
  useEffect(() => {
    const chkScroll = () => {
      window.addEventListener("scroll", ScrollStatus);
    };
    chkScroll();
    return () => {
      window.removeEventListener("scroll", ScrollStatus);
    };
  });

  const ThemeMode = useTheme();

  return (
    <NavContainer 
    className = {navBg}
    theme = {ThemeMode[0]}
    >
      
      <Link 
        activeClass="active"
        to="main"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
      <Title navTitle>LSY.portfolio</Title>
      </Link>
      
      <Navs >
        <NavUl>
        <Link 
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <NavLi className={navBg+'Text'}>About Me</NavLi>
        </Link>

        <Link 
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <NavLi className={navBg+'Text'}>Project</NavLi>
          </Link>

        <Link 
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <NavLi className={navBg+'Text'}>Contact</NavLi>
        </Link>

          <NavLi 
          className={navBg+'Text'}
          onClick={toggle} mode={mode}>
            {ThemeMode[0] === 'light' ? 'Dark Mode' : 'White Mode'}
          </NavLi>
        </NavUl>
      </Navs>
    </NavContainer>
  )
}

export default Nav
