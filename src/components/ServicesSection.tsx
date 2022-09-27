import Styles from '../styles/modules/ServicesSection.module.css'
import iconFilter from '../images/icons/filter.svg'
import { Card } from './Card';

export function ServicesSection(){
    return(
        <section className={Styles.ServicesSectionContainer}>
            <div className={Styles.info}>
                <div className={Styles.texts}>
                    <h2>Conheça nossos produtos e serviços</h2>
                    <h4>
                        Além de produtos a pronta entrega o desenh4ndo voce
                        também confecciona produtos que levam seus gostos, duas
                        preferências e até mesmo seu rosto e de quem voce ama
                        e quer presentear. <span>Confira!</span>
                    </h4>
                </div>
                <button className={Styles.filter}>
                    <img src={iconFilter} alt="Ícone de filtro" />
                    Filtros
                </button>
            </div>

            <div className={Styles.cards}>
                <Card />
            </div>
        </section>
    );
}