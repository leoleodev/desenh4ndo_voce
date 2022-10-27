import Styles from '../styles/modules/HeaderMain.module.css'
import Styled from 'styled-components';

import IconPapelaria from '../images/icons/papelaria.svg'
import IconDoceria from '../images/icons/doceria.svg'
import IconGrafica from '../images/icons/grafica.svg'

import Slider from './Slider';
import { Swiper, SwiperProps , SwiperSlide } from 'swiper/react';
import { SliderItem } from './SliderItem';

export const SliderContainer = Styled.div`
    width: 30em;
    height: 30rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media(max-width: 1080px){    
        width: 20em;
        height: 20rem; 

    }
    @media(max-width: 720px){    
        width: 15em;
        height: 15rem;
    }   

`;

export function HeaderMain(){

    const settings: SwiperProps = {
        spaceBetween : 50,
        slidesPerView: 1,
        loop: true,
        pagination: {
            clickable: true
        },
        autoplay:{
            delay: 1000,
            disableOnInteraction: false,
        },
        
        
    }

    return(
        <div className={Styles.HeaderMainCantainer}>
            <section className={Styles.section1}>

                <h1>Excelência em personalizados</h1>
                <p className={Styles.subTitleHeader}>
                    3 anos no mercado entregando criatividade e autenticidade
                    ao clientes.
                </p>

                <article className={Styles.cardHeader}>
                    <div className={Styles.part1}>
                        <div className={Styles.circle}>
                            <img src={IconPapelaria} alt="Icon papelaria" />
                        </div>
                        <h3>Papelaria</h3>
                    </div>

                    <div className={Styles.part2}>
                        <div className={Styles.circle}>
                            <img src={IconDoceria} alt="Icon doceria" />
                        </div>
                        <h3>Doceria</h3>
                    </div>
                    <div className={Styles.part3}>
                        <div className={Styles.circle}>
                            <img src={IconGrafica} alt="Icon gráfica" />
                        </div>
                        <h3>Gráfica</h3>
                    </div>
                </article>

                <button className={Styles.buttonExplorer}>EXPLORAR</button>

            </section>
            <section className={Styles.section2}>
                <SliderContainer>

                    <Slider settings={settings}>
                        <SwiperSlide>
                            <SliderItem img={IconDoceria} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderItem img={IconPapelaria} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderItem img={IconGrafica} />
                        </SwiperSlide>
                    </Slider>
                    
                </SliderContainer>  
            </section>
        </div>
    );
}
