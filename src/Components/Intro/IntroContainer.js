import React from 'react'
import {H2,H4,TextBox,ImgBox,ResumeBtn } from './StyledIntro'
import {Wrapper,FlexBox,Title} from '../../Theme/GlobalStyle'

function IntroContainer() {
  return (
    <Wrapper id = 'aboutme'>
      <Title>About Me</Title>
      <TextBox>      
        <H2>공항 지상직에서 프론트엔드 개발자로,</H2>
        <p>8년간의 공항 생활을 통해 얻은 경험들은 프론트엔드 개발과 
        많이 맞닿아 있습니다. 그 간 경험을 녹여내 앞으로
        제가 지향하는 개발자의 모습은 다음과 같습니다.</p>
      </TextBox>

      <FlexBox col> 
        <ImgBox>
          <img src = '/img/resumeImg.jpg' alt = '이숙영증명사진'/>
        </ImgBox>
        
        <TextBox>
          <H4>[ Keep learning : 끊임없이 배워라 ]</H4>
          <p>항상 호기심이 가득하여 배우는 것을 두려워 하지 않고 도태되지 않습니다.</p>
          <p>배운것을 내 것으로 만들 수 있는 개발자가 되기 위해 노력합니다.</p>
        </TextBox>

        <TextBox>
          <H4>[ User Friendly : 사용자를 생각해라 ]</H4>
          <p>사용자가 보기 쉽고 간편한 UI/UX 를 구현하고자 합니다.</p>
          <p>계속 들어와보고 싶은 웹/앱을 만들기 위해 항상 고민합니다.</p>
        </TextBox>

        <TextBox>
          <H4>[ Smooth communication : 소통해라 ]</H4>
          <p>협업으로 이루어지는 개발업무는 커뮤니케이션 스킬을 요구합니다.</p>
          <p>팀으로 일해왔기 때문에 유연하고 부드럽게, 하지만 정확하게 말하는 개발자가 될 수 있습니다.</p>
        </TextBox>

        <a 
        title = 'sook-resume'
        href = 'https://www.notion.so/8e048de2e6564601984229e8f1011764'
        target = 'blank'
        >
        <ResumeBtn>
        ✔resume
        </ResumeBtn>
        </a>

      </FlexBox>
    </Wrapper>
  )
}

export default IntroContainer
