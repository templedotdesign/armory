import React from 'react';

import Link from '../Link/Link';

import classes from './LinkGroup.css';

const linkGroup = (props) => {
  let navClasses = [classes.LinkGroup];
  if(props.vertical) {
    navClasses.push(classes.Vertical);
  }
  return (
    <nav className={navClasses.join(' ')}>
      {props.links.map(link => {
        return (
          <Link key={link.to} to={link.to} name={link.name} active={props.active} exact={link.exact} clicked={props.clicked}/>
        );
      })}
    </nav>
  );
};

export default linkGroup;