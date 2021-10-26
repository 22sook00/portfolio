import styled from 'styled-components'
import {DarkLandingBackground} from '../../Theme/GlobalStyle'

export const FooterContainer = styled.footer`
background : 
${({ theme }) => theme ==='light' ? '#efedf0' : DarkLandingBackground};
width : 100vw;
height : 100%;
display: flex;
justify-content: center;
>div{
  padding : 50px;
  text-align: left;
  >p{
  font-size: 16px;
  color : grey;
  margin:2px;
  }
}

`