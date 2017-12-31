import React from 'react';

import Footer from '../../Footer/Footer';

import classes from './Home.css';

const home = () => {
  return (
    <div>
      <div className={classes.Home}>
        <div className={classes.Column}>
          <h1>The Hardin County Armory</h1>
          <p>The Perfect Venue For A Historic Event</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default home;