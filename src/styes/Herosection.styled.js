import styled from "styled-components";
import bg_image from '../images/bg-image.svg';

export const StyledHerosectioncontainer = styled.div`
    margin-top:2rem;
    margin-bottom:2rem;
    background-image: url(${ bg_image});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    height:255px;
    width:1581px;

    
    @media(max-width: 1030px) {
        width:780px;
    }
    
    @media(max-width: 770px) {
        width:490px;
    }

    @media(max-width: 430px) {
        width:450px;
    }

`

export const StyledHeroimage1 = styled.div`
    padding-top: 2rem;
    padding-left:2rem;
`

export const StyledHeroimage2 = styled.div`
    display: flex;
    justify-content: end;
    padding-top:3.2rem;
    padding-right:1.5rem;

`