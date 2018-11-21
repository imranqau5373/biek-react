import React,{Component} from 'react';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';

export class Contact extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
              <div className="container">
                <div className="text-center">
                    <h3>Contact us</h3>
                
                <p>
                Board of Intermediate Education Karachi.
                <br/>
                Bakhtairi Youth Center, North Nazimabad Karachi
                <br/>
                Karachi 74700.
                </p>
                <p><b>Exchange Numbers:</b></p>
                  <ul>
                      <li>9221 - 99260211</li>
                      <li>9221 - 99260212</li>
                      <li>9221 - 99260213</li>
                  </ul>
                  </div>
              </div>

            <br/>
            <br/>
            <Footer></Footer>
            </>
        )
    }
}