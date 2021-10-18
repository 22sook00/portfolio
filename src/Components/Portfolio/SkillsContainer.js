import React from 'react'
import {HashUl,HashLi,} from './StyledPortfolio'
import {skillHashtag} from '../../Asset/datas'

function SkillsContainer({hashTagHandler}) {
  return (
    <section>
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
    </section>
  )
}

export default SkillsContainer
