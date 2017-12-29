import React, { Component } from 'react';
// import Footer from '../footer/footer';
import Toolbar from './Toolbar/Toolbar';
import Sidedrawer from './Sidedrawer/Sidedrawer';

import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSidedrawer: false
  }

  showSidedrawerHandler = () => {
    this.setState({showSidedrawer: true})
  }

  closeSidedrawerHandler = () => {
    this.setState({showSidedrawer: false})
  }

  render() {
    return (
      <div>
        <div className={classes.Menu}>
          <i className="fa fa-bars" aria-hidden="true" onClick={this.showSidedrawerHandler}></i>
        </div>
        <Toolbar/>
        <Sidedrawer open={this.state.showSidedrawer} closer={this.closeSidedrawerHandler}/>
        {this.props.children}
        {/* <Footer/> */}
      </div>
    );
  }
};

export default Layout;