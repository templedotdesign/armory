import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';
import Home from '../../Components/Routes/Home/Home';
import About from '../../Components/Routes/About/About';
import HistoryComponent from '../../Components/Routes/History/History';
import Receptions from '../../Components/Routes/Receptions/Receptions';
import Membership from '../../Components/Routes/Membership/Membership';
import Contact from '../../Components/Routes/Contact/Contact';
import FAQ from '../../Components/Routes/Faq/Faq'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/history' component={HistoryComponent}/>
            <Route path='/receptions' component={Receptions}/>
            <Route path='/membership' component={Membership}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/faq' component={FAQ}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;