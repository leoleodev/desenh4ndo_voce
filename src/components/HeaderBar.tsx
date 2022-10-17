
import Styles from '../styles/modules/HeaderBar.module.css'
import iconMusicalPlay from '../images/icons/musicPlay.svg'
import iconMusicalStop from '../images/icons/musicStop.svg'

import song1 from '../music/songTeste.mp3'
import song2 from '../music/songTeste2.mp3'

import { useState } from 'react';

export function HeaderBar(){

    const[isActive, setActive] = useState(false);
    const[counter, setCounter] = useState(0);
    
    const playlist = [ 
        song1,
        song2,                       
     ]

     function componentLoad(){
        handleIdMusic();      
     }

     function handleIdMusic(){
        let min = 0;
        let max = playlist.length;

        min = Math.ceil(min);
        max = Math.floor(max);
        setCounter(Math.floor(Math.random() * (max - min) + min));
        console.log(`handleIdMusic actived ${counter}`);    
     }

    function verificationButtonMusic(){
        { isActive ? (
                setActive(false)
            )
            : (
                setActive(true)
            ) 
        }
    }

    function musicEnded(){
        handleIdMusic();       
    }

    return(
        <div onLoad={componentLoad} className={Styles.HeaderBarContainer}>
            {/* <img src="" alt="Logo marca Desenh4ndo Voce" /> */}

            <h3>Desenh4ndo_voce</h3>

            { isActive ? 
            <button
            type='button'
            className={Styles.buttonMusical}
            onClick={verificationButtonMusic}
            >                
                <div>
                    <audio 
                    autoPlay 
                    onEnded={musicEnded} 
                    src={playlist[counter]}
                    ></audio>
                    <img src={iconMusicalStop} alt="Button musical" />
                </div>
            </button>
            : 
            <button
            type='button'
            className={Styles.buttonMusical}
            onClick={verificationButtonMusic}
            >                
                <div>
                    <img src={iconMusicalPlay} alt="Button musical" />
                </div>
            </button> }            

        </div>
    );
}
