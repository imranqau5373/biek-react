import React,{Component} from "react";

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';
import {AppointmentCommitteeMembers,FinanceCommitteMembers,AcadmicCommitteMembers} from './committeMember'; 
import {CommitteesArray} from './committeesArray';

import "./committes.css";




export class Committees extends Component{
    constructor(props){
        super(props)
       this.appc= this.appc.bind(this);
       this.acc = this.acc.bind(this);
       this.fic = this.fic.bind(this);
       this.state = {
           show: 'appc',
       }
        

    }
    appc(i){
        this.setState(state=>({show:i}));
    }
    acc(i){
        this.setState(state=>({show:i}));
    }
    fic(i){
        this.setState(state=>({show:i}));
    }

    render(){
        let members;
        let showCommitteeMemebers;
        
        switch(this.state.show){
            case 'appointment':
            members = 'Appointment Committee Members';
            showCommitteeMemebers = CommitteesArray.appcArray.map((item,index)=>{
                return <AppointmentCommitteeMembers item={item} key={index}/>
               });
            break;
            
            case 'finance':
            members= 'Finance Committee Members';
            showCommitteeMemebers = CommitteesArray.ficArray.map((item,index)=>{
                return <FinanceCommitteMembers item={item} key={index}/>
               });
            
            break;
            
            case 'acadmic':
            members= 'Academic Committee Memebers';
            showCommitteeMemebers = CommitteesArray.accArray.map((item,index)=>{
                return <AcadmicCommitteMembers item={item} key={index}/>
               });
            break;
             
            default:
               members = 'Appointment Committee Members';
               showCommitteeMemebers = CommitteesArray.appcArray.map((item,index)=>{
                return <AppointmentCommitteeMembers item={item} key={index}/>
               }); 
        }
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <h2>Committees</h2>
                <div className="text-right">
                 <button className="btn btn-success btn-top-margin" onClick={this.appc.bind(this,'appointment')}>Appointment Committee</button>
                  &nbsp;
                 <button className="btn btn-success btn-top-margin" onClick={this.acc.bind(this,'acadmic')}>Academic Committee</button>
                 &nbsp;
                 <button className="btn btn-success btn-top-margin" onClick={this.fic.bind(this,'finance')}>Finance Committee</button>
                </div>
             
                <div className="text-center userResult">
                        <br/>
                            <h4>{members}</h4>

                            </div>
                             <table className="table table-responsive-sm table-light">
                                    <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Organization</th>
                                        </tr>
                                    </thead>
                                        
                                    <tbody>
                                        {showCommitteeMemebers}
                                    </tbody>
                                </table> 
            </div>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>
            </>
        )
    }
}