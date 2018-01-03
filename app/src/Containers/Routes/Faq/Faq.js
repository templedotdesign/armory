import React, { Component } from 'react';

import Footer from '../../../Components/Footer/Footer';

import classes from './Faq.css';

class Faq extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    return (
      <div className={classes.Faq}>
        <h1>FAQ</h1>
        <div className={classes.Column}>
          <p>
            We seat 350 ‑ 385 on the ballroom floor with additional seating on the balcony if needed.  The 
            number of guests you can seat on the first floor depends on the space allowed for dance floor, 
            caterer, head table, DJ/band. etc.
          </p>
          <p>
            Many of our brides are having both their ceremony and reception at the Armory, there is no 
            additional charge.  We do not have a list of preferred vendors so you are free to choose your 
            caterer, florist, DJ or band.  You are also free to bring in your own food and decide whether you 
            serve alcohol or not.  There is no curfew.  We do require a $100.00 cleaning deposit which is 
            returned if all is well after your event.
          </p>
          <p>
            We provide 51 round tables, 6‑foot diameter, 24 8‑foot buffet tables with standard 2" 
            tabletop thickness easily accepts skirting are also provided as well as approximately 440 
            upholstered chairs.  We provide paper products for the restrooms, trash bags and trash pick-up.  
            Our kitchen is set up for serving not preparing food.  We have 3 - refrigerators with no freezer 
            section (16.7 cubic feet) and a small chest freezer. The rental contract is for a 24‑hour period, 
            from 9am until 9am following day.  Friday is available for rent as an add‑on to a Saturday contract 
            for an additional fee.
          </p>
          <p>
            No date may be held without a down payment.
          </p>
          <p>
            Table linens are not provided by the Armory; neither set-up nor tear-down is provided.
          </p>
          <p>
            The facility has heat/AC, handicapped access and a family/handicapped restroom which includes a 
            changing station.
          </p>
          <p>
            We do not have a preferred list of vendors.
          </p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Faq;