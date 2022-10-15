
import Style from '../styles/modules/HeaderBar.module.css'
import iconMusicalPlay from '../images/icons/musicPlay.svg'
import iconMusicalStop from '../images/icons/musicStop.svg'

import song1 from '../music/songTeste.mp3'

import { useState } from 'react';

export function HeaderBar(){

    const[isActive, setActive] = useState(false);

    function verificationButtonMusic(){
        { isActive ? setActive(false) : setActive(true) }
    }

    function musicEnded(){
        console.log("music ended")
    }

    return(

        <div className={Style.HeaderBarContainer}>
            {/* <img src="" alt="Logo marca Desenh4ndo Voce" /> */}

            <h3>Desenh4ndo_voce</h3>

            { isActive ? 
            <button
            type='button'
            className={Style.buttonMusical}
            onClick={verificationButtonMusic}
            >                
                <div>
                    <audio autoPlay onEnded={musicEnded} src={song1}></audio>
                    <img src={iconMusicalStop} alt="Button musical" />
                </div>
            </button>
            : 
            <button
            type='button'
            className={Style.buttonMusical}
            onClick={verificationButtonMusic}
            >                
                <div>
                    <img src={iconMusicalPlay} alt="Button musical" />
                </div>
            </button> }            

        </div>

    );
}
