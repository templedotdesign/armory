import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from '../../routes/about/about';
import Contact from '../../routes/contact/contact';
import Faq from '../../routes/faq/faq';
import Gallery from '../../routes/gallery/gallery';
import Home from '../../routes/home/home';
import Membership from '../../routes/membership/membership';
import Layout from '../../components/layout/layout';
import Receptions from '../../routes/receptions/receptions';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/faq' component={Faq}/>
            <Route exact path='/gallery' component={Gallery}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/membership' component={Membership}/>
            <Route exact path='/receptions' component={Receptions}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;