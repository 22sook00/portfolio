import styled, {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html , body {
    margin : 0px; 
    padding : 0px;
    box-sizing: border-box;
    font-display: swap; 
    -webkit-font-smoothing : antialiased;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    };
    background : ${({theme})=>theme.bgColor};
    color : ${({theme})=>theme.textColor};
    transition : all 0.5s;

    @font-face {
    font-family: 'NanumSquareRound';
    font-family: 'Nanum Gothic Coding', monospace;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
  }
  article{
    &:hover{
    transform: translateX(10px);
    transition: 0.5s;
    }
  }
  a {
    text-decoration: none;
  }
  button{
    border: none;
    cursor: pointer;
    &:active,&:focus{
      outline: none;
    }
  }

  .makeBgColor{
    background : ${({theme})=>theme.bgColor};
    color : ${({theme})=>theme.textColor} !important;
  }
  .makeBgColorText{
    color : ${({theme})=>theme.textColor}!important;
  }
`
export const PointColor = 
'linear-gradient(135deg, #4568DC 0%, #B06AB3 100%)'

export const DarkLandingBackground = 
'#142847'

export const Wrapper = styled.section`
font-weight: 800;
margin:0 auto;
font : inherit;
font-family: 'NanumSquareRound';
padding : 40px 30px;
@media screen and (min-width: 767px) {
  width : 50%;
  padding : 70px 50px;
};
`
export const Title = styled.h1`
font-size: ${({ navTitle }) => navTitle ? '18px' : '38px'};
font-weight : 900;
text-align: center;
margin : ${({ navTitle }) => navTitle ? '15px 0' : '40px'};
cursor: ${({ navTitle }) => navTitle ? 'pointer' : 'auto'};
  &:hover{
    opacity : ${({ navTitle }) => navTitle ? '0.7' : '1'};
  }

@media screen and (min-width: 767px) {
  margin : ${({ navTitle }) => navTitle ? '20px' : '30px 0 80px'};
  font-size: ${({ navTitle }) => navTitle ? '20px' : '48px'};
}
`
export const SubTitle = styled.p`
font-size : 18px;
line-height: 26px;
font-weight: 700;
margin : 10px 0;
text-transform: capitalize;
@media screen and (min-width: 767px) {
}
`
export const FlexBox = styled.div`
height : 100%;
display: flex;
align-items: center;
border-radius: 10px;
justify-content: ${({ between }) => between ? 'space-between' : 'center'};
flex-direction: ${({ col }) => col ? 'column' : 'unset'};
flex-wrap: ${({ wrapProps }) => wrapProps ? 'wrap' : 'nowrap'};
background-color : ${({ mobileNav }) => mobileNav ? '#fff' : 'transparent'};
@media screen and (min-width: 767px) {
  align-items : ${({ flexStart }) => flexStart ? 'flex-start' : 'center'};
}
`
