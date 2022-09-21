
import Style from '../styles/modules/HeaderBar.module.css'
import iconMusical from '../images/icons/musicPlay.svg'

export function HeaderBar(){
    return(

        <div className={Style.HeaderBarContainer}>
            {/* <img src="" alt="Logo marca Desenh4ndo Voce" /> */}

            <h1>Desenh4ndo_voce</h1>

            <button className={Style.buttonMusical}>
                <div>
                    <img src={iconMusical} alt="Button musical" />
                </div>
            </button>

        </div>

    );
}