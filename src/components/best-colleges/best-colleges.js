import React,{Component} from "react";

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';
export class BestColleges extends Component{
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
                <h3 className="text-center">BEST COLLEGE OF THE YEAR</h3>
                <br/>
                <h4>Formula</h4>
                <p>
                   Best Institute score(BIS) = (Output Scores' - Input Score (weighted)) 
                   + . Scores Gained by Participation & Winning in Co-Curricular and 
                   Sports Activities of the Board + . 
                   Scores Gained by Printing of College Magazine 
                   (At least Once in Two) 
                    </p>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>
            </>
        )
    }
}