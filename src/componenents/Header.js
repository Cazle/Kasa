import '../styles/Header.css'
import logo from '../assets/logo_kasa.png'

function Header(){

    return(
    <nav className="kasa_nav">
        <div>
            <img src={logo} alt="logo" />
        </div>
            <div className="header_buttons">
                <button className='kasa_accueil'>Accueil</button>
                <button className='kasa_propos'>A Propos</button>
            </div>
    </nav>
    )
}

export default Header