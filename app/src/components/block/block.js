import React, { Component } from 'react';

import classes from './block.css'

class Block extends Component {
  render() {
    let overlayClasses = [classes.overlay];
    if(this.props.hidden) {
      overlayClasses.push(classes.hidden);
    }
    let heading = '';
    switch(this.props.title.toLowerCase()) {
      case 'about':
      heading = 'Explore Our Rich History'
      break;
      case 'events':
      heading = 'Start Planning Your Event'
      break;
      case 'gallery':
      heading = 'Check Out Some Previous Events'
      break;
      case 'membership':
      heading = 'Become A Benefactor'
      break;
      default:
      break;
    }
    return (
      <div className={classes.block} onClick={this.props.clicked} onMouseOver={this.props.enter} onMouseLeave={this.props.leave}>
        <div className={overlayClasses.join(' ')}>
          <h3 style={{textAlign: 'center', padding: '0 10px'}}>{heading}</h3>
        </div>
        {this.props.title}
      </div>
    );
  }
}

export default Block;