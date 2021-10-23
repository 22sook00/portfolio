import React from 'react'
import {FooterContainer} from './StyledFooter'
import { useTheme } from '../../Context/themeProvider'

function Footer() {

  const ThemeMode = useTheme();

  return (
    <FooterContainer theme = {ThemeMode[0]}>
      <div>
      <p>All rights</p>
      <p>by LeeSookyoung.</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
