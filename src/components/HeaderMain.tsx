
import Style from '../styles/modules/HeaderMain.module.css'

import IconPapelaria from '../images/icons/papelaria.svg'
import IconDoceria from '../images/icons/doceria.svg'
import IconGrafica from '../images/icons/grafica.svg'

export function HeaderMain(){
    return(
        <div className={Style.HeaderMainCantainer}>
            <section className={Style.section1}>

                <h1>Excelência em personalizados</h1>
                <p className={Style.subTitleHeader}>
                    3 anos no mercado entregando criatividade e autenticidade
                    ao clientes.
                </p>

                <article className={Style.cardHeader}>
                    <div className={Style.part1}>
                        <div className={Style.circle}>
                            <img src={IconPapelaria} alt="Icon papelaria" />
                        </div>
                        <h3>Papelaria</h3>
                    </div>

                    <div className={Style.part2}>
                        <div className={Style.circle}>
                            <img src={IconDoceria} alt="Icon doceria" />
                        </div>
                        <h3>Doceria</h3>
                    </div>
                    <div className={Style.part3}>
                        <div className={Style.circle}>
                            <img src={IconGrafica} alt="Icon gráfica" />
                        </div>
                        <h3>Gráfica</h3>
                    </div>
                </article>

                <button className={Style.buttonExplorer}>EXPLORAR</button>

            </section>
            <section className={Style.section2}>

                <div className={Style.carrosel}>
                    
                </div>

            </section>
        </div>
    );
}