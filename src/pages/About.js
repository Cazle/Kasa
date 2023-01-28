import { Component } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import BannerAbout from '../componenents/Banner_About/Banner_About'
import styles from '../pages/About.module.css'
import Collapse from '../componenents/Collapse/Collapse'
import datas_about from '../datas/About_datas'



class About extends Component{
    render(){
        return(
            <div className={styles.div}>
            <Header />
            <BannerAbout />
            <div className='about_div'>
                {datas_about.map((data, i) =>{
                    return(
                        <Collapse
                        key={i}
                        title={data.title}
                        description={data.description} 
                        />
                    )
                })}
            </div>
            <Footer />
            </div>
        )
    }
}

export default About