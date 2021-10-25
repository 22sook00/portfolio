import React from 'react'
import {HashUl,HashLi,} from './StyledPortfolio'
import {skillHashtag} from '../../Asset/datas'
import { useTheme } from '../../Context/themeProvider'

function SkillsContainer({hashTagHandler}) {

  const ThemeMode = useTheme();

  return (
    <div theme = {ThemeMode[0]}>
      <HashUl>
      {skillHashtag.map((el,idx)=>{
        return (
          <HashLi 
          key = {idx}
          onClick = {()=>hashTagHandler(el)}
          >{el}</HashLi>
        )
      })}
    </HashUl>
    </div>
  )
}

export default SkillsContainer
