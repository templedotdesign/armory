import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';
import Home from '../../Components/Routes/Home/Home';
import About from '../../Components/Routes/About/About';
import Membership from '../../Components/Routes/Membership/Membership';
import HistoryComponent from '../../Components/Routes/History/History';
import Receptions from '../../Components/Routes/Receptions/Receptions';
import FAQ from '../../Components/Routes/Faq/Faq'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/history" component={HistoryComponent}/>
            <Route path="/receptions" component={Receptions}/>
            <Route path="/membership" component={Membership}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;