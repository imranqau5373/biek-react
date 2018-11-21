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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Chairman</a></li>
                        <li><a href="#">Secretary</a></li>
                        <li><a href="#">Controller</a></li>
                        <li><a href="#">Current Results</a></li>
                        <li className="nav-item">
                        <Link className="nav-link " to="/circular-news">Circular News</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>

                        <li><a href="#">Board Members</a></li>
                        <li><a href="#">Faculties</a></li>
                        <li><a href="#">Announced Results</a></li>
                        <li><a href="#">Admission Criteria</a></li>
                        <li className="nav-item">
                        <Link className="nav-link " to="/date-sheet">Date Sheets</Link>
                        </li>  
                        <li className="nav-item">
                         <Link className="nav-link " to="/activities">Activites</Link>
                  </li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>
                       <li><a href="#">Best Colleges</a></li>
                        <li><a href="#">Committess</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Examination</a></li>
                        <li><a href="#">All Forms</a></li>
                        <li><a href="#">Sports</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul>
                        <li><a href="#">Authorized Banks</a></li>
                        <li><a href="#">Statistics</a></li>
                        <li><a href="#">Tenders</a></li>
                        <li><a href="#">Map of Board</a></li>
                        <li><a href="#">Bus Routes</a></li>
                        <li><a href="#">FAQS</a></li>
                        <li><a href="#">Contact us</a></li>

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
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
        </div>
        <div className="footer-copyright">
            <p>© 2018 Copyright </p>
            <p>Design and Develop by <a href="www.fiverr.com/ghayyasmubashir" target="_blank">Ghayyas Mubashir</a></p>
        </div>
    </footer>
           </>
        )
    }
}