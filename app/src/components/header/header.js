import React from 'react';
import classes from './header.css';
import { NavLink, withRouter } from 'react-router-dom';

import Links from '../../Constants/Links/Links';

const header = (props) => {
  let menuClasses = [classes.menu];
  if(props.hidden) {
    menuClasses.push(classes.hidden);
  }
  let buttonClasses = [classes.menuButton];
  const offsetTrigger = window.innerHeight * .8;
  if(props.history.location.pathname !== '/' || props.offset >= offsetTrigger) {
    buttonClasses.push(classes.blackButton)
  } else {
    buttonClasses.push(classes.whiteButton)
  }
  return (
    <div className={classes.header}>
      <div className={buttonClasses.join(' ')} onClick={props.clicked}>
        <p><i className="fas fa-bars"></i></p>
      </div>
      <div className={menuClasses.join(' ')}>
        <div className={classes.black}></div>
        <div className={classes.white}>
          <div className={classes.closeButton} onClick={props.clicked}>
            <i className="fas fa-times"></i>
          </div>
          <div className={classes.links}>
            {Links.map((link, index) => {
              return (
                <NavLink key={index} to={link.to} activeClassName={classes.active} exact onClick={props.clicked}>{link.name}</NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(header);