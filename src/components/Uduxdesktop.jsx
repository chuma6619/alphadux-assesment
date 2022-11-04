import React from 'react'
import { StyledUduxdesktopcontainer } from '../styes/Uduxdesktop.styled';
import Mainbody from './Mainbody';
import Sidebar from './Sidebar';


const Uduxdesktop = () => {
  return (
    <>
    <StyledUduxdesktopcontainer>
        <Sidebar />
        <Mainbody />
    </StyledUduxdesktopcontainer>
    </>
  )
}

export default Uduxdesktop;