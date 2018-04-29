import React, { Component } from 'react';

import classes from './contact.css'

import { details } from '../../Constants/contact/contact';

class Contact extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    return (
      <div>
        <div className={classes.heading}>
          <h1>Get In Touch</h1>
        </div>
        <div>
          <a href='tel:5676745618' className={classes.phoneLink}>
            <p style={{fontSize: '2em'}}><i className="fas fa-phone"></i></p>
            <p className={classes.detail}>{details.number}</p>
          </a>
        </div>
        <div>
          <a href='mailto:contact@hardincountyarmory.com'>
            <p style={{fontSize: '2em'}}><i className="far fa-envelope-open"></i></p>
            <p className={classes.detail}>contact@hardincountyarmory.com</p>
          </a>
        </div>
        <div>
          <p style={{fontSize: '2em'}}><i className="far fa-envelope"></i></p>
          <div>
            <p className={classes.detail}>{details.name}</p>
            <p className={classes.detail}>{details.mailingName}</p>
            <p className={classes.detail}>{details.mailingAddress}</p>
            <p className={classes.detail}>{details.city}</p>
          </div>
        </div>
        <div className={classes.row}>
          <a href="https://www.facebook.com/Hardin-County-Armory-Restoration-Foundation-69692096353/" target="_blank" rel="noopener noreferrer">
          <p style={{fontSize: '2em'}}><i className="fab fa-facebook-square"></i></p>
          </a>
        </div> 
      </div>
    );
  }
}

export default Contact;