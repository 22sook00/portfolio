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

`
export const H1 = styled.h1`
font-size : 52px;
font-weight : 900;
text-shadow: 3px 3px 20px #02022b;
@media screen and (min-width: 767px) {
  font-size : 62px;
}
`
export const H2 = styled.h2`
font-size : 22px;
text-align: right;
font-weight: 400;
font-family: 'NanumSquareRound';
margin : 15px 0;
line-height: 35px;
@media screen and (min-width: 767px) {
  font-size : 28px;
}
`
export const H3 = styled.h3`
font-size : 18px;
margin : 30px 0 20px 0;
line-height: 30px;
font-weight: 400;
font-family: 'NanumSquareRound';
@media screen and (min-width: 767px) {
  font-size : 24px;
}
`
export const P = styled.p`
font-size : 20px;
line-height: 30px;
text-align: right;
font-family: 'NanumSquareRound';
&:hover{
  transition: all 0.5s;
  background: -webkit-linear-gradient(left, #4568DC, #B06AB3);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
}
`
