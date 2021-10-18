import React from 'react';
import { useTheme } from '../../Context/themeProvider'
import { Container , ThemeContainer  } from './StyledAppLayout'
import NightMode from '../NightMode/NightMode'

const AppLayout = ({children}) => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <Container>
      <NightMode toggle={toggleTheme} mode={ThemeMode}/>
      <ThemeContainer>{children}</ThemeContainer> 
    </Container>
  )
}

export default AppLayout;

