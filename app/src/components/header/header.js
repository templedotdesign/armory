import React from 'react';
import { Link } from 'react-router-dom';

import classes from './header.css';

const header = () => {
  return (
    <header className={classes.Header}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/history">History</Link></li>          
          <li><Link to="/receptions">Receptions</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/faq">FAQ</Link></li>          
        </ul>
      </nav>
    </header>
  );
};

export default header;