import styled from 'styled-components'
import {DarkLandingBackground} from '../../Theme/GlobalStyle'

export const ContactBox = styled.article`
/* width : 100%; */
background : 
  ${({ theme }) => theme ==='light' ? 
  '#f8f7f4'
  :
  DarkLandingBackground};
cursor: pointer;
padding : 15px;
margin : 40px 0 20px;
box-sizing: border-box;
transition: all .3s;
border-radius: 18px;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;

@media screen and (min-width: 767px) {
}
`

export const ContactImg = styled.img`
width : 30px;height : 30px;
object-fit: cover;
border-radius: 50%;
margin-right: 10px;

`