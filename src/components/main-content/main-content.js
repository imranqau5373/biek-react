import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./main-content.css";

export class MainContent extends Component{
  render(){
        return(

           <div className="container">
            <div className="row probootstrap-gutter60 mb50">
              <div className="col-md-6">
                <figure><img src="http://www.biek.edu.pk/images/quaid.jpg" alt="Quaid-e-Azam" className="img-responsive figure-img img-fluid rounded" />
                </figure>
              </div>

              <div className="col-md-6">
                <h2 className="g-bootstrap-heading"><b>Founder of Pakistan</b></h2>
                <p>Welcome to Intermediate Board of Education Karachi.</p>
                <p>Board of Intermediate Education Karachi was established as separate entity in 1974 through the "Sindh Boards of Intermediate and Secondary Education amendment act No. 20 of 1973.</p>
                <p>This Board has the power to organize, regulate, develop and control Intermediate Education. The controlling Authority of the Board is the Governor of Sindh or his nominee. The Chairman is the principal executive and academic officer of the Board, while the Secretary is the in charge of the academic and administrative Sector and the Controller of Examinations is the In charge of the Examination Section. The above officers and the Audit officer are appointed by the Controlling Authority of the Board, while other officers are also appointed by the Board on the recommendation of the appointment Committee. In the year, 1974, there were only 17 officers and 113 officials, now we have 51 officers and 246 officials. With a view to performing various functions systematically there are Statutory and non-Statutory committees have been constituted.</p>
              </div>

            </div>

            <hr />

            <div className="row probootstrap-gutter60 mb50">
              <div className="col-md-6">
                <h2 className="g-bootstrap-heading"><b>Chairman BIEK</b></h2>
                <p><b>PROF. INAM AHMED.</b></p>
                <p>1st Oct 2016</p>
                <p>M.Sc. in Communication Physics in 1976 from University of Sindh 
                   36 years teaching experience from intermediate to Post graduate level 
                    Ex: Director of College Education Karachi.</p>
                <p><Link to="/chairman" className="btn g-bootstrap-heading">Read more</Link></p>
              </div>
              <div className="col-md-6">
                <figure><img src="http://www.biek.edu.pk/Pic/Chairman.jpg" alt="Chairman" className="img-responsive figure-img img-fluid" />
                </figure>
              </div>
            </div>
            </div>
        )
    }
    
}