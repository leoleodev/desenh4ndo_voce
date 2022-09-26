import iconFilter from '../images/icons/filter.svg'

import Styles from '../styles/modules/ServicesSection.module.css'

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
                    <h3>Filtros</h3>
                </button>
            </div>

            <div className={Styles.cards}>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
                <button>cards</button>
            </div>
        </section>
    );
}