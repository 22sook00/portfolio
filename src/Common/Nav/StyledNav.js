import styled from 'styled-components'
import {LightBackground} from '../../Theme/GlobalStyle'

export const NavContainer = styled.aside`
padding: 50px;
width : 100%;
height : 60vh;
border-radius: 20px;
background : ${LightBackground};
position: relative;
`
export const NavUl = styled.ul`
list-style: none;
padding: 0;
margin-bottom: 40px;
`
export const NavLi = styled.li`
line-height: 45px;
font-size: 24px;
cursor: pointer;
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