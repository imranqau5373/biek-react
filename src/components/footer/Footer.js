import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./footer.css";

export class Footer extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <>
             <footer id="myFooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chairman">Chairman</Link></li>
                        <li><Link to="/secretary">Secretary</Link></li>
                        <li><Link to="/exam-controller">Controller</Link></li>
                        <li><Link to="/result">Current Results</Link></li>
                        <li>
                        <Link to="/circular-news">Circular News</Link>
                        </li>
                        <li><Link to="http://www.biek.edu.pk/BIEK-TeacherRegForm/BIEKTeacherRegistrationForm.docx">Application Form</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>

                        <li><Link to="/board-members">Board Members</Link></li>
                        <li><Link to="/faculties">Faculties</Link></li>
                        <li><Link to="/result">Announced Results</Link></li>
                        <li><Link to="/affiliated-colleges">Affiliated Colleges</Link></li>
                        <li><Link to="#">Admission Criteria</Link></li>
                        <li>
                        <Link to="/date-sheet">Date Sheets</Link>
                        </li>  
                        <li>
                         <Link to="/activities">Activites</Link>
                        </li>
                        <li><Link to="http://www.biek.edu.pk/ModelPaper/ModelPAPER2017.pdf">Model Papers 2017</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>
                       <li><Link to="#">Best Colleges</Link></li>
                        <li><Link to="#">Committess</Link></li>
                        <li><Link to="#">About us</Link></li>
                        <li><Link to="#">Examination</Link></li>
                        <li><Link to="#">All Forms</Link></li>
                        <li><Link to="#">Sports</Link></li>
                        <li><Link to="/allforms">All Forms</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>
                        <li><Link to="#">Authorized Banks</Link></li>
                        <li><Link to="#">Statistics</Link></li>
                        <li><Link to="#">Tenders</Link></li>
                        <li><Link to="#">Map of Board</Link></li>
                        <li><Link to="#">Bus Routes</Link></li>
                        <li><Link to="#">FAQS</Link></li>
                        <li><Link to="#">Contact us</Link></li>

                    </ul>
                </div>
            </div>
            {/* <iframe id="map-container" frameborder="0"
                src="https://www.google.com/maps/place/Board+of+Intermediate+Education+Karachi/@24.9336208,67.0212042,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33f8b45f35705:0xa3b866d72801603d!8m2!3d24.9336208!4d67.0233929" >
            </iframe> */}
            <iframe id="map-container" frameBorder="0" src="https://maps.google.com/maps?q=Board%20of%20Intermediate%20Education%20Karachi%2C%20Bakhtairi%20Youth%20Center%D8%8C%20North%20Nazimabad%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan&t=&z=11&ie=UTF8&iwloc=&output=embed">
            </iframe>
        </div>
        <div className="social-networks">
            <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
            <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
            <Link to="#" className="google"><i className="fa fa-google-plus"></i></Link>
        </div>
        <div className="footer-copyright">
            <p>© 2018 Copyright </p>
            <p>Design and Develop by <Link to="www.fiverr.com/ghayyasmubashir" target="_blank">Ghayyas Mubashir</Link></p>
        </div>
    </footer>
           </>
        )
    }
}