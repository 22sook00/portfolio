import styled from 'styled-components'


export const H2 = styled.h2`
font-size : 18px;
font-weight: 800;
margin : 20px 0;
line-height: 25px;
@media screen and (min-width: 767px) {
  font-size: 20px;
}
`
export const H3 = styled.h3`
font-size : 16px;
`
export const ImgBox = styled.div`
>img{
width : 200px;
height : 200px;
border-radius: 4px;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
@media screen and (min-width: 767px) {
  width : 250px;
  height : 250px;
  }
}
margin : 30px;

`
export const TextBox = styled.article`
width : 100%;
padding : 20px 0;
transition: all .3s;
line-height: 20px;
border-radius: 18px;
>p{
  line-height: 26px;
}
@media screen and (min-width: 767px) {
  width : 100%;
}
`
export const H4 = styled.h4`
font-size : 18px;
font-weight: 800;
margin-bottom: 10px;
@media screen and (min-width: 767px) {
  font-size : 20px;
}
`