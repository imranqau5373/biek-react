import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./footer.css";

export class Footer extends Component{
    constructor(){
        super();
        this.openWindow = this.openWindow.bind(this);
        
    }

    openWindow(){
        window.open('https://www.fiverr.com/ghayyasmubashir','target=_blank');
    }
    render(){
        const cursor ={
            cursor: 'pointer'
         }
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
                        <li><Link to="/add-cri">Admission Criteria</Link></li>
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
                       <li><Link to="/best-clg">Best Colleges</Link></li>
                        <li><Link to="/committees">Committess</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/examination">Examination</Link></li>
                        <li><Link to="/allforms">All Forms</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>
                        <li><Link to="/authorizeBank">Authorized Banks</Link></li>
                        <li><Link to="/statics">Statistics</Link></li>
                        <li><Link to="#">Tenders</Link></li>
                        <li><Link to="/bus-routes">Bus Routes</Link></li>
                        <li><Link to="/faqs">FAQS</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>

                    </ul>
                </div>
            </div>
            <iframe title="google Maps" id="map-container" frameBorder="0" src="https://maps.google.com/maps?q=Board%20of%20Intermediate%20Education%20Karachi%2C%20Bakhtairi%20Youth%20Center%D8%8C%20North%20Nazimabad%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan&t=&z=11&ie=UTF8&iwloc=&output=embed">
            </iframe>
        </div>
        <div className="social-networks">
            <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
            <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
            <Link to="#" className="google"><i className="fa fa-google-plus"></i></Link>
        </div>
        <div className="footer-copyright">
            <p>© 2018 Copyright </p>
            <p>Design and Develop by <a onClick={this.openWindow.bind(this)} style={cursor}>Ghayyas Mubashir</a></p>
        </div>
    </footer>
           </>
        )
    }
}