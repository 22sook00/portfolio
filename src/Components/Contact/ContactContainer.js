import React from 'react'
import {Wrapper,Title,SubTitle, FlexBox} from '../../Theme/GlobalStyle'
import {GridBox,ContactBox,ContactImg} from '../Contact/StyledContact'
import { useTheme } from '../../Context/themeProvider'
import { contactDatas } from '../../Asset/datas'

function ContactContainer() {
  const ThemeMode = useTheme();
  return (
    <Wrapper 
    theme = {ThemeMode[0]}
    id = 'contact'>
      <Title>Contact</Title>
      <GridBox>
      {contactDatas.map((el)=>{
        return (
          <ContactBox 
          key = {el.id}
          theme = {ThemeMode[0]}>
            <FlexBox>
            <ContactImg src= {el.icon} alt = {el.title}/> 
            <SubTitle>{el.title}</SubTitle>
              <FlexBox col >
                <p>{el.mobile}</p>
                <p>{el.email}</p>
              </FlexBox>
            </FlexBox>
          </ContactBox>
        )
      })}
      </GridBox>
    </Wrapper>
  )
}

export default ContactContainer
