import React from 'react';
import { useTheme } from '../../Context/themeProvider'
import { Container , ThemeContainer } from './StyledAppLayout'
import Nav from '../Nav/Nav'
import MobileHeader from '../Nav/MobileHeader'

const AppLayout = ({children}) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <Container className = 'appLayout'>
      <Nav toggle={toggleTheme} mode={ThemeMode}/>
      <MobileHeader toggle={toggleTheme} mode={ThemeMode}/>
      <ThemeContainer>{children}</ThemeContainer> 
    </Container>
  )
}

export default AppLayout;

