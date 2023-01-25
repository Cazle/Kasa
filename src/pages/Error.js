import { Component } from "react";
import Header from "../componenents/Header";
import BodyError from '../componenents/BodyError'


class Error extends Component{
    render(){
        return(
            <>
                <Header />
                <BodyError />
                
            </>
        );
    }
}

export default Error;
