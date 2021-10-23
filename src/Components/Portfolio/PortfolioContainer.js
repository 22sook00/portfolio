/* eslint-disable jsx-a11y/heading-has-content */
import React,{useState} from 'react'
import {GridDiv,PortBox,SkillHashtagDiv} from './StyledPortfolio'
import {PortfolioWrapper,HashLi,H2,H4} from '../Portfolio/StyledPortfolio'
import {Wrapper,Title, FlexBox} from '../../Theme/GlobalStyle'
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
    <PortfolioWrapper theme = {ThemeMode[0]} id ='portfolio'>
    <Wrapper>
      <Title>Portfolio</Title>
      <SkillsContainer 
      hashTagHandler = {hashTagHandler}/>
      <GridDiv>
        {selectPortDatas.map((el)=>{
          return (
            <PortBox 
            theme = {ThemeMode[0]}
            key = {el.id}>
              <FlexBox between>
              <H2>{el.name}</H2> 
              <H4>{el.type}</H4>
              </FlexBox>
              <p>{el.date}</p>
              <p>서비스 소개 : {el.desc}</p>
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
      </GridDiv>
    </Wrapper>
    </PortfolioWrapper>
  )
}

export default PortfolioContainer
