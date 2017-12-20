import React, { Component } from 'react';
import Header from '../header/header';
import Sidedrawer from '../sidedrawer/sidedrawer';
// import Footer from '../footer/footer';

import classes from './layout.css';

class Layout extends Component {
  state = {
    showSidedrawer: false
  }

  showSidedrawerHandler = () => {
    this.setState({showSidedrawer: true})
  }

  closeSideDrawerHandler = () => {
    this.setState({showSidedrawer: false})
  }

  render() {
    return (
      <div className={classes.Layout}>
        <p className={classes.menu}>
          <i className="fa fa-bars" aria-hidden="true" onClick={this.showSidedrawerHandler}></i>
        </p>
        <Header/>
        <Sidedrawer open={this.state.showSidedrawer} closer={this.closeSideDrawerHandler}/>
        {this.props.children}
        {/* <Footer/> */}
      </div>
    );
  }
};

export default Layout;