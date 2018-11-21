import React,{Component} from 'react';
import {Redirect} from 'react-router';

import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
export class BoardHistory extends Component{
   constructor(){
       super();

       
   }

   render(){
       return(
        <>
        <Header></Header>
        <br />
        <br />
        <div className="container">
            <h2 className="text-center">History of Board</h2>
            <h4><i>Brief History</i></h4>
            <p>
            Sindh was an appendage of the Bombay University in educational matters. 
            The Sindh University Act of 1947 was passed in March 1947 by Sindh Assembly and 
            the University came into being at Karachi, which took over the control of 
            secondary intermediate and higher education in the province of Sindh 
            from the Bombay University. In 1950 separate University was planned for Karachi, 
            and the University of Sindh was shifted to Hyderabad. 
            Through an act in the year,1950 the University of Karachi was created for the 
            controlling College Education. 
            Through the other Act known as "The Karachi Secondary Education Act No. 
            XVI of 1950" Board of Secondary Education was established at Karachi 
            for controlling education from class VI to X.
            </p>
            <p>
               In 1960 as per recommendations of Sharif Commission report University Education 
               was bifurcated into higher secondary Education (Intermediate Education) and 
               Degree Education and In January 1962 through an ordinance, 
               known as "west Pakistan Board of Intermediate and Secondary Education, 
               Karachi ordinance No. III of 1962" Higher Secondary Education previously 
               know as Intermediate Education, was transferred from the University to 
               Board to implement the recommendation of the commission. 
               Prof. Qaiser Hussan Khan Bukhtiari President of the Board of the Secondary Education 
               was appointed as first Chairman of the Board of Intermediate Education Karachi. 
               He took over the charge of the Higher Secondary Education from Dr. Ishtiaq Hussain Qureshi, 
               then Vice Chancellor of the University of Karachi on 2nd November 1961.
            </p>
            <p>
               Board of Intermediate Education Karachi was established as separate entity in 1974 
               through the "Sindh Boards of Intermediate and Secondary Education amendment act 
                No. 20 of 1973.
            </p>
            <p>
            This Board has the power to organize, regulate, develop and control Intermediate Education. 
            The controlling Authority of the Board is the Governor of Sindh or his nominee. 
            The Chairman is the principal executive and academic officer of the Board, 
            while the Secretary is the in charge of the academic and administrative Sector and the Controller of Examinations 
            is the In charge of the Examination Section. 
            The above officers and the Audit officer are appointed by the Controlling Authority of the Board, 
            while other officers are also appointed by the Board on the recommendation of the appointment
             Committee. In the year, 1974, there were only 17 officers and 113 officials, 
             now we have 51 officers and 246 officials. 
             With a view to performing various functions systematically there are 
             Statutory and non-Statutory committees have been constituted as under:
            </p>
            <h5>
                 STATUTORY COMMITTEE:
            </h5>
            <ol>
                <li>Academic Committee.</li>
                <li>Committee of Courses.</li>
                <li>Appointment Committee for paper setters and Head Examiners.</li>
                <li>Finance Committee.</li>
                <li>Appointment Committee.</li>
            </ol>
            <h5>
                NON-STATUTORY COMMITTEE: 
            </h5>
            <p>
              These adhoc Committees are Constituted for a temporary period by the 
              Board or its Chairman to sort out matters of administrative nature or 
              problems of examination Sector.
           </p>
           <p>
           The Board of Intermediate Education Karachi has been functioning satisfactory 
           with the coordination of the different Sections of the Board as under:-
          </p>
          <ol>
              <li>Establishment Section.</li>
              <li>Examination Section.</li>
              <li>Research Section.</li>
              <li>Audit and Account Section.</li>
              <li>Administration Section.</li>
              <li>Information Technology Section.</li>
              <li>Sport Section.</li>
              <li>Certification Section.</li>
          </ol>
          
          <h5>CONDUCT OF EXAMINATIONS </h5>
          <p>
             The main function of the Board is to conduct H.S.C (Intermediate) Examination 
             in Science, Commerce, Humanities and Home Economics groups, 
             while D.P.E Examination is held for the subject of Physical Education. 
             This Board also conducts the examination of P.T.C and C.T classes, 
             approximately 150,000 students appear in all above examinations.
          </p>
        </div>
        <Footer></Footer>
        </>
       )
   }
}