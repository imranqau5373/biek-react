import React,{Component} from 'react';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
export class Organogram extends Component{
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
        <div className="text-center">
        <img src="http://www.biek.edu.pk/images/Orgonogram.gif" className="rounded mx-auto d-block" alt="Ornogram picture"/>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer></Footer>
        </>
       )
   }
}