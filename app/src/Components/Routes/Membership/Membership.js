import React from 'react';

import CallToAction from '../../CallToAction/CallToAction';
import Footer from '../../Footer/Footer';

import classes from './Membership.css';

const membership = () => {
  let links = [
    {
      title: 'Membership Form',
      target: '_blank',
      rel: 'noopener noreferrer',
      address: 'https://drive.google.com/file/d/1TIM8Elyoom6SYfJSj9hStvJcpLHRxmYC/view?usp=sharing',
    }
  ];
  return (
    <div>
      <div className={classes.Membership}>
        <h1>Become A Member</h1>
        <p>
          This will explain membership benefits.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
          in neque justo. Duis dictum nulla volutpat ex dignissim pellentesque. Vestibulum magna nulla, semper 
          imperdiet aliquam et, egestas nec eros. Cras vel nunc dapibus metus pellentesque molestie ut eget velit. 
          Nunc varius diam eu libero sodales gravida. 
        </p>
        <p>
          Please contact Ed Rogers at 419-673-8955 for more information on becoming a member of the Hardin 
          County Armory Restoration Foundation.
        </p>
        <CallToAction
          heading='Ready To Join Us?'
          details='Click Below To Download Our Membership Form'
          links={links}/>
        <div className={classes.Row}> 
          <div className={classes.Castle}></div>
          <div className={classes.Ballroom}></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default membership;