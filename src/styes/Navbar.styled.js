import styled from "styled-components";

export const StyledNavbarcontainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;

    @media(max-width:425px) {
        display: none;
    }
`

export const StyledNavbarImagecontainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;

    img{
        width: 15.84px;
        height:26.88px;
        margin-left:1rem;
        margin-right:0.2rem;
    }
`


export const StyledInputcontainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    margin-left:5rem;
    position: relative;

    

    input{
        
        width: 471px;
        height: 56px;
        border: 1px solid #0F0F0F;
        background-color: #0F0F0F;
        color: white;
        padding-left: 2.3rem;

        @media(max-width:768px) {
            width: 371px;
        }
    }


    img{
        position: absolute;
        left: 1rem;
        height:18px;
        width:18px;
    }
`