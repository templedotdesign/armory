import React from 'react';
import classes from './footer.css';

const footer = () => {
  return(
    <div className={classes.Footer}>
      <div>
        <p><i className="fa fa-facebook-official" aria-hidden="true"></i></p>
        <i className="fa fa-twitter-square" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </div>
      <p>Created by Temple Design Solutions</p>
    </div>
  );
};

export default footer;