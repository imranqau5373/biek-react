import React,{Component} from "react";

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';
export class Faculties extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="text-center">
                    <h3>ALL FACULTIES</h3>
                </div>
                <ol>
                    <li>
                    SCIENCE PRE - MEDICAL
                    </li>
                    <li>
                    SCIENCE PRE - ENGINEERING
                    </li>
                    <li> SCIENCE GENERAL (COMPUTER SCIENCE)</li>
                    <li>HUMANITES PRIVATE</li>
                    <li>HUMANITIES REGULAR</li>
                    <li> COMMERCE PRIVATE</li>
                    <li>COMMERCE REGULAR</li>
                    <li> CTC & PTC</li>
                    <li>HOMECONOMICS</li>
                </ol>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>
            </>
        )
    }
}