import styled from 'styled-components'
import {DarkLandingBackground, PointColor} from '../../Theme/GlobalStyle'

//web nav
export const NavContainer = styled.header`
  display: none;
@media screen and (min-width: 767px) {
  width: 100%;
  height : 70px;
  padding : 35px;
  box-sizing: border-box;
  position: fixed;
  top:0;
  right : 0;
  left : 0;
  display : flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
  z-index: 1000000;
  transition : all 0.5s;
  backdrop-filter: blur(5px);
  color : #fff;
  font-weight: 800;
  font : inherit;
  font-family: 'NanumSquareRound';
}
`
export const Navs = styled.nav`  
>ul>a>li , ul>li{
  color : #fff;
  &:hover{
  opacity: 0.7;
  }
}
`
//mobile
export const MobileHeaderContainer = styled.header`
  display : unset;
  position: fixed;
  top:0;
  padding: 0 10px;
  box-sizing: border-box;
  margin : 0;
  width : 100%;
  height : 70px;
  background-color: transparent;  
  z-index: 100000;
  font-weight: 800;
  font : inherit;
  font-family: 'NanumSquareRound';
  >div>i{
    font-size : 28px;
    cursor: pointer;
  }

@media screen and (min-width: 767px) {
display: none;
}
`
export const NavMobileContainer = styled.nav`
  display : unset;
  padding: 15px;
  margin : 20px 0;
  width : 100%;
  height : 30px;
  font-weight: 800;
  font : inherit;
  font-family: 'NanumSquareRound';
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
  border-radius: 20px;
  background : 
  ${({ theme }) => theme ==='light' ? 
  '#f5f5fc;' 
  :
  DarkLandingBackground};

@media screen and (min-width: 767px) {
display: none;
}
`
export const MobileNavWrapper = styled.div`
border-radius : 0 0 10px 10px;
display: flex;
flex-wrap: wrap;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
padding: .5rem 1rem;
box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
background : 
  ${({ theme }) => theme ==='light' ? 
  '#f5f5fc;' 
  :
  DarkLandingBackground};
>.focus{
  height : 150px;
  transition : all 0.3s;
}
>.not-focus{
  height : 0;
  transition : all 0.3s;
}
`
export const MobileHamburger = styled.div`
&.menu-trigger{
  width: 30px;
  height : 30px;
  margin-top : 5px; 
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;

  &:hover >#top{
    background: ${PointColor};
    transform: rotate(90deg) scale(0.75,1);
  }
  &:hover >#middle-1{
    background: ${PointColor};
    width : 15px;
    transform: rotate(45deg) translate(1px,-2px);
  }
  &:hover >#middle-2{
    background: ${PointColor};
    width : 15px;
    transform: rotate(-45deg) translate(-1px,-2px);
  }
  &:hover >#bottom{
    background: ${PointColor};
    margin-top : 5px;
  }
}
>span{
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  left: 0;
  width: 100%;
  margin : 3px 0;
  background:  
  ${({ theme }) => theme ==='light' ? 
  '#31302e' 
  :
  'rgb(173,183,218)'};
  border-radius: 4px;

  &.bar-1{
    height: 2px;
    width: 30px;
    display: block;
    float: left;
  }
  &.bar-2{
    height: 2px;
    display: block;
    float: left;
    width : 15px;
  }
}
`
export const MobileNavBar = styled.div`
width : 100%;
height : 50px;
cursor: pointer;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
background : 
  ${({ theme }) => theme ==='light' ? 
  '#f5f5fc;' 
  :
  DarkLandingBackground};
`
export const MobileNavList = styled.div`
flex-basis: 100%;
flex-grow: 1;
line-height: 35px;   
transition : all .3s;
background : 
  ${({ theme }) => theme ==='light' ? 
  '#f5f5fc;' 
  :
  DarkLandingBackground};
>.focus{
  display: unset;
  transition : all 0.3s;
}
>.not-focus{
  display: none;
  transition : all 0.3s;
}
`
export const NavUl = styled.ul`
list-style: none;
padding: 0;
`
export const NavLi = styled.li`
font-size: 16px;
font-weight: 900;
color:  
  ${({ theme }) => theme ==='light' ? 
  '#31302e' 
  :
  'rgb(173,183,218)'};
cursor: pointer;
display: table;
text-align: -webkit-match-parent;
&:hover{
  opacity: 0.7;
  }
@media screen and (min-width: 767px) {
  font-size: 18px;
  display: inline-block;
  margin : 0 15px;
}
`
