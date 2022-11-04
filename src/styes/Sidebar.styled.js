import styled from "styled-components";
import sidebar_bg from '../images/sidebar-bg.png';


export const StyledSidebarcontainer = styled.div`
    width:20%;
    height:100%;
    padding-left: 1rem;
    padding-right: 1rem;

    @media(max-width: 770px) {
        width:30%;
    }

    @media(max-width:425px) {
        display: none;
    }
`

export const StyledSidebarsect1 = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    padding-bottom: 2rem;


    img{
        width: 62px;
        height: 62px;
        margin-top: 1rem;
    }

    p{
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #D9D9D9;
        padding-left: 20px;
    }

`

export const StyledSidebarsectcover = styled.div`
    background-image: url(${sidebar_bg});
    background-repeat:no-repeat;
    background-position:center;
    background-size: cover;
    height:100%;
    width:100%;
    padding-top:10px;
    padding-bottom:10px;
`

export const StyledSidebarsect2 = styled.div`
    display:flex;
    flex-direction: column;

    div{
        display:flex;
        flex-direction: row;
        align-items: center;
        padding-top:12px;
    }

    p{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #D9D9D9;
        padding-left: 20px;
        padding-right: 20px;
    }

`

export const StyledSidebarsect2diff = styled.div`
    p{
        color: #FBBA12;
    }
`

export const StyledSidebarruler = styled.p`
    width: 231px;
    height: 0px;
    border: 0.5px solid #282828;
    margin-top:20px;
    margin-bottom: 20px;
`

export const StyledSidebarsect3 = styled.div`
    display:flex;
    flex-direction: column;

    div{
        display:flex;
        flex-direction: row;
        align-items: center;
        margin-top:35px;
    }

    p{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #D9D9D9;
        padding-left: 20px;
        padding-right: 40px;
    }

`

export const StyledSidebarsect4 = styled.div`
    display:flex;
    flex-direction: column;
    padding-bottom:9rem;

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #D9D9D9;
        padding-bottom:10px;
    }
`