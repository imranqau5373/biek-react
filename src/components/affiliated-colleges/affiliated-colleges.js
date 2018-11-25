import React,{Component} from "react";
import {Link} from 'react-router-dom';

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';
export class AffliatedColleges extends Component{
    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="text-center">
                    <h3>AFFILIATED COLLEGES</h3>
                </div>
                <ul>
                    <li>
                        <p><b>Government Affiliated Colleges</b></p>
                        <Link to="/government-aff-c">All Male & Female & Co Colleges</Link>
                    </li>
                    <li>
                    <p><b>Private Affiliated Colleges</b></p>
                        <Link to="/private-aff-c">All Male, Female & Co Colleges</Link>
                    </li>

                </ul>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>
            </>
        )
    }
}