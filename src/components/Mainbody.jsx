import React from 'react'
import { StyledMainbodycontainer } from '../styes/Mainbody.styled';
import Herosection from './Herosection';
import MainbodySections from './MainbodySections';
import Navbar from './Navbar';

const Mainbody = () => {
  return (
    <StyledMainbodycontainer>
        <Navbar />
        <Herosection />
        <MainbodySections />
    </StyledMainbodycontainer>
  )
}

export default Mainbody;
