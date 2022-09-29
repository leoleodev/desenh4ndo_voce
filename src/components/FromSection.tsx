
import Styles from '../styles/modules/FormSection.module.css'

export function FormSection(){
    return(
        <section className={Styles.sectionFormContainer}>
            <div className={Styles.firstContent}>
                <h2>Premium List</h2>
                <h4>
                    Como o desenahdo você sempre está a procura de melhorar meus
                     serviços e produtos para meus clientes resolvi criar um 
                     formulário de cadastro para que os interessados recebam 
                     promoções, novidades, lista de preços atualizada e outros 
                     benefícios.
                </h4>
            </div>
            <div className={Styles.secondContent}>
                <h2>
                    Preencha o formulário e seja mais um membro da <span>PREMIUM LIST</span>
                </h2>
                <form>
                    <input type="text" name="name" id="name" placeholder='Nome'/>
                    <input type="text" name="lastName" id="lastName" placeholder='Sobre nome'/>
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    <input type="tel" name="tel" id="tel" placeholder="Telefone" />
                    <textarea name="textArea" id="textArea" placeholder='Deixe-me uma mensagem'></textarea>

                    <button type="button" id="buttonSubmit">ENVIAR</button>
                </form>
            </div>
        </section>
    );
}
