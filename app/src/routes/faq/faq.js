import React, { Component } from 'react';

import classes from './faq.css';

import { faq } from '../../Constants/faq/faq';

class Faq extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    return (
      <div>
        <div className={classes.heading}>
          <h1>Frequently Asked Questions</h1>
        </div>
          {faq.map((q, index) => {
            return (
              <div key={index} className={classes.question}>
                <h3>{q.question}</h3>
                <p>{q.answer}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Faq;