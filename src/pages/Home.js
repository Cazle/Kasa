import { Component } from "react";
import Header from "../componenents/Header";
import BannerAndCard from "../componenents/BannerAndCard/BannerAndCard";
import Footer from "../componenents/Footer";

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <BannerAndCard />
                <Footer />
            </>
        );
    }
}

export default Home;
