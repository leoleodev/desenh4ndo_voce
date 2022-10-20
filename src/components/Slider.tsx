import styled from 'styled-components';

export const ContainerImage = styled.div`
    width: 100%;
    height: 200px;
    
    font-size: 30px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface SliderProps{
    img: string;
}

export function Slider(props: SliderProps){
    return(
        <ContainerImage>

            <img src={props.img} alt="imagem do slide" />

        </ContainerImage>
    );
}