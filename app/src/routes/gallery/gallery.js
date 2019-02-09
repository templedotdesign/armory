import React, { Component } from 'react';

import GalleryOverlay from './galleryOverlay/galleryOverlay';

import classes from './gallery.css';

import chandelierImg from '../../assets/chandelier.png';
//import armoryImg1 from '../../assets/armory_autumn.png';
//import armoryImg2 from '../../assets/armory_awnings.png';
//import armoryImg3 from '../../assets/armory_battlements.png';
import armoryImg4 from '../../assets/armory_car.png';
//import armoryImg5 from '../../assets/armory_gray.png';
//import armoryImg6 from '../../assets/armory_illustrated.png';
//import armoryImg7 from '../../assets/armory_sandman.png';
//import armoryImg8 from '../../assets/armory_tree.png';
//import armoryImg9 from '../../assets/armory_van.png';
import coupleImg from '../../assets/couple.png';
//import dancingImg1 from '../../assets/dancing1.png';
//import dancingImg2 from '../../assets/dancing2.png';
//import dancingImg3 from '../../assets/dancing3.png';
import dancingImg4 from '../../assets/dancing4.png';
import ervinImg from '../../assets/ervin.jpg';
//import kissImg1 from '../../assets/kiss1.png';
import kissImg2 from '../../assets/kiss2.png';
import tableImg from '../../assets/table.png';
import tablesImg from '../../assets/tables.png';
import couchImg from '../../assets/couch1.png';
//import barImg from '../../assets/bar.png';
//import mirrorImg from '../../assets/mirror.png'
//import facadeImg from '../../assets/facade.png';
//import gymImg from '../../assets/gym.png';
import img831 from '../../assets/armory18318.jpg'
import img832 from '../../assets/armory28318.jpg'
import img833 from '../../assets/armory38318.jpg'
import img834 from '../../assets/armory48318.jpg'
import img835 from '../../assets/armory58318.jpg'
import img836 from '../../assets/armory68318.jpg'

import img291 from '../../assets/image291.jpeg'
import img292 from '../../assets/image292.jpeg'
import img293 from '../../assets/image293.jpeg'
import img294 from '../../assets/image294.jpeg'
import img295 from '../../assets/image295.jpeg'

class Gallery extends Component {
  state = {
    images: [
      chandelierImg,
      // armoryImg1,
      // armoryImg2,
      // armoryImg3,
      armoryImg4,
      // armoryImg5,
      // armoryImg6,
      // armoryImg7,
      // armoryImg8,
      // armoryImg9,
      coupleImg,
      // dancingImg1,
      // dancingImg2,
      // dancingImg3,
      dancingImg4,
      // kissImg1,
      kissImg2,
      tableImg,
      couchImg,
      ervinImg,
      tablesImg,
      // barImg,
      // mirrorImg,
      // facadeImg,
      // gymImg,
      img831,
      img832,
      img833,
      img834,
      img835,
      img836,
      img291,
      img292,
      img293,
      img294,
      img295
    ],
    hideOverlay: true,
    currentIndex: 0
  }

  componentDidMount() {
    window.scroll(0,0);
  }

  toggleOverlay = () => {
    this.setState({...this.state, hideOverlay: !this.state.hideOverlay})
  }

  incrementIndex = () => {
    let index = this.state.currentIndex;
    if(index === this.state.images.length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({...this.state, currentIndex: index});
  }

  decrementIndex = () => {
    let index = this.state.currentIndex;
    if(index === 0) {
      index = this.state.images.length - 1;
    } else {
      index--;
    }
    this.setState({...this.state, currentIndex: index});
  }

  clickHandler = (index) => {
    this.setState({...this.state, hideOverlay: false, currentIndex: index})
  }
  
  render() {
    
    return (
      <div>
        <GalleryOverlay 
          hidden={this.state.hideOverlay} 
          clicked={this.toggleOverlay} 
          index={this.state.currentIndex} 
          images={this.state.images}
          increment={this.incrementIndex}
          decrement={this.decrementIndex}
        />
        <div className={classes.heading}>
          <h1>Photo Gallery</h1>
          <div className={classes.row}>
            {this.state.images.map((img, index) => {
              return (
                <div className={classes.image} style={{backgroundImage: `url(${img})`}} onClick={() => {this.clickHandler(index)}}></div>
              )
            })}
          </div>
          {/* <p style={{margin: '100px 0'}}>Photos Coming Soon!</p> */}
        </div>   
      </div>
    );
  }
}

export default Gallery;