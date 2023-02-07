import { Component } from "react";
import Header from "../shared/Header";
import BannerAndCard from "../componenents/BannerAndCard/BannerAndCard";


class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <BannerAndCard />
            </>
        );
    }
}

export default Home;
