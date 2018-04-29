import React from 'react';
import classes from './footer.css';
import { API_KEY } from '../../Constants/GoogleMaps/GoogleMaps';

const footer = () => {
  return(
    <div className={classes.Footer}>
      <div className={classes.Row}>
        <div className={classes.ContactBlock}>
          {/* <p>Email</p> */}
          <a href='mailto:contact@hardincountyarmory.com' className={classes.email}>Email</a>
          <hr/>
          <a href="tel:5676745618">
            <p>Phone Number</p>
            <p>567-674-5618</p>
          </a>
          <hr/>
          <p>Address</p>
          <p>128 N. Main St.</p>
          <p>P.O. Box 594</p>
          <p>Kenton OH 43326</p>
        </div>
        <div className={classes.Map}>
          <div style={{fontSize: '1.3rem', margin: '20px'}}>
            <p style={{textAlign: 'center'}}>Follow Us</p>
            <div className={classes.Row} style={{width: '15%', margin: '0 auto', flexWrap: 'nowrap'}}>
              <a style={{margin: '0 10px'}} href='https://www.facebook.com/Hardin-County-Armory-Restoration-Foundation-69692096353/' target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-square"></i></a>
              {/* <i style={{margin: '0 10px'}} className="fab fa-twitter-square"></i> */}
            </div>
          </div>
          <img className={classes.desktop} src={`https://maps.googleapis.com/maps/api/staticmap?center=Hardin+County+Armory,Kenton,OH&zoom=17&size=600x300&markers=color:blue%7CHardin+County+Armory,Kenton,OH&key=${API_KEY}`} alt='map'/>
          <img className={classes.mobile} src={`https://maps.googleapis.com/maps/api/staticmap?center=Hardin+County+Armory,Kenton,OH&zoom=17&size=300x300&markers=color:blue%7CHardin+County+Armory,Kenton,OH&key=${API_KEY}`} alt='map'/>
        </div>
      </div>
      <p>&copy; Hardin County Armory Restoration Foundation, 2018</p> 
      <p>Created by Temple Design Solutions</p>
    </div>
  );
};

export default footer;