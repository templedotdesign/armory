import React, { Component } from 'react';

import ScreenOverlay from '../../ScreenOverlay/ScreenOverlay';
import Modal from '../../Modal/Modal';
import ClickableImage from '../../ClickableImage/ClickableImage';

import classes from './History.css';

import Corner from '../../../Assets/Corner.jpeg';
import Car from '../../../Assets/Car.jpeg';
import Basketball from '../../../Assets/Basketball.jpeg';
import Damage from '../../../Assets/Damage.jpeg';
import Castle from '../../../Assets/Castle.jpeg';
import Ballroom from '../../../Assets/Ballroom.jpeg';

class History extends Component {
  state = {
    modalOpen: false,
    currentImageIndex: 0,
    historyImages: [
      {
        source: Corner, 
        caption: 'The Hardin County Armory was built in 1894 as a county guard armory. At the time, the adjutant general lived in Kenton, and built the armory with a grand ballroom and sauna.'
      },
      {
        source: Car,
        caption: 'In 1947, the building was partially destroyed by a fire.  Reports claimed the fire began in the basement by a guardsman cleaning rifles.'
      },
      {
        source: Basketball,
        caption: 'The building also served as a gymnasium for the city schools, and on weekends it hosted college basketball and Golden Gloves boxing.'
      },
      {
        source: Damage,
        caption: 'The Hardin County Armory remained in use until 1991, when it was abandoned and stood empty and decaying.' 
      },
      {
        source: Castle,
        caption: 'After attempts by the city, county, and private citizens to tear it down, a group of concerned citizens stepped in to save the building. Now a non-profit foundation, they have worked since 1997 to renovate the building.'
      },
      {
        source: Ballroom,
        caption: 'Today this building is revered by lovers of history, as well as brides looking for the perfect reception site. The Armory’s charm is its history, which includes an exposed brick wall left from the fire in 1947, as well as its castle-like facade.' 
      }
    ],
    imageOverlayVisibility: [false, false, false, false, false, false]
  }

  onModalClosed = (event) => {
    event.preventDefault();
    this.setState({...this.state, modalOpen: false});
  };

  onModalOpened = (event, index) => {
    event.preventDefault();
    this.setState({...this.state, currentImageIndex: index, modalOpen: true});
  }

  onMouseOverImage = (event, index) => {
    event.preventDefault();
    let visibilityArray = [...this.state.imageOverlayVisibility];
    visibilityArray[index] = true;
    this.setState({...this.state, imageOverlayVisibility: visibilityArray});
  };

  onMouseExitImage = (event, index) => {
    event.preventDefault();
    let visibilityArray = [...this.state.imageOverlayVisibility];
    visibilityArray[index] = false;
    this.setState({...this.state, imageOverlayVisibility: visibilityArray});
  };

  render() {
    let modalContents = null;
    if(this.state.modalOpen) {
      modalContents = (
        <div>
          <img src={this.state.historyImages[this.state.currentImageIndex].source} alt='corner' style={{width: '60%'}}/>
          <p>{this.state.historyImages[this.state.currentImageIndex].caption}</p>
        </div>
      );
    }
    return (
      <div className={classes.History}>
        <ScreenOverlay visible={this.state.modalOpen} clicked={this.onModalClosed}>
          <Modal>
            {modalContents}
          </Modal>
        </ScreenOverlay>
        <h1>Our History</h1>
        <div className={classes.Row}>
          <ClickableImage 
            index={0} 
            clicked={(event) => {this.onModalOpened(event, 0)}} 
            visible={this.state.imageOverlayVisibility[0]}
            mouseEnter={(event) => {this.onMouseOverImage(event, 0)}}
            mouseExit={(event) => {this.onMouseExitImage(event, 0)}}/>
          <ClickableImage 
            index={1} 
            clicked={(event) => {this.onModalOpened(event, 1)}} 
            visible={this.state.imageOverlayVisibility[1]}
            mouseEnter={(event) => {this.onMouseOverImage(event, 1)}}
            mouseExit={(event) => {this.onMouseExitImage(event, 1)}}/>
          <ClickableImage 
            index={2} 
            clicked={(event) => {this.onModalOpened(event, 2)}} 
            visible={this.state.imageOverlayVisibility[2]}
            mouseEnter={(event) => {this.onMouseOverImage(event, 2)}}
            mouseExit={(event) => {this.onMouseExitImage(event, 2)}}/>
        </div>
        <br/>
        <div className={classes.Row}>
          <ClickableImage 
            index={3} 
            clicked={(event) => {this.onModalOpened(event, 3)}} 
            visible={this.state.imageOverlayVisibility[3]}
            mouseEnter={(event) => {this.onMouseOverImage(event, 3)}}
            mouseExit={(event) => {this.onMouseExitImage(event, 3)}}/>
          <ClickableImage 
            index={4} 
            clicked={(event) => {this.onModalOpened(event, 4)}} 
            visible={this.state.imageOverlayVisibility[4]}
            mouseEnter={(event) => {this.onMouseOverImage(event, 4)}}
            mouseExit={(event) => {this.onMouseExitImage(event, 4)}}/>
          <ClickableImage 
            index={5} 
            clicked={(event) => {this.onModalOpened(event, 5)}} 
            visible={this.state.imageOverlayVisibility[5]}
            mouseEnter={(event) => {this.onMouseOverImage(event, 5)}}
            mouseExit={(event) => {this.onMouseExitImage(event, 5)}}/>
        </div>
      </div>
    );
  }
}

export default History;