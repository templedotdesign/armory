import React from 'react';

import Footer from '../../Footer/Footer';

import classes from './Faq.css';

const faq = () => {
  return (
    <div className={classes.Faq}>
      <h1>FAQ</h1>
      <div className={classes.Column}>
        <p>
          The Armory provides approximately: 51 round tables which are 6-foot diameter and 24 8‑foot buffet 
          tables with standard 2" tabletop thickness easily accepts skirting as well as approximately 440 chairs.
        </p>
        <p>
          The rental contract is for a 24-hour period, from 9am Saturday until 9am Sunday.  
        </p>
        <p>
          Friday is available for rent as an add-on to a Saturday contract for an additional fee.
        </p>
        <p>
          No date may be held without a deposit.
        </p>
        <p>
          Table linens are not provided by the Armory; neither set-up nor tear-down is provided.
        </p>
        <p>
          The facility is air-conditioned.
        </p>
        <p>
          We have a ramp for handicapped access.
        </p>
        <p>
          Paper products for the restrooms and trash bags are provided by the Armory.  Trash removal is 
          included in the rental fee.
        </p>
        <p>
          We do not have a preferred list of vendors.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default faq;