import styled from 'styled-components'

export const LandingWrapper = styled.main`

width: 100vw;
height: calc(100vh - 100px);
background-image: url('./img/mobileImg.png');
background-blend-mode: multiply;
background-color : grey;
background-repeat: no-repeat;
background-size: cover;
/* border-radius: 0 0 40px 40px; */
color : #fff;
font-weight: 800;
padding : 0 100px;
box-sizing: border-box;
font : inherit;
font-family: 'Nanum Gothic Coding';
font-weight: 900;
@media screen and (min-width: 767px) {
  background-image: url('./img/webImg.png');
}
`

export const LandingGetStartedWrapper = styled.div`
width: 100%;
height : 100px;
font-weight: 800;
font : inherit;
font-family: 'NanumSquareRound';
`
export const TextBox = styled.div`
text-align: left;
@media screen and (min-width: 767px) {
}
`
export const H1 = styled.h1`
font-size : 52px;
font-weight : 900;
@media screen and (min-width: 767px) {
  font-size : 62px;
}
`
export const H2 = styled.h2`
font-size : 26px;
text-align: right;
font-family: 'NanumSquareRound';
margin : 15px 0;
line-height: 35px;
@media screen and (min-width: 767px) {
  font-size : 28px;
}
`
export const H3 = styled.h3`
font-size : 20px;
margin : 30px 0 20px 0;
line-height: 30px;
font-family: 'NanumSquareRound';
@media screen and (min-width: 767px) {
  font-size : 24px;
  text-align: center;
}
`
export const BelowIcon = styled.h1`
font-size : 38px;
margin-left : 10px;
`
export const P = styled.p`
font-size : 20px;
line-height: 30px;
text-align: right;
font-family: 'NanumSquareRound';
>span{
  font-weight : 900;
  /* color : magenta; */
}
`
