import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';


export class CircularNews extends Component{
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
                <div className="text-center">
                    <h3>Circulars & Notifications</h3>
                    <ul>
                        <li> <Link to="#"> Notification regarding extention of dates for Supply 2018 Examination forms (N E W)</Link></li>
                        <li> <Link to="#"> Notification regarding Submission of Exam: form HSC Supply: 2018 HT reg ( N E W)</Link></li>
                        <li> <Link to="#"> Acceptance of scutiny forms HT(reg) Part-II Annaul examinations 2018 ( N E W )</Link></li>
                        <li> <Link to="#"> Notification regarding Special Chance , All Groups ( N E W )</Link></li>
                        <li> <Link to="#"> Notice regarding submission of Exam: forms Supply 2018 Com(Reg) ( N E W )</Link></li>
                        <li> <Link to="#"> Notice regarding submission of Exam: forms Supply 2018 pvt candidates ( N E W )</Link></li>
                        <li> <Link to="#"> Notice regarding announcement of Commere Pvt Part-II 2018 result ( N E W )</Link></li>
                        <li> <Link to="#"> Notification regarding extention of dates for Supply 2018 Examination forms (N E W)</Link></li>
                        <li> <Link to="#"> Notification regarding extention of dates for Supply 2018 Examination forms (N E W)</Link></li>

                    </ul>
                </div>
             </div>
         <br/>
         <br/>
         <br/>
         <Footer></Footer>
         </>
        )
    }
} 