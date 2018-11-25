import React,{Component} from 'react';

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';

export class BusRoutes extends Component{
    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
                <div className="container">
                        <h3>BUS ROUTES</h3>
                        <table className="table table-responsive-sm table-light">
                                    <thead>
                                        <tr>
                                        <th scope="col">BUS NUMBER </th>
                                        <th scope="col">BUS COMING FROM</th>
                                        </tr>
                                    </thead>
                                        
                                    <tbody>
                                            <tr>
                                                <td>W22</td>
                                                <td>Nursery</td>
                                            </tr>
                                            <tr>
                                                <td>W22</td>
                                                <td>North Nazimabad</td>
                                            </tr>
                                            <tr>
                                                <td>W22</td>
                                                <td>Hassan Square</td>
                                            </tr>
                                            <tr>
                                                <td>W22</td>
                                                <td>Gulshan</td>
                                            </tr>
                                            <tr>
                                                <td>W22</td>
                                                <td>OLD Subzimandi</td>
                                            </tr>
                                            <tr>
                                                <td>W22</td>
                                                <td>Shahrah-e-Faisal</td>
                                            </tr>
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