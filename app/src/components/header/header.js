import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './header.css';

const header = () => {
  return (
    <div className={classes.Header}>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeClassName={classes.active}>Home</NavLink></li>
            <li><NavLink to="/about" activeClassName={classes.active}>About</NavLink></li>
            <li><NavLink to="/history" activeClassName={classes.active}>History</NavLink></li>          
            <li><NavLink to="/receptions" activeClassName={classes.active}>Receptions</NavLink></li>
            <li><NavLink to="/calendar" activeClassName={classes.active}>Calendar</NavLink></li>
            <li><NavLink to="/faq" activeClassName={classes.active}>FAQ</NavLink></li>          
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default header;