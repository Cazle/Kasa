import { Component } from 'react'
import Header from '../shared/Header'
import BannerAbout from '../componenents/Banner_About/Banner_About'
import Collapse from '../componenents/Collapse/Collapse'
import datas_about from '../datas/About_datas'



class About extends Component{
    render(){
        return(
            <div>
            <Header />
            <BannerAbout />
            <div>
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
            </div>
        )
    }
}

export default About