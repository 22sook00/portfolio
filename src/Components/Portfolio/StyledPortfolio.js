import styled from 'styled-components'
import { LightBackground } from '../../Theme/GlobalStyle'


export const GridDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap : 20px;
`
export const PortBox = styled.div`
background-color: #f7f7f7;
border-radius: 10px;
width : 400px;
cursor: pointer;
padding : 20px;
box-sizing: border-box;
transition: all .3s;
&:hover{
  margin-top: 4px;
  background:${LightBackground};
}
`
export const SkillHashtagDiv = styled.div`
text-align: right;
`
export const HashUl = styled.ul`
list-style: none;
padding: 0;
margin-bottom: 40px;
`
export const HashLi = styled.li`
display: inline-block;
cursor: pointer;
padding : 5px 8px;
margin : 5px 3px;
font-size: 14px;
font-weight: 600;
width: fit-content;
/* background: linear-gradient(
135deg, rgb(94, 131, 223) 0%, rgb(180, 144, 202) 100%); */
background-color: rgb(94, 131, 223);
color : #fff;
border-radius: 5px;
&:hover{
  background-color: rgb(124, 131, 223);
}
`