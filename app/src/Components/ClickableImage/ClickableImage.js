import React from 'react';

import ImageOverlay from '../ImageOverlay/ImageOverlay';

import classes from './ClickableImage.css';

const clickableImage = (props) => {
  let attachedClasses = [classes.ClickableImage];
  if(props.gallery) {
    switch(props.index) {
      case 0:
        attachedClasses.push(classes.Castle);
        break;
      case 1:
        attachedClasses.push(classes.Table);
        break;
      case 2:
        attachedClasses.push(classes.Ballroom);
        break;
      default:
        console.error('Components/ClickableImage::IndexOutOfRange');
        break;
    }
  } else {
    switch(props.index) {
      case 0:
        attachedClasses.push(classes.Armory);
        break;
      case 1:
        attachedClasses.push(classes.Car);
        break;
      case 2:
        attachedClasses.push(classes.Basketball);
        break;
      case 3:
        attachedClasses.push(classes.Damage);
        break;
      case 4:
        attachedClasses.push(classes.Castle);
        break;
      case 5:
        attachedClasses.push(classes.Ballroom);
        break;
      default:
        console.error('Components/ClickableImage::IndexOutOfRange');
        break;
    }
  }
  
  return (
    <div className={attachedClasses.join(' ')} onClick={props.clicked} onMouseOver={props.mouseEnter} onMouseOut={props.mouseExit}>
      <ImageOverlay visible={props.visible}/>
    </div>
  );
}

export default clickableImage;