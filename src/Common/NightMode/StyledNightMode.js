import styled from 'styled-components'

export const NightModeContainer = styled.div`
position: fixed;
top : 30px;
right: 30px;
cursor: pointer;
z-index: 10000;  

  > .toggle-container {
    width: 70px;
    height: 34px;
    border-radius: 30px;
    background-color: #4a89dc;
    opacity : 0.7;

    box-shadow: ${props => props.mode === 'dark' ?
  '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
  : 
  '0px 5px 10px rgba(0, 0, 40, 0.7), 0px 2px 4px rgba(0, 0, 40, 0.8)'
  };
    
    &.toggle--checked{
      background-color: #967adc;
      transition: 0.4s;
      
    }
  }

  > .toggle-circle {
    position: absolute;
    margin : 5px;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition : 0.4s;
    background-color: #ffffff;
    &.toggle--checked{
      left : 38px;
      transition : 0.4s;
    }
  }
`

