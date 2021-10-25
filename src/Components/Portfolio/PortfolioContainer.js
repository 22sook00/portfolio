/* eslint-disable jsx-a11y/heading-has-content */
import React,{useState} from 'react'
import {PortBox,SkillHashtagDiv} from './StyledPortfolio'
import {PortfolioWrapper,HashLi,
  PortTitle,PortImg,H4,P} from '../Portfolio/StyledPortfolio'
import {Wrapper,Title, SubTitle,FlexBox} from '../../Theme/GlobalStyle'
import {portfolioDatas} from '../../Asset/datas'
import { useTheme } from '../../Context/themeProvider'

import SkillsContainer from './SkillsContainer'

function PortfolioContainer() {

  const ThemeMode = useTheme();
  const [selectPortDatas,setSelectPortDatas] = useState(portfolioDatas);
  const hashTagHandler = (hashTag) => {

    if(hashTag === 'All'){
      setSelectPortDatas(portfolioDatas)
    }else{
      const filtering = portfolioDatas.filter((el) => {
        for(let i = 0; i<el.skill.length; i++){
          if(el.skill[i]=== hashTag){
            return el
          }
        }
      })
      setSelectPortDatas(filtering)
    }
  }

  return (
    <PortfolioWrapper 
    theme = {ThemeMode[0]} id ='portfolio'>
    <Wrapper>
      <Title>Project</Title>
      <SkillsContainer 
      hashTagHandler = {hashTagHandler}/>

        {selectPortDatas.map((el)=>{
          return (
            <PortBox 
            theme = {ThemeMode[0]}
            key = {el.id}>
            <FlexBox between>
              <PortTitle>{el.name}</PortTitle> 
              <P>{el.type}</P>
              </FlexBox>

              <hr/>
              <H4>{el.date}</H4>
              <PortImg src = {el.img} alt = {el.name}/>
              <SubTitle>서비스 소개</SubTitle>
              {el.desc && el.desc.map((ele,idx)=>{
                return (
                  <P key = {idx}> ❗️{ele}</P>
                )
              })}

              <SubTitle>주요 기능</SubTitle> 
              {el.primaryFunc && el.primaryFunc.map((ele,idx)=>{
                return (
                  <P key = {idx}>✅ {ele}</P>
                )
              })}
              <SubTitle>보러 가기</SubTitle>   
              <P>👉 Domain <a 
              href= 'https://uptodoor.shop/' 
              target = 'blank'
              title = 'uptodoor site'>
                
              {el.moveTo && el.moveTo[0]}
              </a></P>
              <P>👉 Git <a 
              href = 'https://github.com/codestates/UptoDoor/wiki' 
              target = 'blank'
              title = 'uptodoor wiki'>
              {el.moveTo && el.moveTo[1]}
              </a></P>

              <SubTitle>사용 스택</SubTitle>   
              <SkillHashtagDiv>
              {el.skill.map((hash,idx)=>{
                return (
                  <HashLi 
                  smaller
                  key = {idx}>{hash}</HashLi>
                )
              })}
            </SkillHashtagDiv>
          </PortBox>
          )
        })}

    </Wrapper>
    </PortfolioWrapper>
  )
}

export default PortfolioContainer
