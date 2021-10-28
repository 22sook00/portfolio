import styled from 'styled-components'

export const GridBox = styled.div`
width : 300px;
@media screen and (min-width: 767px) {
  width : 100%;
  margin : 80px 0; 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 15px;
}
`
export const ContactBox = styled.article`
background : 
  ${({ theme }) => theme ==='light' ? 
  '#fff'
  :
  'rgb(20,40,71)'
  };
cursor: pointer;
margin : 20px 0;
&:nth-child(1){
  margin-top: 50px;
}
padding : 10px 0;
transition: all .3s;
border-radius: 18px;
overflow: hidden;
box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
background-size: contain;
background-repeat: no-repeat;
background-position-x: -20px;
&:nth-child(1){
  background-image: url('./img/icons/git.png');
}
&:nth-child(2){
  background-image: url('./img/icons/velog.png');
}
&:nth-child(3){
  background-image: url('./img/icons/notion.png');
}
&:nth-child(4){
  padding : 20px 0 30px;
}
&:hover{
    transition: all 0.8s;
    background-position-x: 105%;
}
@media screen and (min-width: 767px) {
  margin-top:0!important;
  margin : 0;
  &:nth-child(4){
    grid-row: 1 / 4;
  }
}
>a{
  color : ${({ theme }) => theme ==='light' ? 
  '#31302e'
  :
  '#adb7da'};
}
>a>div>div>p{
  font-size: 18px;
  line-height: 30px;
}
>a>div{
  text-align: left;
}
`
export const ContactImg = styled.div`
width : 60px;
height : 60px;
object-fit: cover;
margin-right: 10px;
`
export const P = styled.p`
text-align: center;
font-size: 18px;
line-height: 26px;
>span{
  background: -webkit-linear-gradient(45deg, #4568DC, #B06AB3);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
}
@media screen and (min-width: 767px) {
  
}
`