
import ImagePolaroid from '../images/cardImages/productPolaroid.jpg'
import IconOk from '../images/icons/ok.svg'
import IconCoins from '../images/icons/coin.svg'

import Styles from '../styles/modules/Card.module.css'

export function Card(){
    return(
        <article className={Styles.cardContainer}>

            <div className={Styles.image}>
                <img src={ImagePolaroid} alt="Foto de Lisa Fotios: 
                    https://www.pexels.com/pt-br/foto/pessoa-segurando-polaroid-1942487/"
                />
            </div>

            <div className={Styles.title}> <h3>Polaroids</h3> </div>

            <div className={Styles.description}>
                <p>                    
                    As clássicas polaroides nunca saem de moda, perfeiro para 
                    presentear a si mesmo e aos outros
                </p>
            </div>

            <div className={Styles.icons}>
                <div> <img src={IconOk} alt="Icone Disponível" /> <h3>Disponível</h3> </div>
                <div> <img src={IconCoins} alt="Icone Valor em reais" /> <h3>0,00</h3> </div>
            </div>
        </article>
    );
}
