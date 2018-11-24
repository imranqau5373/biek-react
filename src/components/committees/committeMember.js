import React,{Component} from 'react';

export class AppointmentCommitteeMembers extends Component{
  
    render(){
        return(
            <tr key={this.props.item.id}>
                <th scope="row">{this.props.item.name}</th>
                <td>{this.props.item.designation}</td>
                <td>{this.props.item.organization}</td>
                
            </tr>
        )
    }
}

export class AcadmicCommitteMembers extends Component{
    
    render(){
        return(
            <tr key={this.props.item.id}>
            <th scope="row">{this.props.item.name}</th>
            <td>{this.props.item.designation}</td>
            <td>{this.props.item.organization}</td>
            
        </tr>
        )
    }
}

export class FinanceCommitteMembers extends Component{
    
    render(){
        return(
            <tr key={this.props.item.id}>
            <th scope="row">{this.props.item.name}</th>
            <td>{this.props.item.designation}</td>
            <td>{this.props.item.organization}</td>
            
        </tr>
        )
    }
}