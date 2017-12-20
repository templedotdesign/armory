import React from 'react';
import castle from '../../assets/castle.jpeg';
import ballroom from '../../assets/ballroom.jpeg';
import classes from './home.css';

const home = () => {
  return (
    <div className={classes.Home}>
      <h1>The Hardin County Armory Restoration Foundation</h1>
      <img src={castle} alt="castle"/>
      <p>
        Welcome to the Hardin County Armory, Ohio's oldest and most unique National Guard Armory.  
        We are a non-profit foundation made up of volunteers who saw the benefit in saving this unique structure.  
        We now operate the Armory as a reception site.  It is a beautiful location for your next event, 
        and we know you will agree.  
      </p>
      <img src={ballroom} alt="ballroom"/>
      <p>
        Our Hardin County Armory Ballroom, dressed its best for the Annual Mistletoe Ball.
      </p>
      <br/>
      <p>
      For more photos, find us on Facebook.        
      </p>
    </div>
  );
};

export default home;