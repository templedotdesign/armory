import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';
import Home from '../Routes/Home/Home';
import About from '../Routes/About/About';
import HistoryComponent from '../Routes/History/History';
import Gallery from '../Routes/Gallery/Gallery';
import Receptions from '../Routes/Receptions/Receptions';
import Membership from '../Routes/Membership/Membership';
import Contact from '../Routes/Contact/Contact';
import FAQ from '../Routes/Faq/Faq';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/history' component={HistoryComponent}/>
            <Route path='/gallery' component={Gallery}/>
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