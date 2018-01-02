import React, { Component } from 'react';

import Footer from '../../../Components/Footer/Footer';

import classes from './Contact.css';

class Contact extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    return (
      <div>
        <div className={classes.Contact}>
          <h1 style={{textAlign: 'center'}}>Contact Us</h1>
          <div className={classes.Column}>
            <p style={{fontWeight: 'bold'}}>
              For additional information concerning the Armory or a historical tour call or write
            </p>
            <p>
              Ed Rogers - 419-673-8955 
            </p>
            <p>
              Hardin County Armory Restoration Foundation
            </p>
            <p>
              P.O. Box 594
            </p>
            <p>
              Kenton, OH  43326
            </p>
            <p style={{fontWeight: 'bold'}}>
              For information concerning renting the Armory call, email or write
            </p>
            <p>
              Doris Blum - 567-674-5618
            </p>
            <p>
              P.O. Box 594
            </p>
            <p>
              Kenton, OH 43326
            </p>
            <a href='mailto:jrogers@hardincountyarmory.com'>
              jrogers@hardincountyarmory.com
            </a>
            <p style={{fontWeight: 'bold'}}>
              The Armory is located at
            </p>
            <p>
              128 N. Main St.
            </p>
            <p>
              Kenton OH 43326
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Contact;