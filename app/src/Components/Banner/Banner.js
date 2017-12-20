import React from 'react';

import classes from './Banner.css';

const banner = (props) => {
  let attachedClasses = [classes.Banner];
  let random = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  switch(random) {
    case 0: 
      attachedClasses.push(classes.Castle);
      break;
    case 1: 
      attachedClasses.push(classes.Ballroom);
      break;
    default:
      console.error('Components/Banner::OutOfRangeError');
      break;
  }
  return(
    <div className={attachedClasses.join(' ')}>
      <h1>{props.text}</h1>
    </div>
  );
};

export default banner;