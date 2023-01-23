import '../styles/Main.css'
import Banner from '../assets/banner_frontpage.png'

function Main(){
    return(
        <main>
                <img src={Banner} alt='Bannière'></img>
                <h2 className='main_banner'>Chez vous, partout et ailleurs</h2>
        </main>
    )
}

export default Main