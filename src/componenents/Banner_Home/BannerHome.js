import styles from '../Banner_Home/BannerHome.module.css'
import Banner from '../../assets/banner_frontpage.png'

function BannerHome(){
    return(
        <div className={styles.bannerHome}>
            <img src={Banner} alt='Bannière'></img>
            <h2 className={styles.main_banner}>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default BannerHome