import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {GlobalStyle} from './Theme/GlobalStyle'
import {ThemeProvider} from './Context/themeProvider'

import AppLayout from './Common/AppLayout/AppLayout'
import Nav from './Common/Nav/Nav'
import Landing from './pages/Landing'
import Intro from './pages/Intro'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './Common/Footer/Footer'

function App() {

  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        {/* <NightMode toggle={toggleTheme} mode={ThemeMode}/> */}
        <AppLayout>
        <Parallax pages={4}>
          {/* 랜딩,메인 */}
          <ParallaxLayer 
            offset={0} 
            speed={0.5} 
            >
            <Landing/>
          </ParallaxLayer>
          {/* 사이드네브바 */}
          <ParallaxLayer 
            sticky={{ start: 1, end: 2.8}} 
            style={{ ...alignCenter, justifyContent: 'flex-start', 
            width: '30%' ,
            }}>
            <Nav/>
          </ParallaxLayer>
  
          {/* 인트로소개 */}
          <ParallaxLayer offset={1} speed={1.5} 
          style={{ ...alignCenter, justifyContent: 'flex-end' ,
          }}>
            <Intro/>
          </ParallaxLayer>
  
          {/* 포트폴리오 */}
          <ParallaxLayer offset={2} speed={1.5} 
          style={{ ...alignCenter, justifyContent: 'flex-end'
          }}>
            <Portfolio />
          </ParallaxLayer>
  
          {/* 컨택 */}
          <ParallaxLayer offset={3} speed={1.5} 
          style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <Contact/>
          </ParallaxLayer>
  
          <ParallaxLayer offset={3.8} speed={1.5} 
          style={{ ...alignCenter, justifyContent: 'center' }}>
            <Footer/>
          </ParallaxLayer>
        </Parallax>
        </AppLayout>
      </ThemeProvider>
    </div>

  );
}

export default App;
