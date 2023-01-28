import styles from '../Banner_About/Banner_About.module.css'
import Banner from '../../assets/banner_about.png'

function BannerAbout(){
    return(
        <div className={styles.body}>
        <img src={Banner} alt='Bannière'></img>
        </div>
    )
}


export default BannerAbout