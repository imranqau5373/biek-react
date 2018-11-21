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
       </Switch>
       </Router>
    );
  }
}

export default App;
