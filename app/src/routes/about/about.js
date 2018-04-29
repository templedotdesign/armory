import React, { Component } from 'react';

import { aboutDescription, board } from '../../Constants/about/about';

import armoryImg from '../../assets/armory2.png';
import carImg from '../../assets/linemen.png';
import castleImg from '../../assets/armory.png';
import ballroomImg from '../../assets/balcony.png';
import armoryDecayImg from '../../assets/armorydecay.png';
import caveInImg from '../../assets/cavein.png';

import autumnPostcard from '../../assets/armory_autumn.png';
import awningsPostcard from '../../assets/armory_awnings.png';
import battlementsPostcard from '../../assets/armory_battlements.png';
import grayPostcard from '../../assets/armory_gray.png';
import illustratedPostcard from '../../assets/armory_illustrated.png';
import treePostcard from '../../assets/armory_tree.png';

import classes from './about.css';

class About extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    return (
      <div>
        <div className={classes.heading}>
          <h1>Who We Are</h1>  
        </div>
        <p className={classes.description}>{aboutDescription}</p>
        <div className={classes.row}>
          <img src={carImg} alt='armory'/>
          <p>The Hardin County Armory was built in 1894 as a county guard armory. At the time, the adjutant general lived in Kenton, and built the armory with a grand ballroom and sauna.</p>
        </div>
        <div className={classes.rowReverse}>
          <p>In 1947, the building was partially destroyed by a fire.  Reports claimed the fire began in the basement by a guardsman cleaning rifles.</p>
          <img src={armoryDecayImg} alt='car'/>          
        </div>
        <div className={classes.row}>
          <img src={castleImg} alt='basketball'/>
          <p>The building also served as a gymnasium for the city schools, and on weekends it hosted college basketball and Golden Gloves boxing.</p>
        </div>
        <div className={classes.rowReverse}>
          <p>The Hardin County Armory remained in use until 1991, when it was abandoned and stood empty and decaying.</p>
          <img src={caveInImg} alt='damage'/>          
        </div>
        <div className={classes.row}>
          <img src={armoryImg} alt='castle'/>
          <p>After attempts by the city, county, and private citizens to tear it down, a group of concerned citizens stepped in to save the building. Now a non-profit foundation, they have worked since 1997 to renovate the building.</p>
        </div>
        <div className={classes.rowReverse}>
          <p>Today this building is revered by lovers of history, as well as brides looking for the perfect reception site. The Armory’s charm is its history, which includes an exposed brick wall left from the fire in 1947, as well as its castle-like facade.</p>
          <img src={ballroomImg} alt='ballroom'/>          
        </div>
        <div className={classes.postcards}>
          <img src={autumnPostcard}/>
          <img src={awningsPostcard}/>
          <img src={battlementsPostcard}/>
          <img src={grayPostcard}/>
          <img src={illustratedPostcard}/>
          <img src={treePostcard}/>
        </div>
        <div className={classes.board}>
          <h3>Board Of Directors</h3>
          {board.map((member, index) => {
            return (
              <p key={index}>{member.title} - {member.name}</p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default About;