import React from 'react';
import classes from './about.css';
import castle from '../../assets/castle.jpeg';

const about = () => {
  return (
    <div className={classes.About}>
      <img src={castle} alt="castle"/>
      <h1>The Hardin County Armory Restoration Foundation</h1>
      <hr/>
      <p>
        Welcome to the Hardin County Armory, Ohio's oldest and most unique National Guard Armory.  
        We are a non-profit foundation made up of volunteers who saw the benefit in saving this unique structure.  
        We now operate the Armory as a reception site.  It is a beautiful location for your next event, 
        and we know you will agree.
      </p>
    </div>
  );
};

export default about;