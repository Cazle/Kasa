import '../styles/Footer.css'
import logo from '../assets/white_logo_kasa.png'

function Footer(){

    return(
        <footer className='footer_kasa'>
        <img src={logo} alt='logo'></img>
        <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer