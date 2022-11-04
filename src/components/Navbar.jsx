import React from 'react';
import { StyledNavbarcontainer, StyledNavbarImagecontainer, StyledInputcontainer } from '../styes/Navbar.styled';
import previous from '../images/previous.svg';
import forward from '../images/forward.svg';
import search_icon from '../images/search-icon.svg';

const Navbar = () => {
  return (
    <StyledNavbarcontainer>
      <StyledNavbarImagecontainer>
        <img src={previous} alt="Previous " />
        <img src={forward} alt="Forward" />
      </StyledNavbarImagecontainer>

      <StyledInputcontainer>
        <img src={search_icon} alt="search-icon" />
        <input type="text" />
      </StyledInputcontainer>
    </StyledNavbarcontainer>
    
  )
}

export default Navbar;
