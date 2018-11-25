import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import {ResultPage} from './components/ResultPage/ResultPage';
import {BoardHistory} from './components/BoardHistory/BoardHistory';
import {Organogram} from './components/Organogram/Organogram';
import {Faqs} from "./components/faqs/Faqs";
import {CircularNews} from './components/CircularNews/CircularNews';
import {DateSheet} from './components/date-sheet/date-sheet';
import {Activites} from './components/activities/activites';
import {AllForms} from './components/AllForms/AllForms';
import {Chairman} from './components/chairman/chairman';
import {CharimanHistory} from './components/history-of-chairman/history-of-chairman';
import {Secretary} from'./components/Secretary/Secretary';
import {SecretaryHistory} from './components/history-of-secretary/history-of-secretary';
import {ExamController} from "./components/exam-controller/exam-controller";
import {ControllerHistory} from './components/exam-controller-history/exam-controller-history';
import {BoardMembers} from './components/board-members/board-members';
import {Faculties} from "./components/Faculties/Faculties";
import {AffliatedColleges} from './components/affiliated-colleges/affiliated-colleges';
import {GovernmentAffiliatedColleges} from './components/government-affiliated-colleges/government-affiliated-colleges';
import {PrivateAffiliateColleges} from './components/private-affiliated-colleges/private-affiliated-collges';
import {AdmissionCriteria} from './components/admission-cre/addcrit';
import {BestColleges} from './components/best-colleges/best-colleges';
import {Committees} from './components/committees/committees';
import {Examination} from './components/examination/examination';
import {Sports} from './components/sports/sports';
import {AuthorizeBank} from './components/authorizeBank/authorizeBank';
import {Statics} from './components/statics/statics';
import {BusRoutes} from './components/busRoutes/busRoutes';

class App extends Component {
  render() {
    return (
      <Router>
       <Switch>
           <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/result" component={ResultPage} />
            <Route path="/boardHistory" component={BoardHistory} />
            <Route path="/organogram" component={Organogram} />
            <Route path="/faqs" component={Faqs} />
            <Route path="/circular-news" component={CircularNews} />
            <Route path="/date-sheet" component={DateSheet} />
            <Route path="/activities" component={Activites} />
            <Route path="/allforms" component={AllForms} />
            <Route path="/chairman" component={Chairman} />
            <Route path="/chairman-history" component={CharimanHistory} />
            <Route path="/secretary" component={Secretary} />
            <Route path="/secretary-history" component={SecretaryHistory} />
            <Route path="/exam-controller" component={ExamController} />
            <Route path="/exam-controller-history" component={ControllerHistory}/>
            <Route path="/board-members" component={BoardMembers} />
            <Route path="/faculties" component={Faculties} />
            <Route path="/affiliated-colleges" component={AffliatedColleges} />
            <Route path="/government-aff-c" component={GovernmentAffiliatedColleges} />
            <Route path="/private-aff-c" component={PrivateAffiliateColleges} />
            <Route path="/add-cri" component={AdmissionCriteria}/>
            <Route path="/best-clg" component={BestColleges} />
            <Route path="/committees" component={Committees} />
            <Route path="/examination" component={Examination} />
            <Route path="/sports" component={Sports} />
            <Route path="/authorizeBank" component={AuthorizeBank} />
            <Route path="/statics" component={Statics} />
            <Route path="/bus-routes" component={BusRoutes} />

       </Switch>
       </Router>
    );
  }
}

export default App;
