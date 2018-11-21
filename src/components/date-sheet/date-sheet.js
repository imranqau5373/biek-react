import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';

export class DateSheet extends Component{
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
            <div className="container text-center">
                 <h2>Date Sheet</h2>
                 <ul>
                    <li><Link to="http://www.biek.edu.pk/datesheet/Annual%202018/DATE%20SHEET%202nd%20PHASE%20HSC%20ANNUAL%20EXAMINATION%202018.pdf">Consolidated DateSheet of Humanities (Reg & Pvt), Special Students (New)</Link></li>
                    <li><Link to="http://www.biek.edu.pk/datesheet/Annual%202018/DATE%20SHEET%20HSC%20ANNUAL%20EXAMINATION%202018%20(1).pdf">Consolidated DateSheet for Annual Examinations 2018 (New)</Link></li>
                    <li><Link to="http://www.biek.edu.pk/datesheet/2017/S-2017/final%20Date%20Sheet%20Supply%202017-27-11-17.pdf">Consolidated Datesheet for Supplimentry Examinations 2017</Link></li>
                    <li><Link to="http://www.biek.edu.pk/datesheet/ConsolidatedDateSheet%20Annual2017.pdf">Datesheet of the Annual Examinations 2017 (Phase - I)</Link></li>
                    <li><Link to="#">Datesheet of the Annual Examinations 2017 (Phase - II)</Link></li>

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