import '../styles/BannerAndCard.css'
import Banner from '../assets/banner_frontpage.png'
import {Logements} from '../datas/Logements'

console.log(Logements)

function BannerAndCard(){
    
    
    
    return(
        <main>
                <img src={Banner} alt='Bannière'></img>
                <h2 className='main_banner'>Chez vous, partout et ailleurs</h2>
            <section className='container'>
                <article className='card_logements'>
                {Logements.map(({ id, title }) => (
					<h1
						id={id}
						title={title}
						
					/>
				))}
                </article>
            </section>
        </main>
    )
}

export default BannerAndCard