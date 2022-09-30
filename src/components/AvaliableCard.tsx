import imageTeste from '../images/cardImages/productPolaroid.jpg'

import Styles from '../styles/modules/AvaliableCard.module.css'
import starIcon from '../images/icons/star.svg'

export function AvaliableCard(){
    return(
        <section className={Styles.avaliableCardContainer}>
            <div className={Styles.area1}>

                <div className={Styles.image}>
                    <img src={imageTeste} alt="Foto de perfil" />
                </div>
                <div className={Styles.personInfo}>
                    <h3>Maria de tal</h3>
                    <p>
                        27 anos, cliente a mais de um ano.
                    </p>
                </div>
                <div className={Styles.avaliable}>
                    <h3>Avaliação</h3>
                    <div className={Styles.stars}>
                        <img src={starIcon} alt="Estrela de avaliação"/>
                        <img src={starIcon} alt="Estrela de avaliação"/>
                        <img src={starIcon} alt="Estrela de avaliação"/>
                        <img src={starIcon} alt="Estrela de avaliação"/>
                        <img src={starIcon} alt="Estrela de avaliação"/>
                    </div>
                </div>
            </div>
            <div className={Styles.testimonial}>
                <h3>Depoimento</h3>
                <h5>
                    Eu adorei o atendimento e os produtos que a desenahndo você faz, amei!
                </h5>
            </div>
        </section>
    );
}