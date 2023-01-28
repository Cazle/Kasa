import { Component } from "react";
import Header from "../shared/Header";
import BodyError from '../componenents/BodyError/BodyError'


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
