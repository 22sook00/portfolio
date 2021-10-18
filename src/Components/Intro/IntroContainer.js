import React from 'react'
import {TextBox,ImgBox } from './StyledIntro'
import {Wrapper,Title} from '../../Theme/GlobalStyle'

function IntroContainer() {
  return (
    <Wrapper>
      <Title>Who Am I ?</Title>
        <ImgBox>
          <img src = '/' alt = '이미지사진'/>
        </ImgBox>

        <TextBox>
          <h2>소제목1</h2>
          <p>자기소개어쩌고저쩌고</p>
          <h2>소제목2</h2>
          <p>자기소개어쩌고저쩌고22</p>
        </TextBox>
    </Wrapper>
  )
}

export default IntroContainer
