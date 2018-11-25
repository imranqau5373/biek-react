import React,{Component} from 'react';

import {ContactInfo,FacultyWiseCourses,EDUCATIONALOBJECTIVES,Mission} from './examinationContent';
import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';

export class Examination extends Component{
    constructor(props){
        super(props);
        this.edu= this.edu.bind(this);
       this.mis = this.mis.bind(this);
       this.fw = this.fw.bind(this);
       this.ci = this.ci.bind(this);

       this.state = {
           show: 'edu'
       }
    }

    edu(i){
        this.setState(state=>({show:i}));
    }
    mis(i){
        this.setState(state=>({show:i}));
    }
    fw(i){
        this.setState(state=>({show:i}));
    }
   ci(i){
       this.setState(state=>({show: i}));
   }

    render(){
        let heading;
        let showContent;
        
        switch(this.state.show){
            case 'eduobj':
            heading = 'EDUCATIONAL OBJECTIVES';
            showContent =  <EDUCATIONALOBJECTIVES/>
               
            break;
            
            case 'mission':
            heading= 'MISSION OF EXAMINATION DEPARTMENT';
            showContent =  <Mission/>
            break;
            
            case 'fwc':
            heading= 'Faculty Wise Courses';
            showContent =  <FacultyWiseCourses/>

            break;

            case 'cin':
            heading= 'CONTACT INFORMATION';
            showContent =  <ContactInfo/>

            break;
             
            default:
            heading = 'EDUCATIONAL OBJECTIVES';
            showContent = <EDUCATIONALOBJECTIVES/>
        }
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
            <div className="container">
            <div className="text-right">
                 <button className="btn btn-success btn-top-margin" onClick={this.edu.bind(this,'eduobj')}>Educational Objective</button>
                  &nbsp;
                 <button className="btn btn-success btn-top-margin" onClick={this.mis.bind(this,'mission')}>Mission</button>
                 &nbsp;
                 <button className="btn btn-success btn-top-margin" onClick={this.fw.bind(this,'fwc')}>Faculty wise Courses</button>
                 &nbsp;
                 <button className="btn btn-success btn-top-margin" onClick={this.ci.bind(this,'cin')}>Contact Information</button>
                </div>
                <div className="userResult">
                        <br/>
                            <h2>{heading}</h2>
                            <br/>  
                            {showContent}

                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>

            </>
        )
    }

}