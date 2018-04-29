import React, { Component } from 'react';

import classes from './membership.css';

import { statements } from '../../Constants/membership/membership';

class Membership extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    return (
      <div className={classes.membership}>
        <div className={classes.heading}>
          <h1>Becoming A Member</h1>
        </div>
        {statements.map((p, index) => {
          return (
            <p key={index} className={classes.statement}>{p}</p>
          );
        })}
          {/* <p style ={{fontSize: '1.3em', margin: '20px', textAlign: 'center'}}>Download this form to become a member</p> */}
          <a 
            className={classes.button} 
            href='https://drive.google.com/file/d/1TIM8Elyoom6SYfJSj9hStvJcpLHRxmYC/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            Membership Form
          </a>
      </div>
    );
  }
}

export default Membership;