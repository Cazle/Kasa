import '../styles/Header.css'
import logo from '../assets/logo_kasa.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
    <nav className="kasa_nav">
        <div>
            <img src={logo} alt="logo" />
        </div>
            <div>
                <Link to= '/' className='kasa_accueil'>Accueil</Link>
                <Link to='about'className='kasa_propos'>A Propos</Link>
            </div>
    </nav>
    )
}

export default Header