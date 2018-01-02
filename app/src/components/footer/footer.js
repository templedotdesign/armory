import React from 'react';
import classes from './Footer.css';
import { API_KEY } from '../../Constants/GoogleMaps/GoogleMaps';

const footer = () => {
  return(
    <div className={classes.Footer}>
      <div className={classes.Row}>
        <div className={classes.ContactBlock}>
          <p>Email</p>
          <a href='mailto:jrogers@hardincountyarmory.com'>jrogers@hardincountyarmory.com</a>
          <hr/>
          <p>Phone Number</p>
          <p>567-674-5618</p>
          <hr/>
          <p>Address</p>
          <p>128 N. Main St.</p>
          <p>Kenton OH 43326</p>
        </div>
        <div className={classes.Map}>
          <div style={{fontSize: '1.3rem', margin: '20px'}}>
            <p style={{textAlign: 'center'}}>Follow Us</p>
            <div className={classes.Row} style={{justifyContent: 'space-around', alignItems: 'center', width: '15%', margin: '0 auto'}}>
              <a href='https://www.facebook.com/Hardin-County-Armory-Restoration-Foundation-69692096353/' target='_blank' rel='noopener noreferrer'><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
          </div>
          <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Hardin+County+Armory,Kenton,OH&zoom=17&size=600x300&markers=color:blue%7CHardin+County+Armory,Kenton,OH&key=${API_KEY}`} alt='map'/>
        </div>
      </div>
      <p>Copyright Hardin County Armory Restoration Foundation Created by Temple Design Solutions, 2017</p>
    </div>
  );
};

export default footer;