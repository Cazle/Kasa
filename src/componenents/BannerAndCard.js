import '../styles/BannerAndCard.css'
import Banner from '../assets/banner_frontpage.png'
import {Logements} from '../datas/Logements'


function BannerAndCard(){
    
    
    
    return(
        <main>
            <img src={Banner} alt='Bannière'></img>
            <h2 className='main_banner'>Chez vous, partout et ailleurs</h2>
            <section className='container'>
                {
                    Logements.map(logement =>{
                        return(
                            <article className="card" key={logement.id}>
                                <h3>{logement.title}</h3>
                                <img src={logement.cover} alt='Logements'></img>
                            </article>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default BannerAndCard