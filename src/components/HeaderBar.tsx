
import Style from '../styles/modules/HeaderBar.module.css'
import iconMusicalPlay from '../images/icons/musicPlay.svg'
import iconMusicalStop from '../images/icons/musicStop.svg'

import { useState, useEffect } from 'react';

export function HeaderBar(){

    const[isActive, setActive] = useState(false);

    function verificationButtonMusic(){

        setActive(true)

    }

    useEffect( ()=>{
        console.log(isActive)
    }, [isActive] )

    return(

        <div className={Style.HeaderBarContainer}>
            {/* <img src="" alt="Logo marca Desenh4ndo Voce" /> */}

            <h3>Desenh4ndo_voce</h3>

            { isActive ? <button
            type='button'
            className={Style.buttonMusical}
            onClick={verificationButtonMusic}
            >
                
                <div>
                    <img src={iconMusicalPlay} alt="Button musical" />
                </div>
            </button> : <button
            type='button'
            className={Style.buttonMusical}
            onClick={verificationButtonMusic}
            >
                
                <div>
                    <img src={iconMusicalStop} alt="Button musical" />
                </div>
            </button> }

            

        </div>

    );
}