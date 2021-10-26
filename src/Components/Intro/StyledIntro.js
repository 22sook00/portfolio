import styled from 'styled-components'
import {PointColor} from '../../Theme/GlobalStyle'

export const H2 = styled.h2`
font-size : 18px;
font-weight: 800;
margin : 20px 0;
line-height: 26px;
@media screen and (min-width: 767px) {
  font-size: 20px;
}
`
export const H3 = styled.h3`
font-size : 16px;
font-weight: 700;
line-height: 26px;
margin :10px 0 5px;
`
export const H4 = styled.h4`
font-size : 16px;
font-weight: 800;
margin-bottom: 10px;
@media screen and (min-width: 767px) {
  font-size : 20px;
}
`
export const GridBox = styled.div`
display : ${({ mobile }) => mobile ? 'grid' : 'unset'};
grid-template-columns: 1fr 1fr;
grid-gap: 40px;
margin : 30px 0;
@media screen and (min-width: 767px) {
  display : ${({ mobile }) => mobile ? 'unset' : 'grid'};
  padding-left : ${({ mobile }) => mobile ? '50px' : '0'};
}
`
export const ImgBox = styled.div`
>img{
width : 200px;
border-radius: 6px;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
@media screen and (min-width: 767px) {
  width : 250px;
  }
}
margin : 30px;
`
export const TextContent = styled.div`
padding : 20px 0;
line-height: 20px;
border-radius: 18px;
>p{
  line-height: 26px;
  font-size: 14px;
  @media screen and (min-width: 767px) {
    font-size: 16px;
  }
}
@media screen and (min-width: 767px) {
  width : 100%;
}
`
export const TextBox = styled.article`
padding : 20px 0;
transition: all .3s;
line-height: 20px;
border-radius: 18px;
>p{
  line-height: 26px;
  font-size: 14px;
  @media screen and (min-width: 767px) {
    font-size: 16px;
  }
}
>span{
  font-size: 12px;
  color : grey;
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
}
@media screen and (min-width: 767px) {
  width : 100%;
}
`

export const ResumeBtn = styled.button`
background: ${PointColor};
color : #fff;
font-size : 20px;
border-radius: 8px;
padding : 20px;
text-transform: capitalize;
&:hover{
  transition: all 0.5s;
  opacity: 0.8;
}
@media screen and (min-width: 767px) {
  margin: 50px 0 30px;
}
`