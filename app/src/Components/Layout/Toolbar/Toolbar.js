import React from 'react';

import LinkGroup from '../Navigation/LinkGroup/LinkGroup';

import classes from './Toolbar.css';

const toolbar = (props) => {
  const links = [
    {to: '/', name: 'Home', exact: true},
    {to: '/about', name: 'About', exact: false},
    {to: '/history', name: 'History', exact: false},
    {to: '/receptions', name: 'Receptions', exact: false},
    {to: '/membership', name: 'Membership', exact: false},
    {to: '/faq', name: 'FAQ'}
  ];
  return (
    <div className={classes.Toolbar}>
      <LinkGroup links={links} active={classes.active}/>
    </div>
  );
};

export default toolbar;