import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';


export class Secretary extends Component{

   render(){
       return(
           <>
           <Header></Header>
           <br/>
           <br/>
           <br/>
           <div className="container">
           <h2>Secretary</h2>
              <div className="text-right">
                 <Link className="btn btn-success" to="/secretary-history">History of Secretary</Link>
             </div>
             <br/>
             <div class="row probootstrap-gutter60 mb50">
              <div class="col-md-6 chairmain">
                <h3>Secretary BIEK</h3>
                <p><b>MRS. ZAREENA RASHID (ACTING).</b></p>
                <p> 30 Nov 2017</p>
                <p>No more Info...</p>
             </div>
              <div class="col-md-6">
                <figure><img src="https://www.mhdrama.co.uk/wp-content/uploads/2018/03/dummy-female.png" alt="dummy" class="img-responsive figure-img img-fluid" />
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