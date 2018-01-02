import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Footer/Footer';

import classes from './Home.css';


const home = () => {
  return (
    <div>
      <div className={classes.Home}>
        <div className={classes.Column} style={{width: '50vw'}}>
          <h1>The Hardin County Armory</h1>
          <p>The Perfect Venue For A Historic Event</p>
        </div>
      </div>
      <div className={classes.Row}>
        <div className={classes.Column}>
          <NavLink to='/history'><div className={classes.Linemen}></div></NavLink>
          <NavLink to='/history'>History</NavLink>
          <p>Explore Our Rich And Storied History</p>
        </div>
        <div className={classes.Column}>
          <NavLink to='/receptions'><div className={classes.Castle}></div></NavLink>
          <NavLink to='/receptions'>Receptions</NavLink>
          <p>Ready To Book With Us?</p>
        </div>
        <div className={classes.Column}>
          <NavLink to='/gallery'><div className={classes.Balcony}></div></NavLink>
          <NavLink to='/gallery'>Gallery</NavLink>
          <p>Check Out Some Of Our Awesome Events</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default home;