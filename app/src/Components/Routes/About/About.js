import React from 'react';

import Footer from '../../Footer/Footer';

import classes from './About.css';

const about = () => {
  return (
    <div>
      <div className={classes.About}>
        <h1>About Us</h1>
        <p>
          Welcome to the Hardin County Armory, Ohio's oldest and most unique National Guard Armory.  We are a 
          non-profit foundation made up of volunteers who saw the benefit in saving this unique structure.  We 
          now operate the Armory as a reception site.  It is a beautiful location for your next event, and we know 
          you will agree.  
        </p>
        <div className={classes.Row}>
          <div className={classes.Castle}></div>
          <div className={classes.Ballroom}></div>
        </div>
        <div className={classes.Board}>
          <h3>Board Of Directors</h3>
          <p>President - Ed Rogers</p>
          <p>Vice-President - Mark Doll</p>
          <p>Secretary - Cindy Rogers</p>
          <p>Treasurer -  Doris Blum</p>
          <p>Trustees - Rick Hudgel,  Jennifer Rogers</p>
          <p>Honorary Chairman - Red Fillinger</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default about;