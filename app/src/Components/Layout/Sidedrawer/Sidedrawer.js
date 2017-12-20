import React from 'react';

import LinkGroup from '../Navigation/LinkGroup/LinkGroup';

import classes from './Sidedrawer.css';

const sidedrawer = (props) => {
  const links = [
    {to: '/', name: 'Home', exact: true},
    {to: '/about', name: 'About', exact: false},
    {to: '/history', name: 'History', exact: false},
    {to: '/receptions', name: 'Receptions', exact: false},
    {to: '/membership', name: 'Membership', exact: false},
    {to: '/faq', name: 'FAQ', exact: false}
  ];  
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if(props.open) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  return(
    <div className={attachedClasses.join(' ')}>
      <div>
        <i className="fa fa-times" aria-hidden="true" onClick={props.closer}></i>      
      </div>
      <LinkGroup links={links} active={classes.active} vertical/>
    </div>
  );
};

export default sidedrawer;