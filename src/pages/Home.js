import { Component } from "react";
import Header from "../shared/Header";
import BannerAndCard from "../componenents/BannerAndCard/BannerAndCard";
import Footer from "../shared/Footer";

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
