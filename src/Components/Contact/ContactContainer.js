import React from 'react'
import {Wrapper,Title,SubTitle, FlexBox} from '../../Theme/GlobalStyle'
import {GridBox,ContactBox,P} from '../Contact/StyledContact'
import { useTheme } from '../../Context/themeProvider'
import { contactDatas } from '../../Asset/datas'

function ContactContainer() {
  const ThemeMode = useTheme();
  return (
    <Wrapper 
    theme = {ThemeMode[0]}
    id = 'contact'>
      <Title>Contact</Title>
      <P>하루의 시작과 끝,<br/> 매일매일을 계획하고 기록합니다.</P>
      <GridBox>
      {contactDatas.map((el)=>{
        return (
          <ContactBox 
          key = {el.id}
          theme = {ThemeMode[0]}>
            <a href = {el.address} 
            title = {el.title}
            target = 'blank'>
            <FlexBox col>
            <SubTitle>{el.title}</SubTitle>
            <div>
            {el.name !== undefined?
            <p>👩🏻‍💻 {el.name}</p>
            :<></>
            }

            {el.mobile !== undefined?
            <p>📲 {el.mobile}</p>
            :<></>
            }

            {el.email !== undefined ?
            <p>📧 {el.email}</p>
            :
            <></>
            }
            </div>
            </FlexBox>
            </a>
          </ContactBox>
        )
      })}
      </GridBox>
    </Wrapper>
  )
}

export default ContactContainer
