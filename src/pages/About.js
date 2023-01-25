import { Component } from 'react'
import Header from '../componenents/Header'
import Footer from '../componenents/Footer'
import BannerAbout from '../componenents/Banner_About'
import '../styles/About.css'

class About extends Component{
    render(){
        return(
            <>
            <Header />
            <BannerAbout />
            <Footer />
            </>
        )
    }
}

export default About