
import Style from '../styles/modules/HeaderBar.module.css'
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
        setCounter(Math.round(Math.random()*(playlist.length - 0)+0));
     }

    function verificationButtonMusic(){
        { isActive ? (
                setActive(false),
                console.log("setActive = false")
            )
            : (
                setActive(true),
                console.log("setActive = True")
            ) 
        }
    }

    function musicEnded(){
        if(counter === playlist.length){
            setActive(false)
            console.log("playlist ended")
        }else{
            handleIdMusic();
        }        
    }

    return(
        <div onLoad={componentLoad} className={Style.HeaderBarContainer}>
            {/* <img src="" alt="Logo marca Desenh4ndo Voce" /> */}

            <h3>Desenh4ndo_voce</h3>

            { isActive ? 
            <button
            type='button'
            className={Style.buttonMusical}
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
