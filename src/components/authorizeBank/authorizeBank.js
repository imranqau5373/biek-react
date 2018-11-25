import React,{Component} from 'react';

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';

export class AuthorizeBank extends Component{
    constructor(props){
        super(props);
        this.openBank = this.openBank.bind(this);
    }
    openBank(){
        window.open('http://www.biek.edu.pk/Notifications/2017/2017-01-16-BANK-A.jpg',"target=_blank");
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
                    <h3>Authorize Bank</h3>
                    <p>(Any Type of Forms Can be Submitted to Given Below Banks)</p>
                    <button className="btn btn-success" onClick={this.openBank.bind(this)}>
                    DOWNLOAD UNITED BANK LIMITED BRANCHES
                    </button>
                    <p>Where students can be facilited</p>
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