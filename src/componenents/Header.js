import '../styles/Header.css'

function Header(){

    return(
    <nav className="kasa_nav">
        <div>
            <h1>Kasa</h1>
        </div>
            <div className="header_buttons">
                <button>Accueil</button>
                <button>A Propos</button>
            </div>
    </nav>
    )
}

export default Header