import React from 'react';
import image from '../../../Assets/Castle.jpeg'; 
import classes from './History.css';

const history = () => {
  return (
    <div className={classes.History}>
      <div className={classes.Row}>
        <img src={image} alt='castle'/> 
        <p>
          The Hardin County Armory was built in 1894 as a county guard armory. 
          At the time, the adjutant general lived in Kenton, and built the 
          armory with a grand ballroom and sauna. 
        </p>
      </div>
      <div className={classes.Row}> 
        <img src={image} alt='castle'/>
        <p>
          In 1947, the building was partially destroyed by a fire.  
          Reports claimed the fire began in the basement by a guardsman 
          cleaning rifles. 
        </p>
      </div>
      <div className={classes.Row}> 
        <img src={image} alt='castle'/>
        <p>
          The building also served as a gymnasium for the city schools, 
          and on weekends it hosted college basketball and Golden Gloves boxing.
          <br/>
          The Hardin County Armory remained in use until 1991, when it 
          was abandoned and stood empty and decaying. 
        </p>
      </div>
      <div className={classes.Row}> 
        <img src={image} alt='castle'/>
        <p>
          After attempts by the city, county, and private citizens to tear 
          it down, a group of concerned citizens stepped in to save the 
          building. Now a non-profit foundation, they have worked since 
          1997 to renovate the building. 
        </p>
      </div>
      <div className={classes.Row}> 
        <img src={image} alt='castle'/>
        <p>
          Today this building is revered by lovers of history, as well as 
          brides who are looking for the perfect reception site. The Hardin 
          County Armory’s charm is its history, which includes an exposed 
          brick wall left from the fire in 1947, as well as its notorious 
          castle-like charm. 
        </p>
      </div>
    </div>
  );
};

export default history;