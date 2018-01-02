import React, { Component } from 'react';

import ScreenOverlay from '../../../Components/ScreenOverlay/ScreenOverlay';
import Modal from '../../../Components/Modal/Modal';
import ClickableImage from '../../../Components/ClickableImage/ClickableImage';
import Footer from '../../../Components/Footer/Footer';

import Armory from '../../../Assets/armory.png';
import Table from '../../../Assets/table.jpg';
import Balcony from '../../../Assets/balcony.jpg';

import classes from './Gallery.css';

class Gallery extends Component {
  state = {
    modalOpen: false,
    currentImageIndex: 0,
    galleryImages: [
      { source: Armory },
      { source: Table },
      { source: Balcony }
    ],
    imageOverlayVisibility: [false, false, false]
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

  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    let modalContents = null;
    if(this.state.modalOpen) {
      modalContents = (
        <div>
          <img src={this.state.galleryImages[this.state.currentImageIndex].source} alt='corner' style={{width: '60%'}}/>
        </div>
      );
    }
    return (
      <div>
        <ScreenOverlay visible={this.state.modalOpen} clicked={this.onModalClosed}>
          <Modal>
            {modalContents}
          </Modal>
        </ScreenOverlay>
        <div style={{paddingTop: '60px'}}>
          <h1 style={{textAlign: 'center'}}>Gallery</h1>
          <div className={classes.Row}>
          <ClickableImage
              gallery
              index={0} 
              clicked={(event) => {this.onModalOpened(event, 0)}} 
              visible={this.state.imageOverlayVisibility[0]}
              mouseEnter={(event) => {this.onMouseOverImage(event, 0)}}
              mouseExit={(event) => {this.onMouseExitImage(event, 0)}}/>
            <ClickableImage
              gallery 
              index={1} 
              clicked={(event) => {this.onModalOpened(event, 1)}} 
              visible={this.state.imageOverlayVisibility[1]}
              mouseEnter={(event) => {this.onMouseOverImage(event, 1)}}
              mouseExit={(event) => {this.onMouseExitImage(event, 1)}}/>
            <ClickableImage
              gallery 
              index={2} 
              clicked={(event) => {this.onModalOpened(event, 2)}} 
              visible={this.state.imageOverlayVisibility[2]}
              mouseEnter={(event) => {this.onMouseOverImage(event, 2)}}
              mouseExit={(event) => {this.onMouseExitImage(event, 2)}}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Gallery;