import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100%;
  position :relative;
`;
export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all 0.2s linear;
`;

export const ScrollTopBtn = styled.button`
font-size: 40px;
background: transparent;
position: fixed;
bottom: 30px;right:30px;
>i{
  color : #8CA6DB;
  }
@media screen and (min-width: 767px) {
  bottom: 50px;right:50px;
}
`
