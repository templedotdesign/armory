import React from 'react';

import classes from './galleryOverlay.css';

const galleryOverlay = (props) => {
  let overlayClasses = [classes.galleryOverlay];
  if(props.hidden) {
    overlayClasses.push(classes.hidden)
  }
  return (
    <div className={overlayClasses.join(' ')}>
      <p className={classes.closeButton} onClick={props.clicked}><i className="fas fa-times"></i></p>
      <div className={classes.row}>
        <p className={classes.buttonLeft} onClick={props.decrement}><i className="fas fa-chevron-left"></i></p>
        <img className={classes.image} src={props.images[props.index]}/>
        {/* <div className={classes.image} style={{backgroundImage: `url(${props.images[props.index]})`}}></div> */}
        <p className={classes.buttonRight} onClick={props.increment}><i className="fas fa-chevron-right"></i></p>
      </div>
    </div>
  );
}

export default galleryOverlay;