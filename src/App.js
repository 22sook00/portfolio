import React from 'react'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {GlobalStyle} from './Theme/GlobalStyle'
import {ThemeProvider} from './Context/themeProvider'
import AppLayout from './Common/AppLayout/AppLayout'

import Landing from './pages/Landing'
import Intro from './pages/Intro'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './Common/Footer/Footer'

function App() {

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppLayout>

          <Landing/>
          <Intro/>
          <Portfolio/>
          <Contact/>

          <Footer/>
        </AppLayout>
      </ThemeProvider>
    </>

  );
}

export default App;
