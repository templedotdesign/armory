import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../../components/layout/layout';
import Home from '../../components/home/home';
import About from '../../components/about/about';
import Board from '../../components/board/board';
import Membership from '../../components/membership/membership';
import HistoryComponent from '../../components/history/history';
import Receptions from '../../components/receptions/receptions';
import Calendar from '../../components/calendar/calendar';
import FAQ from '../../components/faq/faq'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <div style={{marginTop: '70px'}}>
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/history" component={HistoryComponent}/>
              <Route path="/receptions" component={Receptions}/>
              <Route path="/calendar" component={Calendar}/>
              <Route path="/board" component={Board}/>
              <Route path="/membership" component={Membership}/>
              <Route path="/faq" component={FAQ}/>
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;