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
    background : ${({theme})=>theme.bgColor};
    color : ${({theme})=>theme.textColor};

    @font-face {
    font-family: 'NanumSquareRound';
    font-family: 'Nanum Gothic Coding', monospace;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
  }
`
export const LightLandingBackground = 
'linear-gradient(135deg, rgb(245, 247, 250) 0%, rgb(195, 207, 226) 100%)'

export const DarkLandingBackground = 
'linear-gradient(135deg, rgb(8, 27, 49) 0%, rgb(20,40,71) 100%)'

export const Wrapper = styled.section`
font-weight: 800;
margin:0 auto;
font : inherit;
font-family: 'NanumSquareRound';
padding : 70px;
/* background-color : ${({darker})=>darker?'#e9ebf7':'#f8f7f4'}; */
@media screen and (min-width: 767px) {
  width : 40%;
};
`
export const Title = styled.h1`
font-size: ${({ navTitle }) => navTitle ? '18px' : '30px'};
font-weight : 900;
text-align: center;
/* font-family: 'Nanum Gothic Coding'; */
@media screen and (min-width: 767px) {
  font-size: 38px;
  margin:20px 0;
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
  justify-content: ${({ start }) => start ? 'flex-start' : 'center'};
  
}
`
