import React from 'react'
import {FooterContainer} from './StyledFooter'
import { useTheme } from '../../Context/themeProvider'

function Footer() {

  const ThemeMode = useTheme();

  return (
    <FooterContainer theme = {ThemeMode[0]}>
      <div>
        <p>© 2021 Lee Sookyoung.</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
