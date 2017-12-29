import React from 'react';

import classes from './Contact.css';

const contact = (props) => {
  return (
    <div className={classes.Contact}>
      <h1>Contact Us!</h1>
      <div className={classes.Column}>
        <p style={{fontWeight: 'bold'}}>
          For additional information concerning the Armory or a historical tour call or write
        </p>
        <p>
          Ed Rogers - 419-673-8955 
        </p>
        <p>
          Hardin County Armory Restoration Foundation
        </p>
        <p>
          P.O. Box 594
        </p>
        <p>
          Kenton, OH  43326
        </p>
        <p style={{fontWeight: 'bold'}}>
          For information concerning renting the Armory call, email or write
        </p>
        <p>
          Doris Blum - 567-674-5618
        </p>
        <p>
          P.O. Box 594
        </p>
        <p>
          Kenton, OH 43326
        </p>
        <p>
          jrogers@hardincountyarmory.com
        </p>
        <p style={{fontWeight: 'bold'}}>
          The Armory is located at
        </p>
        <p>
          128 N. Main St.
        </p>
        <p>
          Kenton OH 43326
        </p>
      </div>
    </div>
  );
}

export default contact;