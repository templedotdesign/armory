import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../../components/header/header';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import HistoryComponent from '../../components/history/history';
import Receptions from '../../components/receptions/receptions';
import Calendar from '../../components/calendar/calendar';
import FAQ from '../../components/faq/faq'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/history" component={HistoryComponent}/>
            <Route path="/receptions" component={Receptions}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;