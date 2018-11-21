import React, {Component} from 'react';
import {Header}  from '../header/Header';
import {Footer} from '../footer/Footer';
import {Link} from 'react-router-dom';
import "./ResultPage.css";
export class ResultPage extends Component{
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
              <h2>Annual Result 2018</h2>
                  <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Your Roll Number" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option selected>Choose...</option>
                                <option value="1">Humanities(Reg) Part-II A/Examination 2018</option>
                                <option value="2">Humanities(Pvt) Part-II A/Examination 2018</option>
                                <option value="3">Commerce(Reg) Part-II A/Examination 2018</option>
                                <option value="4">Commerce(Pvt) Part-II A/Examination 2018</option>
                                <option value="5">Pre-Engineering Part-II A/Examination 2018</option>
                                <option value="6">General Science Part-II A/Examination 2018</option>
                                <option value="7">Science Pre-Medical Part-II A/Examination 2018</option>
                                <option value="8">Medical Technology Part-II A/Examination 2018</option>
                                <option value="9">Home Economics Part-II A/Examination 2018</option>
                                <option value="10">Diploma in Physical Education Part-II A/Examination 2018</option>
                                <option value="11">Special Candidates Part-II A/Examination 2018</option>
                         </select>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Check</button>
                        </div>
                    </div>

                    <br/>

                      <div className="text-center userResult">

                            <h1 hidden>No Result Found..</h1>

                            <h4 id="passed" className="passed">
                            Congratulations you are Passed
                            </h4>
                            <h4 hidden id="failed" className="failed">
                                Sorry you are Failed
                            </h4>
                            </div>
                             <table className="table table-responsive-sm table-dark">
                                    <thead>
                                        <tr>
                                        <th scope="col">Roll Number</th>
                                        <th scope="col">Total Marks</th>
                                        <th scope="col">Passing Marks</th>
                                        <th scope="col">Obtained Marks</th>
                                        <th scope="col">Percentage</th>
                                        <th scope="col">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">58945</th>
                                        <td>590</td>
                                        <td>320</td>
                                        <td>440</td>
                                        <td>79%</td>
                                        <td>A</td>
                                        </tr>
                                        </tbody>
                                </table> 
                      
                      




                    <br/>
                  <div className="text-center">
                    <h3>Download PDF Result 2018</h3>
                    <br/>
                    <ul>
                        <li><Link to="#">Humanities(Reg) Part-II A/Examination 2018</Link></li>
                        <li>
                        <Link to="#">Humanities(Pvt) Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">Commerce(Reg) Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">Commerce(Pvt) Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">Pre-Engineering Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">General Science Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">Science Pre-Medical Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">Medical Technology Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">Home Economics Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">Diploma in Physical Education Part-II A/Examination 2018</Link>

                        </li>
                        <li>
                        <Link to="#">Special Candidates Part-II A/Examination 2018</Link>

                        </li>

                    </ul>
                    </div>
            </div>
            <Footer></Footer>
            </>
        )
    }
}