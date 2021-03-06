import React, { Component } from 'react';
import {Link} from 'react-router-dom';



export class Header extends Component {
    render(){
        return(
        <>
        <header>
              <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <Link className="navbar-brand" to="/">BIEK</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/result">Current Resuts</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/about">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/faqs">FAQ</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/contact">Contact us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/circular-news">Circular News</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/activities">Activites</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/date-sheet">Date Sheets</Link>
                  </li>
                </ul>
              </div>
            </nav>
        </header>
            </>
        );
    }
} 