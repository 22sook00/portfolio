import React from 'react'
import {LandingWrapper,TextBox,ImgBox } from './StyledLanding'
import {FlexBox} from '../../Theme/GlobalStyle'
// import { useTheme } from '../../Context/themeProvider'

function LandingContainer() {

  return (
    <LandingWrapper>
      <FlexBox>
        <TextBox>
          <h1>LEE SOOKYOUNG</h1>
          <h2>FrontENdDeveloper</h2>
          <p>새로운 시작이 기대되는</p>
          <p>신입 프론트엔드 개발자</p>
          <p><span>이숙영</span> 입니다.</p>
        </TextBox>

        <ImgBox>
          <img src = '/' alt = '이미지사진'/>
        </ImgBox>
      </FlexBox>
    </LandingWrapper>
  )
}

export default LandingContainer
