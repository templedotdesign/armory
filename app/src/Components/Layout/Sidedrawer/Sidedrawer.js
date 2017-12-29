import React from 'react';

import LinkGroup from '../Navigation/LinkGroup/LinkGroup';
import Links from '../../../Constants/Links/Links';

import classes from './Sidedrawer.css';

const sidedrawer = (props) => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if(props.open) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  return(
    <div className={attachedClasses.join(' ')}>
      <div>
        <i className="fa fa-times" aria-hidden="true" onClick={props.closer}></i>      
      </div>
      <LinkGroup links={Links} active={classes.active} vertical clicked={props.closer}/>
    </div>
  );
};

export default sidedrawer;