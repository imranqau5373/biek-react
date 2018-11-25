import React,{Component} from "react";

import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';
export class BoardMembers extends Component{
    render(){
        return(
            <>
            <Header></Header>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="text-center">
                    <h3>BOARD MEMBERS</h3>
                </div>
                <ul>
                    <li>
                        <p><b>SProf. Inam Ahmed  </b></p>
                        <p>Designation: Chairman</p>
                        <p>Organization: Board of Intermediate Education Karachi</p>
                    </li>
                    <li>
                    <p><b>Dr. Saeed Uddin </b></p>
                        <p>Designation: Chairman</p>
                        <p>Organization: Board of Secondary Education, Karachi</p>
                    </li>
                    <li>
                    <p><b>Dr. Masroor Ahmed Shaikh </b></p>
                        <p>Designation: Chairman</p>
                        <p>Organization: Sindh Board of Technical Education, Karachi</p>
                    </li>
                    <li>
                    <p><b>Dr. Muhammad Memon</b></p>
                        <p>Designation: Chairman</p>
                        <p>Organization: Board of Intermediate & Secondary Education, Hyderabad</p>
                    </li>
                    <li>
                    <p><b>Syed Ghulam Mujtaba Shah </b></p>
                        <p>Designation: Chairman</p>
                        <p>Organization: Board of Intermediate & Secondary Education, Sukkur</p>
                    </li>
                    <li>
                    <p><b>Prof. Barkat Ali Hyderi A.Dasti</b></p>
                        <p>Designation: Chairman</p>
                        <p>Organization: Board of Intermediate & Secondary Education, Mirpurkhas</p>
                    </li>
                    <li>
                    <p><b>Prof. Dr. Ahmed Ali Brohi</b></p>
                        <p>Designation: Chairman</p>
                        <p>Organization: Board of Intermediate & Secondary Education, Larkana</p>
                    </li>
                    <li>
                    <p><b>Prof. Dr. Arshad Saleem</b></p>
                        <p>Designation: Chairman</p>
                        <p>Organization: Board of Intermediate & Secondary Education, Benazirabad & Nawabshah</p>
                    </li>
                    <li>
                    <p><b>Prof. Dr. Syed Ehtesham ul Haq</b></p>
                        <p>Designation: Professor</p>
                        <p>Organization: Department of Botany, University of Karachi</p>
                    </li>
                    <li>
                    <p><b>Prof. Muhammad Mashooque Baloch</b></p>
                        <p>Designation: Director Colleges Karachi Region, Karachi</p>
                        <p>Organization: Directorate of Colleges</p>
                    </li>
                    <li>
                    <p><b>Prof. Naheed Nasir </b></p>
                        <p>Designation: Principal(BPS-19)</p>
                        <p>Organization: Vocational Training Institute of Women Buffer Zone, Karachi</p>
                    </li>
                    
                    <li>
                    <p><b>Prof. Dr. Mohammad Arshad </b></p>
                        <p>Designation: Ex-Principal (BPS-20)</p>
                        <p>Organization: D.J Sindh Govt. Science College, Karachi</p>
                    </li>
                    <li>
                    <p><b>Prof. Amjad Ali Syed</b></p>
                        <p>Designation: Advisor to VC</p>
                        <p>Organization: Jinnah Sindh Medical University , Karachi</p>
                    </li>
                    <li>
                    <p><b>Prof. Pervaiz Ali Shaikh</b></p>
                        <p>Designation: (Rtd.) Director</p>
                        <p>Organization: Director Colleges</p>
                    </li>
                    <li>
                    <p><b>Prof. Dr. Moazzam Hyder</b></p>
                        <p>Designation: Principal</p>
                        <p>Organization: Adamjee Govt. Science College, Karachi</p>
                    </li>
                </ul>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer></Footer>
            </>
        )
    }
}