
import Styles from '../styles/modules/Footer.module.css'

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
                    <li> <a href="#"> <img src="" alt="Icone do whatsapp"/> Whatsapp </a> </li>
                    <li> <a href="#"> <img src="" alt="Icone do Instagram"/> Instagram </a> </li>
                    <li> <a href="#"> <img src="" alt="Icone do Facebook"/> Facebook </a> </li>
                </ul>
            </div>

            <div className={Styles.schedules}>
                <h2>Horários</h2>
                <ul>
                    <li> <img src="#" alt="Icone de tempo" /> Segunda à Sexta das 8h - 17h </li>
                    <li> <img src="#" alt="Icone de tempo" /> Sábados das 8h - 12h </li>
                    <li> <img src="#" alt="Icone de negação" /> Domingo Fechado </li>
                </ul>
            </div>
            

        </div>
    );
}