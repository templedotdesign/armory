import React from 'react';

import classes from './ImageOverlay.css';

const imageOverlay = (props) => {
  let attachedClasses = [classes.ImageOverlay];
  if(!props.visible) {
    attachedClasses.push(classes.Invisible)
  }
  return (
    <div className={attachedClasses.join(' ')}>
      <p>Click To View Details</p>
    </div>
  );
}

export default imageOverlay;