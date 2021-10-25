import React from 'react'
import {Wrapper,Title,SubTitle, FlexBox} from '../../Theme/GlobalStyle'
import {ContactBox,ContactImg} from '../Contact/StyledContact'
import { useTheme } from '../../Context/themeProvider'
import { contactDatas } from '../../Asset/datas'

function ContactContainer() {
  const ThemeMode = useTheme();
  return (
    <Wrapper 
    theme = {ThemeMode[0]}
    id = 'contact'>
      <Title>Contact</Title>
      {contactDatas.map((el)=>{
        return (
          <ContactBox 
          key = {el.id}
          theme = {ThemeMode[0]}>
            <FlexBox>
            <ContactImg src= {el.icon} alt = {el.title}/> 
            <SubTitle>{el.title}</SubTitle>
            </FlexBox>
            <hr />
            
            <FlexBox col>
            <a href = {el.address}>{el.title}</a>
            <p>{el.desc}</p>
            </FlexBox>
          </ContactBox>
        )
      })}
      
    </Wrapper>
  )
}

export default ContactContainer
