import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';

export class Activites extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <h2>Board of Intermediate Education Karachi</h2>
                <h3>Picture Galary</h3>
                <ul>
                    <li><Link to="http://www.biek.edu.pk/activeties/picture%20galary/WhatsApp%20Image%202018-04-11%20at%201.55.08%20PM.jpeg" target="_blank">Instructions regarding Annual Examinations 2018</Link></li>
                    <li><Link to="http://www.biek.edu.pk/activeties/picture%20galary/WhatsApp%20Image%202018-04-11%20at%201.56.53%20PM.jpeg" target="_blank">Award Distribution to the students</Link></li>
                    <li><Link to="http://www.biek.edu.pk/activeties/picture%20galary/WhatsApp%20Image%202018-04-11%20at%201.56.54%20PM.jpeg" target="_blank">Life Time Award given by Chairman BIE, Karachi</Link></li>

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