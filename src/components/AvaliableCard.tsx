import imageTeste from '../images/cardImages/productPolaroid.jpg'

import Styles from '../styles/modules/AvaliableCard.module.css'

export function AvaliableCard(){
    return(
        <section className={Styles.avaliableCardContainer}>

            <div className={Styles.areaImage}><img src={imageTeste} alt="" /></div>

            <div className={Styles.areaOther}>
                <div className={Styles.areaInfo}>
                    <div className={Styles.personInfo}>
                        <h3>Maria de tal</h3>
                        <p>
                            Lorem ipsum, dolor sit amet contur adipisicing 
                            elit.
                        </p>
                    </div>
                    <div className={Styles.avaliable}>
                        <h3>Avaliação</h3>
                        <div className={Styles.stars}>
                            1 2 3 4 5
                        </div>
                    </div>
                </div>

                <div className={Styles.areaTestimonial}>
                    <h3>Depoimento:</h3>
                    <h6>
                        Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit.
                    </h6>
                </div>
            </div>

            
        </section>
    );
}