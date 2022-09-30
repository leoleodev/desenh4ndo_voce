
import Styles from '../styles/modules/DepositionsSection.module.css'
import commentsIcon from '../images/icons/commentsIcon.svg'
import { AvaliableCard } from './AvaliableCard';

export function DepositionsSection(){
    return(
        <section className={Styles.depositionContainer}>

            <h2>Depoimentos e Estatisticas</h2>

            <div className={Styles.depositionContent}>
                <img src={commentsIcon} alt="Icone de depoimentos" />
                <div className={Styles.commentsArea}>
                    <AvaliableCard />                   
                    <AvaliableCard />                   
                    <AvaliableCard />                   
                    <AvaliableCard />                   
                    <AvaliableCard />                   
                </div>
                    
            </div>
            <div className={Styles.complementaryArea}>

                {/* card circuilo */}
                <button>circle</button>
                <button>circle</button>
                <button>circle</button>
                
            </div>

        </section>
    );
}