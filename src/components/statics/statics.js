import React,{Component} from 'react';

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';


export class Statics extends Component{
    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
                <div className="container">
                  <h3>This Page is Under Construction..</h3>
                </div>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>
            </>
        )
    }
}