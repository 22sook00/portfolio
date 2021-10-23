import React,{useState} from 'react'
import {MobileHeaderContainer,NavUl,NavLi,
  MobileNavWrapper,MobileNavBar,
  MobileNavList} from './StyledNav'
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
      <Title navTitle>LSY.portfolio</Title>
      <i className="fas fa-bars"
      onClick = {selectHandler}
      ></i>
      </MobileNavBar>

      <MobileNavList 
      className = {select===true ? 'focus' : 'not-focus'}
      theme = {ThemeMode[0]}>
      <NavUl className = {select===true ? 'focus' : 'not-focus'}>
        <NavLi>About Me</NavLi>
        <NavLi>Portfolio</NavLi>
        <NavLi>Contact</NavLi>
        
        <NavLi onClick={toggle} mode={mode}>
        {ThemeMode[0] === 'light' ? '🌜' : '🌞'}
          <div className = {mode === 'dark' ? 'toggle-container toggle--checked' : 'toggle-container'}/>
          <div className = {mode === 'dark' ? 'toggle-circle toggle--checked' : 'toggle-circle'} />
        </NavLi>
      </NavUl>
      </MobileNavList>

      </MobileNavWrapper>
    </MobileHeaderContainer>
  )
}

export default MobileHeader
