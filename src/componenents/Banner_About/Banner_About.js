import styles from '../Banner_About/Banner_About.module.css'
import Banner from '../../assets/banner_about.png'
import BannerMobile from '../../assets/background_mobile_about.png'

function BannerAbout(){
    return(
        <div className={styles.banner_about}>
        <img className={styles.banner_mobile} src={BannerMobile} alt='bannière mobile'></img>
        <img className={styles.banner_none} src={Banner} alt='Bannière'></img>
        </div>
    )
}


export default BannerAbout