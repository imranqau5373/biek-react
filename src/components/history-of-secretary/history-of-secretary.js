import React,{Component} from "react";

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';
export class SecretaryHistory extends Component{
    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="text-center">
                    <h3>History of Secretary</h3>
                </div>
                <ul>
                    <li>
                       <p>
                           M. Sardar Muhammad Naqvi
                        </p> 
                        <p>
                        FROM: 1-Jan-1974 - TO: 28-May-1975
                        </p>   
                           </li>
                    <li> <p>M. Qazi Ahmed Sayeed </p>
                     <p>FROM: 24-Jul-1975    TO: 15-Dec-1976</p></li>
                    <li>
                       <p> Mr. Munawwar  Ul Islam Siddiqui </p> 
                  <p> FROM: 15-Dec-1976    TO: 18-Jun-1978</p></li>
                    <li><p> Mr. M. Izhar Ul Haq</p>    
                   <p> FROM: 18-Jun-1978    TO: 10-May-1981</p></li>
                    <li> <p>Mr. Ghayas Ul Haq Bhatti </p>
                   <p> FROM: 10-May-1981    TO: 16-Jan-1982 </p></li>
                    <li><p>Mr. Ghulam Sarwar Thahim </p>
                  <p>  FROM: 16-Jan-1982    TO: 12-Dec-1988</p></li>
                    <li><p> Syed Shaukat Hasan </p> 
                   <p> FROM: 12-Dec-1988    TO: 4-Sep-1988 </p></li>
                    <li><p> Mr. Ghayas Ul Haq Bhatti </p>
                   <p> FROM: 4-Sep-1988    TO: 4-Apr-1989</p></li>
                    <li><p>Mr. Ghulam Sarwar Thahim </p>
                   <p>FROM: 4-Apr-1989    TO: 4-Nov-1989</p> </li>
                    <li><p>Mr. Ghayas Ul Haq Bhatti
                    FROM: 4-Nov-1989    TO: 13-Feb-1990</p> </li>
                    <li><p>Dr. Altaf Ali G Shaikh</p>
                   <p>FROM: 13-Feb-1990    TO: 23-Jul-1992</p> </li>
                    <li> <p>Mr. Ghulam Sarwar Thahim </p>
                   <p>FROM: 23-Jul-1992    TO: 7-Feb-1995</p> </li>
                    <li> <p>Mr. Iqbal Ahmed Siddiqui
                    FROM: 7-Feb-1995    TO: 6-May-1995</p></li>
                    <li><p>Mr. farooq Kemal Siddiqui</p>
                   <p> FROM: 6-May-1995    TO: 15-Oct-1995</p></li>
                    <li><p> Prof A Zaheer Khan Paras</p> 
                  <p>  FROM: 15-Oct-1995    TO: 20-Dec-2005</p></li>
                    <li><p>Hafiz Arshad Indher </p>    
                   <p> FROM: 20-Dec-2005    TO: 19-Dec-2007</p></li>
                    <li><p>Prof Novain Ali Haider</p> 
                  <p>  FROM: 20-Dec-2007    TO: 22-Mar-2013</p></li>
                    <li><p>Prof Qazi Arshad Hussain Siddiqui</p>
                   <p> FROM: 29-Mar-2013    TO: 10 Oct 2015</p></li>
                    <li><p>Muhammad Rashid Qidwai (Acting)</p>
                   <p> FROM: 11-Dec-2015    TO: 14 Mar 2016</p></li>
                    <li><p>Azeem Ahmed (Acting)
                    FROM: 14 Mar 2016    TO: 30 Nov 2017</p></li>
                    <li><p> Mrs. Zareena Rashid </p>
                   <p> FROM: 30 Nov 2017    TO: todate</p>
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