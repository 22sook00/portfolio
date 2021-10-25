import styled from 'styled-components'
import {DarkLandingBackground} from '../../Theme/GlobalStyle'

export const NavContainer = styled.header`
  display: none;
@media screen and (min-width: 767px) {
  width: 100%;
  height : 70px;
  padding : 50px;
  box-sizing: border-box;
  position: fixed;
  top:0;
  right : 0;
  left : 0;
  display : flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
  z-index: 100000;
  transition : all 0.5s;
  background : transparent;
  color : #fff;
  font-weight: 800;
  font : inherit;
  font-family: 'NanumSquareRound';
}
`
export const Navs = styled.nav`  
>ul>a>.makeBgColorText,ul>.makeBgColorText{
  color : #31302E;
}
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
  '#f8f7f4;' 
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
  '#f8f7f4;' 
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
  '#f8f7f4;' 
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
  '#f8f7f4;' 
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
color : grey;
cursor: pointer;
display: table;
text-align: -webkit-match-parent;
&:hover{
    opacity: 0.7;
  }
@media screen and (min-width: 767px) {
  font-size: 20px;
  display: inline-block;
  margin : 0 15px;
}
`
