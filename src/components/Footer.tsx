
import Styles from '../styles/modules/Footer.module.css'

import iconWhatsapp from '../images/icons/whatsappIcon.svg'
import iconInstagram from '../images/icons/instagramIcon.svg'
import iconFacebook from '../images/icons/facebookIcon.svg'
import iconTime from '../images/icons/clock.svg'
import iconClose from '../images/icons/close.svg'

export function Footer(){
    return(
        <div className={Styles.footerContainer}>

            <div className={Styles.localization}>
                <h2>Localização</h2>
                <h4>
                    Rua francisco Alves de Araújo, Bairro Governador Ferraz, Nº 59, mesma
                     rua do posto de gasolina Tianguaense.
                </h4>
            </div>

            <div className={Styles.socialMedia}>
                <h2>Redes Sociais</h2>
                <ul>
                    <li> <a href="#"> <img src={iconWhatsapp} alt="Icone do whatsapp"/> Whatsapp </a> </li>
                    <li> <a href="#"> <img src={iconInstagram} alt="Icone do Instagram"/> Instagram </a> </li>
                    <li> <a href="#"> <img src={iconFacebook} alt="Icone do Facebook"/> Facebook </a> </li>
                </ul>
            </div>

            <div className={Styles.schedules}>
                <h2>Horários</h2>
                <ul>

                    <li> <a href="#"> <img src={iconTime} alt="Icone de tempo"/> Seg à Sex de 8h - 17h </a> </li>
                    <li> <a href="#"> <img src={iconTime} alt="Icone de tempo"/> Seg à Sex de 8h - 17h </a> </li>
                    <li> <a href="#"> <img src={iconTime} alt="Icone de negação"/> Fechado </a> </li>
                    
                </ul>
            </div>
            

        </div>
    );
}