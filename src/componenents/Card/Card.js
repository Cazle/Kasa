import styles from '../Card/Card.module.css'
import {Logements} from '../../datas/Logements'
import { Link } from 'react-router-dom'


function Card(){
    
    
    
    return(
        <main>
            <section className={styles.container}>
                {
                    Logements.map(logement =>{
                        return(
                            <Link to ={`/logements/${logement.id}`} className={styles.card} key={logement.id}>
                                <h3>{logement.title}</h3>
                                <img src={logement.cover} alt='Logements'></img>
                            </Link>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Card