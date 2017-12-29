import React from 'react';

import classes from './ScreenOverlay.css';

const screenOverlay = (props) => {
  let attachedClasses = [classes.ScreenOverlay]
  if(!props.visible) {
    attachedClasses.push(classes.Invisible);
  }
  return (
    <div className={attachedClasses.join(' ')} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default screenOverlay;