import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import {Header} from "../header/Header";
import {Footer} from '../footer/Footer';
export class About extends Component{
    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <div className="container">
              <h2>About us</h2>
              <div className="text-right">
                 <Link className="btn btn-success" to="/boardHistory">History of Board</Link>
                 &nbsp;
                 <Link className="btn btn-success" to="/organogram">Organogram </Link>
             </div>
             <br/>
              <div className="container">
              <p>
                   The Board of Intermediate Education Karachi is not only an examining body 
                   but is also responsible for maintaining and controlling the standard of education
                   and other activities, which ensure physical, moral and spiritual development of the college students.
              </p>
              <p>
                   Board of Intermediate Education Karachi was established as separate entity in 1974
                   through the "Sindh Boards of Intermediate and Secondary Education amendment 
                   act No. 20 of 1973.
              </p>
              <p>
                    This Board has the power to organize, 
                    regulate, develop and control Intermediate Education. 
                    The controlling Authority of the Board is the Governor of Sindh or his nominee.
                    The Chairman is the principal executive and academic officer of the Board, 
                    while the Secretary is the in charge of the academic and administrative Sector and 
                    the Controller of Examinations is the In charge of the Examination Section. 
                    The above officers and the Audit officer are appointed by the Controlling Authority of the Board,
                    while other officers are also appointed by the Board on the recommendation of the appointment 
                    Committee. 
                    In the year, 1974, there were only 17 officers and 113 officials, 
                    now we have 51 officers and 246 officials. 
                    With a view to performing various functions systematically there are Statutory and non-Statutory committees have been constituted.
              </p>

              </div>
            </div>
            <Footer></Footer>
            </>
        )
    }
}