import React from 'react'
import {
  PortBox,SkillHashtagDiv,
  PortfolioWrapper,HashLi,
  PortTitle,PortImg,H4,P} from './StyledProject'
import {Wrapper,Title, SubTitle,FlexBox} from '../../Theme/GlobalStyle'
import {projectDatas} from '../../Asset/datas'
import { useTheme } from '../../Context/themeProvider'

// import SkillsContainer from './SkillsContainer'

function ProjectContainer() {

  const ThemeMode = useTheme();
  // const [selectPortDatas,setSelectPortDatas] = useState(projectDatas);
  // const hashTagHandler = (hashTag) => {

  //   if(hashTag === 'All'){
  //     setSelectPortDatas(projectDatas)
  //   }else{
  //     const filtering = projectDatas.filter((el) => {
  //       for(let i = 0; i<el.skill.length; i++){
  //         if(el.skill[i]=== hashTag){
  //           return el
  //         }
  //       }
  //     })
  //     setSelectPortDatas(filtering)
  //   }
  // }

  return (
    <PortfolioWrapper 
    theme = {ThemeMode[0]} id ='portfolio'>
    <Wrapper>
      <Title>Project</Title>
      {/* <SkillsContainer 
      hashTagHandler = {hashTagHandler}/> */}

        {projectDatas.map((el)=>{
          return (
            <PortBox 
            theme = {ThemeMode[0]}
            key = {el.id}>
              <SubTitle>{el.sub}</SubTitle>
              <PortTitle>{el.name}</PortTitle> 

              <hr/>

              <H4>{el.type}</H4>
              <H4>{el.date}</H4>
              <PortImg src = {el.img} alt = {el.name}/>
              <SubTitle>서비스</SubTitle>
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

export default ProjectContainer
