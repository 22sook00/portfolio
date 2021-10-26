import React from 'react'
import {H2,H3,H4,GridBox,TextContent,TextBox,ImgBox,ResumeBtn } from './StyledIntro'
import {Wrapper,FlexBox,Title} from '../../Theme/GlobalStyle'

function IntroContainer() {
  return (
    <Wrapper id = 'aboutme'>
      <Title>About Me</Title>
      <TextContent>      
        <H2>✈️공항 지상직에서 👩🏻‍💻프론트엔드 개발자로,</H2>
        <p>취미로 시작한 코딩에 재미를 붙여 이제는 본업으로 삼으려 합니다.<br/>
        8년간 공항에서의 직장 생활을 통해 얻은 경험들을 녹여내 프론트엔드 개발자로서 풀어내고 싶습니다. 
        그동안의 경험을 바탕으로 앞으로
        제가 지향하는 개발자의 모습은 다음과 같습니다.</p>
      </TextContent>

      <FlexBox col> 
        <ImgBox>
          <img src = '/img/resumeImg.jpg' alt = '이숙영증명사진'/>
        </ImgBox>

        <GridBox>
          <FlexBox col>
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
          </FlexBox>

          <GridBox mobile>
            <TextBox>
              <H4>Education</H4>
              <p>🎓 코드스테이츠 (CodeStates)<br/>Software Engineering 30기</p>
              <span>2021.05 - 2021.10 (6months)</span><br/>
              <p>🎓 코리아 IT 아카데미</p>
              <span>2020.11 - 2021.05 (6months)</span><br/>
            </TextBox>
            <TextBox>
              <H4>Skills</H4>
              <H3>⚙️ Language & Library</H3>
              <p>React,Redux,Axios,Styled-components,<br/>
                HTML5, CSS , JavaScript(ES6), ApexCharts,<br/>
                Node.js , Express
              </p>

              <H3>⚙️ Tools & DevOps </H3>
              <p>GitHub ,AWS(S3),Vercel,Netlify,<br/>
              Notion,Miro,VisualStudio</p>
            </TextBox>
          </GridBox>
          
          
        </GridBox>

        <a 
        title = 'sook-resume'
        href = 'https://www.notion.so/8e048de2e6564601984229e8f1011764'
        target = 'blank'
        >
        <ResumeBtn>
        ✔ resume
        </ResumeBtn>
        </a>

      </FlexBox>
    </Wrapper>
  )
}

export default IntroContainer
