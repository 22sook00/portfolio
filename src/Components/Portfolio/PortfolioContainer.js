/* eslint-disable jsx-a11y/heading-has-content */
import React,{useState} from 'react'
import {GridDiv,PortBox,SkillHashtagDiv} from './StyledPortfolio'
import {HashLi} from '../../Common/Nav/StyledNav'
import {Wrapper,Title} from '../../Theme/GlobalStyle'
import {portfolioDatas} from '../../Asset/datas'

import SkillsContainer from './SkillsContainer'

function PortfolioContainer() {

  const [selectPortDatas,setSelectPortDatas] = useState(portfolioDatas);
  const hashTagHandler = (hashTag) => {

    const filtering = selectPortDatas.filter((el) => {
      for(let i = 0; i<el.skill.length; i++){
        if(el.skill[i]=== hashTag){
          return el
        }
      }
    })
    setSelectPortDatas(filtering)
  }

  return (
    <Wrapper>
      <Title>Portfolio</Title>
      <SkillsContainer 
      hashTagHandler = {hashTagHandler}/>
      <GridDiv>
        {selectPortDatas.map((el)=>{
          return (
            <PortBox key = {el.id}>
              <h3>{el.type}</h3>
              <h2>{el.name}</h2>
              <p>{el.desc}</p>
              <SkillHashtagDiv>
              {el.skill.map((hash,idx)=>{
                return (
                  <HashLi key = {idx}>{hash}</HashLi>
                )
              })}
            </SkillHashtagDiv>
          </PortBox>
          )
        })}
          
      </GridDiv>
    </Wrapper>
  )
}

export default PortfolioContainer
