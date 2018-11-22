import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import "./chairman.css";

import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';


export class Chairman extends Component{
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
           <h2>Chairman</h2>
              <div className="text-right">
                 <Link className="btn btn-success" to="/chairman-history">History of Chairman</Link>
             </div>
             <br/>
             <div class="row probootstrap-gutter60 mb50">
              <div class="col-md-6 chairmain">
                <h3>Chairman BIEK</h3>
                <p><b>PROF. INAM AHMED.</b></p>
                <p>1st Oct 2016</p>
                <p>M.Sc. in Communication Physics in 1976 from University of Sindh 
                   36 years teaching experience from intermediate to Post graduate level 
                    Ex: Director of College Education Karachi.</p>
              
              <h3>MESSAGE OF CHAIRMAN</h3>
              <p>
                 Education system of any country is valued as its backbone and plays a pivotal role
                 in its development. 
                 Contrarily, if the system is corrupt and deteriorated, 
                 it can hardly deliver its promised role. 
                 Nations with strong educational background achieve the desired 
                 results in a very short span of time.
              </p>
              <p>
              Pakistan has one of the lowest literacy rates in the world 
              and according to the United Nations Educational, 
              Scientific and Cultural Organization (UNESCO), 
              it is 55% and Pakistan stands at 160th in total 
              countries of the world.
             </p>
             <p>
             No educational system can be successful unless it has an 
             examination mechanism free from the menace of all kinds of 
             favoritism and nepotism.
            </p>
            <p>
            The Educational Boards are the organizations entrusted with this 
            responsibility headed by its Chairman and its all 
            functionaries and expected to deliver their National duties in a 
            befitting manner.
            </p>
            <p>
            I have been assigned the responsibility of heading the 
            Board of Intermediate Education Karachi and determined to make 
            it an organization of good repute whose results are supposed 
            to be acceptable worldwide with the support of higher 
            authorities and cooperation of educationists, 
            students and general public.
            </p>
            <p>
            May the Almighty give us / me the strength and His blessing in 
            achieving the task successfully. 
            </p>
            <p>Amin</p>
            </div>
              <div class="col-md-6">
                <figure><img src="http://www.biek.edu.pk/Pic/Chairman.jpg" lt="Free Bootstrap Template by uicookies.com" class="img-responsive figure-img img-fluid" />
                </figure>
              </div>
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