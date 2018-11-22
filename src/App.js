import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import {Header} from './components/header/Header'

// import { App } from "./App/App";
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


       </Switch>
       </Router>
    );
  }
}

export default App;
