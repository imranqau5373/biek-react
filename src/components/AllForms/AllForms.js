import React,{Component} from 'react';
import {Link} from 'react-router-dom';


import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';

export class AllForms extends Component{
    render(){
        return(
           <>
           <Header></Header>
           <br/>
           <br/>
           <br/>
           <div className="container">
             <h2>DOWNLOAD ALL THE FORMS OF THE BOARD</h2>
             <p><i><Link to="" className="text-danger">Fee Voucher( click here to download) ( N E W)</Link></i></p>
             <p> <Link to="">Notification regarding fees structure of various kind of fee (N E W )</Link></p>
             <ol>
                 <li><Link to="">Certificate form (click here to download) ( N E W )</Link></li>
                 <li><Link to="">Scrutiny form (click here to download ) ( N E W )</Link></li>
                 <li><Link to="">Verification Certificate form ( click here to download ) ( N E W)</Link></li>
                 <li><Link to="">Duplicate Mark Sheet form (click here to download) ( N E W )</Link></li>
                 <li><Link to="">Migration form (click here to download ) ( N E W )</Link></li>
                 <li><Link to="">Verification Migration form (click here to download) ( N E W)</Link></li>
                 <li><Link to="">Provisional Certificate form (N E W )</Link></li>
                 <li><Link to="">Verification Provisional Certificate form ( N E W )</Link></li>
                 <li><Link to="">Verification Mark sheet form ( N E W)</Link></li>
                 <li><Link to="">Duplicate Enrolment Card Form ( N E W )</Link></li>
                 <li><Link to="">Duplicate Registration Card Form (N E W )</Link></li>
                 <li><Link to="">Download Proforma for Special Chance ( N E W )</Link></li>
                 <li><Link to="">Enrolment form for Pre-Engineering ( N E W )</Link></li>
                 <li><Link to="">Enrolment form for Science General ( N E W )</Link></li>
                 <li><Link to="">Enrolmnet form for Pre-Medical ( N E W )</Link></li>
                 <li><Link to="">Enrolment form for Commerce ( N E W )</Link></li>
                 <li><Link to="">Enrolment form Humanities ( N E W )</Link></li>
                 <li><Link to="">Enrolment form for Home Economics ( N E W )</Link></li>

             </ol>
             <br/>
             <p className="text-danger"><i>(Student can submit Fee Voucher in any UBL branch)</i></p>
             <br/>
             <br/>
             <p><b>NOTE:</b></p>
             <p><i>
                   Intermediate Board & authorized Banks at Karachi will accept all the above forms with clear Printed Black & White Copy with all formalities.
                 </i>
                 </p>
                 <p>
                     <i>
                     Before submission of the form in the banks, it should be duly checked and endorsed by the competent authorities and department of the Boards of Intermediate Education Karachi.
                     </i>
                 </p>
           </div>
           <br/>
           <br/>
           <br/>
           <Footer></Footer>
           </>
        )
    }
}