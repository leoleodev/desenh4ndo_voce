import styled from 'styled-components';

export const ContainerImage = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
    }

`;

interface SliderProps{
    img: string;
}

export function SliderItem(props: SliderProps){
    return(
        <ContainerImage>
            <img src={props.img} alt="imagem do slide" />
        </ContainerImage>
    );
}