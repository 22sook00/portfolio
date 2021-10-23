import React from 'react'
import {LandingWrapper,TextBox,H1,H2,H3,P } from './StyledLanding'
import {FlexBox} from '../../Theme/GlobalStyle'
import { useTheme } from '../../Context/themeProvider'

function LandingContainer() {

  const ThemeMode = useTheme();

  return (
    <LandingWrapper theme = {ThemeMode[0]} id="main">
      <FlexBox col className = 'flex'>
        <TextBox>
          <H3>"더 나은 코드, <br/>더 나은 디자인을 위해 고민하는 개발자."</H3>

          <H1>LEE SOOKYOUNG</H1>
          <H2>FrontEndDeveloper<br/>
          이숙영 입니다.</H2>
        </TextBox>
      </FlexBox>
    </LandingWrapper>
  )
}

export default LandingContainer
