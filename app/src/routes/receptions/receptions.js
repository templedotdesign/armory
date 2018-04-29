import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './receptions.css';

import { statements, callout } from '../../Constants/receptions/receptions';

import bridalRoomImg from '../../assets/bridalRoom.png';
import couchImg from '../../assets/couch2.png';
//import tableImg from '../../assets/dining_room.png';
import mirrorImg from '../../assets/mirror.png'

class Receptions extends Component {
  navigate = (path) => {
    this.props.history.push(path);
  }

  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    return (
      <div className={classes.receptions}>
        <div className={classes.heading}>
          <h1>An Event To Remember</h1>
        </div>
        {statements.map((p, index) => {
          return (
            <p key={index}>{p}</p>
          );
        })}
        <h3 className={classes.callout}>The Armory Now Offers Bridal Party Rooms For An Additional Charge</h3>
        <div className={classes.row}>
          <div className={classes.image} style={{backgroundImage: `url(${bridalRoomImg})`}}></div>
          <div className={classes.image} style={{backgroundImage: `url(${mirrorImg})`}}></div>
          <div className={classes.image} style={{backgroundImage: `url(${couchImg})`}}></div>
        </div>
        <h1 className={classes.callout}>{callout}</h1>
        <div className={classes.action}>
          <p>Ready To Save The Date?</p>
          <p>Check The Calendar For Available Dates And Then Contact Us For A Free No Obilgation Consultation!</p>
          <div className={classes.row}> 
            <a 
              className={classes.button} 
              href='http://www.google.com/calendar/embed?src=33adpgdnk7gblpoi43gfm36g5s@group.calendar.google.com&ctz=America/New_York'
              target='_blank'
              rel='noopener noreferrer'
            >
              Calendar
            </a>
            <a className={classes.button} onClick={() => {this.navigate('/contact')}}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Receptions);