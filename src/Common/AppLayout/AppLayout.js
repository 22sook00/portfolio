import React, {useEffect , useState} from 'react';
import { useTheme } from '../../Context/themeProvider'
import { Container , ThemeContainer, ScrollTopBtn } from './StyledAppLayout'
import { Link } from "react-scroll"
import Nav from '../Nav/Nav'
import MobileHeader from '../Nav/MobileHeader'

const AppLayout = ({children}) => {

  const [btnStatus , setBtnStatus] = useState(false)
  const [scrollY, setScrollY] = useState(0);

  const ScrollStatus = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 400) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  useEffect(() => {
    const chkScroll = () => {
      window.addEventListener("scroll", ScrollStatus);
    };
    chkScroll();
    return () => {
      window.removeEventListener("scroll", ScrollStatus);
    };
  });

  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <Container className = 'appLayout'>
      <Nav toggle={toggleTheme} mode={ThemeMode}/>
      <MobileHeader toggle={toggleTheme} mode={ThemeMode}/>
      <ThemeContainer>{children}</ThemeContainer> 
      
      {btnStatus ?
      <Link 
        activeClass="active"
        to="main"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <ScrollTopBtn>
          <i className="fas fa-chevron-circle-up show"></i>
        </ScrollTopBtn>
      </Link>
      :
      <></>
      }
    </Container>
  )
}

export default AppLayout;

