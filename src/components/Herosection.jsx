import React from 'react';
import { StyledHerosectioncontainer, StyledHeroimage1, StyledHeroimage2 } from '../styes/Herosection.styled';
import hero_img_1 from '../images/hero-img-1.svg';
import omalay_img from '../images/Omah Lay Name Tag-min 1.svg'


const Herosection = () => {
  return (
    <StyledHerosectioncontainer>
        <StyledHeroimage1>
            <img src={hero_img_1} alt="logo" />
        </StyledHeroimage1>
        <StyledHeroimage2>
            <img src={omalay_img} alt="Omah lay signature" />
        </StyledHeroimage2>
    </StyledHerosectioncontainer>
  )
}

export default Herosection;