import { Link } from "react-router-dom"
import styles from '../BodyError/BodyError.module.css'
import Home from '../../pages/Home'

export

function Error(){

    return(
    <div className={styles.kasa_error}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas</p>
        <Link to ='/' element={<Home />}>Retourner sur la page d'accueil</Link>
    </div>
    )
}

export default Error