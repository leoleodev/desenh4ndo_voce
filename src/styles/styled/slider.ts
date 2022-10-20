import Styled from 'styled-components';

export const SliderContainer = Styled.div`
    width: 30em;
    height: 30rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    @media(max-width: 1080px){    
        width: 20em;
        height: 20rem; 

    }
    @media(max-width: 720px){    
        width: 15em;
        height: 15rem;
    }
    @media(max-width: 600px){    
        width: 12em;
        height: 12rem;
    }

    Slider{
        width: 10px;
    }

`;