import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './CallToAction.css';

const callToAction = (props) => {
  
  return (
    <div className={classes.CallToAction}>
      <h3>{props.heading}</h3>
      <p>{props.details}</p>
      <div className={classes.Links}>
        {props.links.map(link => {
          if(link.navigate) {
            return(
              <NavLink to={link.to}>{link.title}</NavLink>
            );
          } else {
            return (
              <a key={link.title} href={link.address} target={link.target} rel={link.rel} onClick={link.clicked} download={link.download}>{link.title}</a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default callToAction;