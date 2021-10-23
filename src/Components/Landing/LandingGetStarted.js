import React from 'react'
import {LandingGetStartedWrapper,BelowIcon,P} from '../Landing/StyledLanding'
import {FlexBox} from '../../Theme/GlobalStyle'

function LandingGetStarted() {
  return (
    <LandingGetStartedWrapper>
      <FlexBox>
      <P>View<br/>More</P>
      {/* <BelowIcon>👇🏼</BelowIcon> */}
      </FlexBox>
    </LandingGetStartedWrapper>
  )
}

export default LandingGetStarted
