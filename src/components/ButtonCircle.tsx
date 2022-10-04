
import Styles from '../styles/modules/ButtonCircle.module.css'

export function ButtonCircle(){
    return(
        <section className={Styles.complemetaryAreaContainer}>

            <div className={Styles.time}>
                <div className={Styles.circle}>
                    <div className={Styles.dot}></div>
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className={Styles.info}>90%</div>
                </div>
            </div>

            <h3>Rapidez na entrega</h3>

        </section>
    );
}
