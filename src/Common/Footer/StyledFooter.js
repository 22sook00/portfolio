import styled from 'styled-components'
import {DarkLandingBackground} from '../../Theme/GlobalStyle'

export const FooterContainer = styled.footer`
background : 
${({ theme }) => theme ==='light' ? 'lightGrey' : DarkLandingBackground};
width : 100vw;
height : 100%;
display: flex;
justify-content: center;
>div{
  padding : 50px;
  text-align: left;
  >p{
  font-size: 14px;
  color : grey;
  margin:2px;
  }
}

`