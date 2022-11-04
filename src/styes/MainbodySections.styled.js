import styled from "styled-components";

export const StyledHeading = styled.h2`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.04em;
    margin-bottom: 2.5rem;
`

export const StyledHeading2 = styled.h2`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.04em;
    margin-bottom: 2.5rem;
    margin-top: 3rem;
`



export const Styledsection1 = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    gap:15px;

    @media(max-width: 1030px) {
        grid-template-columns: auto auto auto ;
        margin-bottom:10px;
    }

    @media(max-width: 770px) {
        grid-template-columns: auto auto;
        margin-bottom:10px;
    }

    @media(max-width:425px) {
        width:350px;
        gap: 20px;
    }

`


export const StyledCardcontainer = styled.div`
    background: linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%);
    width: 226.38px;
    height: 236.15px;
    
    
    
`
export const StyledImagebgcontainer = styled.div`
    background-color: #0F0F0F;
    margin-left: 15px;
    margin-right: 15px;

    div{
        text-align:center;
        padding-bottom: 15px;
        padding-right: 15px;
        padding-left: 15px;
    }
   
    
`

export const StyledTextcontainer = styled.div`
   background: linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%);
   text-align: center;
   padding:10px;


   h4{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
    
   }

   p{
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.9);
    padding:5px;
   }
    
`

export const StyledCardcontainer2 = styled.div`
    background: linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%);
    width: 226.38px;
    height:236.15px;
    
    
`

export const StyledTextcontainer2 = styled.div`
   background: linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%);
   text-align: center;
   padding:10px;
 


   h4{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
    
   }

   p{
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.9);
    padding:5px;
   }
    
`

export const StyledCardcontainer3 = styled.div`
    background: linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%);
    width: 226.38px;
    height:236.15px;
    
    
`

export const StyledTextcontainer3 = styled.div`
   background: linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%);
   text-align: center;
   padding:10px;
   

   h4{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
    
   }

   p{
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.9);
    padding:5px;
   }
    
`


