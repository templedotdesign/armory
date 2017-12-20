import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './sidedrawer.css';

const sidedrawer = (props) => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if(props.open) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  return(
    <div className={attachedClasses.join(' ')}>
      <i className="fa fa-times" aria-hidden="true" onClick={props.closer}></i>
      <nav>
          <ul>
            <li onClick={props.closer}><NavLink to="/" exact activeClassName={classes.active}>Home</NavLink></li>
            <li onClick={props.closer}><NavLink to="/about" activeClassName={classes.active}>About</NavLink></li>
            <li onClick={props.closer}><NavLink to="/history" activeClassName={classes.active}>History</NavLink></li>          
            <li onClick={props.closer}><NavLink to="/receptions" activeClassName={classes.active}>Receptions</NavLink></li>
            <li onClick={props.closer}><NavLink to="/calendar" activeClassName={classes.active}>Calendar</NavLink></li>
            <li onClick={props.closer}><NavLink to="/board" activeClassName={classes.active}>Board Of Directors</NavLink></li>
            <li onClick={props.closer}><NavLink to="/membership" activeClassName={classes.active}>Become A Member</NavLink></li>
            <li onClick={props.closer}><NavLink to="/faq" activeClassName={classes.active}>FAQ</NavLink></li>          
          </ul>
        </nav>
    </div>
  );
};

export default sidedrawer;