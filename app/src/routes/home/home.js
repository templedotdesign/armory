import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import Block from '../../components/block/block';

import classes from './home.css';

import coupleImg from '../../assets/couple2.png';
import armoryImg from '../../assets/armory_corner.png';

class Home extends Component {
  state = {
    historyHidden: true,
    eventsHidden: true,
    galleryHidden: true,
    membershipHidden: true
  }
  
  navigate = (path) => {
    this.props.history.push(path)
  }

  show = (id) => {
    this.setState({...this.state, [id]: false})
  }

  hide = (id) => {
    this.setState({...this.state, [id]: true})
  }

  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    let classList = [classes.fixedBackground, classes.desktopOnly]
    return (
      <div>
        <div style={{backgroundImage: `url(${coupleImg})`}} className={classes.fixedBackground}></div>
        <div className={classes.heading}>
          <h1>The Hardin County Armory</h1>
          <p>The Perfect Venue For A Historic Event</p>
        </div>
        <div className={classes.blocks}>
          <Block 
            title='ABOUT' 
            clicked={() => {this.navigate('/about')}} 
            enter={() => {this.show('historyHidden')}}
            leave={() => {this.hide('historyHidden')}} 
            hidden={this.state.historyHidden}
          />
          <Block 
            title='EVENTS' 
            clicked={() => {this.navigate('/receptions')}} 
            enter={() => {this.show('eventsHidden')}} 
            leave={() => {this.hide('eventsHidden')}} 
            hidden={this.state.eventsHidden}
          />
        
          <Block 
            title='GALLERY' 
            clicked={() => {this.navigate('/gallery')}} 
            enter={() => {this.show('galleryHidden')}}
            leave={() => {this.hide('galleryHidden')}} 
            hidden={this.state.galleryHidden}
          />
          <Block 
            title='MEMBERSHIP' 
            clicked={() => {this.navigate('/membership')}} 
            enter={() => {this.show('membershipHidden')}}
            leave={() => {this.hide('membershipHidden')}} 
            hidden={this.state.membershipHidden}
          />
        </div>
        <div style={{backgroundImage: `url(${armoryImg})`}} className={classList.join(' ')}></div>
        <div>
          <div className={classes.action}>
            <h3>Get In Touch!</h3>
            <NavLink to='/contact'><p>Contact Us</p></NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);