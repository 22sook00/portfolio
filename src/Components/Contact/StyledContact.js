import styled,{keyframes} from 'styled-components'
import {DarkLandingBackground} from '../../Theme/GlobalStyle'

const moving = keyframes`
0%{
  margin : 3px;
  transform:rotate(45deg) ;
}
100%{
  margin-top : 10px;
  transform:rotate(55deg) ;
}
`

export const GridBox = styled.div`
width : 300px;
@media screen and (min-width: 767px) {
  width : 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
}
`
export const ContactBox = styled.article`
background : 
  ${({ theme }) => theme ==='light' ? 
  '#f8f7f4'
  :
  DarkLandingBackground};
cursor: pointer;
height : 150px;
margin : 40px 0 20px;
transition: all .3s;
border-radius: 18px;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
@media screen and (min-width: 767px) {
  margin : 0;
  &:nth-child(1),:nth-child(2){
    margin-top: 50px;
  }
  &:nth-child(4){
    animation: ${moving} infinite 0s 0s ease alternate-reverse fill-mode;
  }
}
`

export const ContactImg = styled.img`
width : 30px;height : 30px;
object-fit: cover;
border-radius: 50%;
margin-right: 10px;

`