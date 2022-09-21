
import Style from '../styles/modules/HeaderMain.module.css'

import IconPaper from '../images/icons/scissors.svg'
import IconDoceria from '../images/icons/paper.svg'
import IconGráfica from '../images/icons/printer.svg'

export function HeaderMain(){
    return(
        <div className={Style.HeaderMainCantainer}>
            <section className={Style.section1}>

                <h1>Excelência em personalizados</h1>
                <p>
                    3 anos no mercado entregando criatividade e autenticidade
                    ao clientes.
                </p>

                <article>
                    <div className="part1">
                        <div className="circle">
                            {/* <img src={IconPaper} alt="Icon papelaria" /> */}
                        </div>
                        <h3>Papelaria</h3>
                    </div>

                    <div className="part2">
                        <div className="circle">
                            {/* <img src={IconDoceria} alt="Icon doceria" /> */}
                        </div>
                        <h3>Doceria</h3>
                    </div>
                    <div className="part3">
                        <div className="circle">
                            {/* <img src={IconGráfica} alt="Icon gráfica" /> */}
                        </div>
                        <h3>Gráfica</h3>
                    </div>
                </article>

                <button>EXPLORAR</button>

            </section>
            <section>

                <div className="carrosel">
                    sadsdv
                </div>

            </section>
        </div>
    );
}