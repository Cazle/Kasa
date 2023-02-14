import { Component } from "react";
import Card from "../componenents/Card/Card";
import BannerHome from '../componenents/Banner_Home/BannerHome'



class Home extends Component{
    render(){
        return(
            <>
                <BannerHome />
                <Card />
            </>
        );
    }
}

export default Home;
