import React from 'react'
import {NightModeContainer} from '../NightMode/StyledNightMode'

function NightMode({ toggle, mode }) {

  return (
    <>
    <NightModeContainer onClick={toggle} mode={mode}>
      <div className = {mode === 'dark' ? 'toggle-container toggle--checked' : 'toggle-container'}/>
      <div className = {mode === 'dark' ? 'toggle-circle toggle--checked' : 'toggle-circle'} />
    </NightModeContainer>
    </>
  )
}

export default NightMode