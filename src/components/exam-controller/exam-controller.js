import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';


export class ExamController extends Component{
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
           <h2>CONTROLLER OF EXAMINATIONS</h2>
              <div className="text-right">
                 <Link className="btn btn-success" to="/exam-controller-history">History of Controller</Link>
             </div>
             <br/>
             <div class="row probootstrap-gutter60 mb50">
              <div class="col-md-6 chairmain">
                <h3>Controller BIEK</h3>
                <p><b>MR. AZEEM AHMED.</b></p>
                <p>  08th August 2018</p>
                <p>Controller of Examinations (Acting ) Board of Intermediate Education Karachi </p>
             </div>
              <div class="col-md-6">
                <figure><img src="https://www.ra-kazup.hr/karla/wp-content/uploads/2016/11/avatar-no-photo.png" alt="No Image Found" class="img-responsive figure-img img-fluid" />
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