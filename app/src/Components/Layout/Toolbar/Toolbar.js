import React from 'react';

import LinkGroup from '../Navigation/LinkGroup/LinkGroup';
import Links from '../../../Constants/Links/Links';

import classes from './Toolbar.css';

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <LinkGroup links={Links} active={classes.active}/>
    </div>
  );
};

export default toolbar;