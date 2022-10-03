
import Styles from '../styles/modules/ButtonCircle.module.css'

export function ButtonCircle(){
    return(
        <section className={Styles.complemetaryAreaContainer}>

            <div className={Styles.circle}>
                <div className={Styles.data}>
                    <svg>
                        <circle cx={70} cy={70} r={70}></circle>
                        <circle cx={70} cy={70} r={70}></circle>
                    </svg>
                </div>
            </div>

        </section>
    );
}
