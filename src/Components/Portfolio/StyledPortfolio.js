import styled from 'styled-components'
import { DarkLandingBackground } from '../../Theme/GlobalStyle'

export const PortfolioWrapper = styled.section`
width : 100%;
background : 
  ${({ theme }) => theme ==='light' ? 
  '#ebecf5' 
  :
  'rgb(8,23,49)'};
`
export const GridDiv = styled.div`

@media screen and (min-width: 767px) {
}
`
export const PortBox = styled.article`
background : 
  ${({ theme }) => theme ==='light' ? 
  '#f8f7f4'
  :
  DarkLandingBackground};
cursor: pointer;
padding : 15px;
margin : 20px 0;
box-sizing: border-box;
transition: all .3s;
border-radius: 18px;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
&:hover{
  transform: translateX(10px);
  transition: 0.5s;
}
@media screen and (min-width: 767px) {
  
}
`
export const PortTitle = styled.h2`
font-size: 24px;
font-weight: 700;
`
export const PortImg = styled.img`
width : 100%;
margin : 20px 0;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
`
export const H3 = styled.h3`
font-size: 20px;
margin : 10px 0;
`
export const H4 = styled.h4`
font-size: 14px;
margin : 10px 0 0;
text-align: right;
color : grey;
`
export const P = styled.p`
font-size : 14px;
line-height: 24px;
>a{
  font-weight : 900;
  color : 
  ${({ theme }) => theme ==='light' ? 
  '#31302e'
  :
  '#adb7da'};
  text-decoration: none;
  &:hover{
    color : #007bff;
  }
}
@media screen and (min-width: 767px) {
}
`
export const SkillHashtagDiv = styled.div`
text-align: right;
`
export const HashUl = styled.ul`
list-style: none;
padding: 0;
margin-bottom: 40px;
margin : 30px 0;
`
export const HashLi = styled.li`
display: inline-block;
cursor: pointer;
padding : 6px 8px;
font-weight: 600;
width: fit-content;
background-color: rgb(94, 131, 223);
color : #fff;
border-radius: 5px;
font-size: ${({ smaller }) => smaller ? '10px' : '14px'};
margin: ${({ smaller }) => smaller ? '3px' : '5px 3px'};
&:hover{
  background-color: rgb(124, 131, 223);
}
`