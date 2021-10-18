import styled, {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html , body {
    margin : 0px; 
    padding : 0px;
    box-sizing: border-box;
    font-family: 'NanumSquareRoundLight';
    font-family: 'NanumSquareRound';
    font-family: 'NanumSquareRoundBold';
    font-family: 'NanumSquareRoundExtraBold';
    word-break: keep-all;
    word-wrap: break-word;
    text-rendering : optimizeLegibility;
    -webkit-font-smoothing : antialiased;
    background : ${({theme})=>theme.bgColor};
    color : ${({theme})=>theme.textColor};
  }
`
export const LightBackground = 
'linear-gradient(135deg, rgb(227, 253, 245) 0%, rgb(255, 230, 250) 100%)'

export const Wrapper = styled.div`
width : 70%;
height : 100vh;
padding : 30px 50px;
box-sizing: border-box;
background-color: pink;
`
export const Title = styled.h1`
font-size: 32px;
`
export const FlexBox = styled.div`
height : 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: ${({ wrapProps }) => wrapProps ? 'wrap' : 'nowrap'};
`
