import Style from '../styles/modules/MovieSection.module.css'

export function MovieSection(){
    return(
        <section className={Style.MovieContainer}>

            <iframe
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/HG_ZC9N_4NM" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture"
                allowFullScreen
            >                
            </iframe>

            <div className={Style.text}>
                <h2>Um pouco mais sobre mim!</h2>

                <h4>
                    Apenas uma maneira mais interativa de me apresentar para meus
                    clientes, apreciem!
                </h4>

            </div>
        </section>
    );
}