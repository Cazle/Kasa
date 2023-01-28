import styles from '../BannerAndCard/BannerAndCard.module.css'
import Banner from '../../assets/banner_frontpage.png'
import {Logements} from '../../datas/Logements'
import { Link } from 'react-router-dom'


function BannerAndCard(){
    
    
    
    return(
        <main>
            <img src={Banner} alt='Bannière'></img>
            <h2 className={styles.main_banner}>Chez vous, partout et ailleurs</h2>
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

export default BannerAndCard