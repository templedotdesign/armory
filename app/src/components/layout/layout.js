import React, { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

class Layout extends Component {
  state = {
    hideMenu: true,
    offset: window.pageYOffset
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateOffset)
  }

  updateOffset = () => {
    this.setState({...this.state, offset: window.pageYOffset})
  }

  toggleMenu = () => {
    this.setState({...this.state, hideMenu: !this.state.hideMenu})
  }

  changeView = (view) => {
    this.setState({...this.state, currentView: view})
  }

  render () {

    return (
      <div>
        <Header hidden={this.state.hideMenu} clicked={this.toggleMenu} offset={this.state.offset}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;