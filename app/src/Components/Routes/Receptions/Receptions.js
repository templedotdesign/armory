import React, { Component } from 'react';

import CallToAction from '../../CallToAction/CallToAction';
import ScreenOverlay from '../../ScreenOverlay/ScreenOverlay';
import Modal from '../../Modal/Modal';
import Footer from '../../Footer/Footer';

import classes from './Receptions.css';

class Receptions extends Component {
  state = {
    modalOpen: false
  }

  onModalOpen = (event) => {
    event.preventDefault();
    this.setState({...this.state, modalOpen: true});
  }

  onModalClosed = (event) => {
    event.preventDefault();
    this.setState({...this.state, modalOpen: false});
  };

  render() {
    let links = [
      {
        title: 'Check Availability', 
        target: '_blank', 
        rel: 'noopener noreferrer', 
        address: 'http://www.google.com/calendar/embed?src=33adpgdnk7gblpoi43gfm36g5s@group.calendar.google.com&ctz=America/New_York'
      },
      {
        title: 'Make A Reservation',
        clicked: this.onModalOpen
      }
    ];
    return (
      <div>
        <div className={classes.Receptions}>
          <ScreenOverlay visible={this.state.modalOpen} clicked={this.onModalClosed}>
            <Modal>
              <p>
                For information concerning renting the Armory call, email or write
              </p>
              <p>
                Doris Blum
              </p>
              <p>
                P.O. Box 594
              </p>
              <p>
                Kenton, OH 43326
              </p>
              <p>
                jrogers@hardincountyarmory.com
              </p>
              <p>
                567-674-5618
              </p>
            </Modal>
          </ScreenOverlay>
          <h1>An Event To Remember</h1>
          <p>
            Every little girl dreams of a fairy tale wedding, complete with the castle.  This building has so 
            much to offer for your next event.  The unique historical site is something your guests will have to 
            see to believe.  A diamond in the rough, this beautiful ballroom sets the perfect tone for your event.  
            Upon entering the main ballroom, your guest's eyes turn upward to the 17-foot wide ornate chandelier.  
            With several wall areas showing off exposed brick, and a balcony surrounding the entire 7,500 square-foot 
            ballroom, the building itself will be the conversation piece.
          </p>
          <p>
            The Armory is now taking reservations!  Looking for a unique location for your wedding ceremony and/or 
            reception?  This building is worth a second look!  Your guests will be amazed at what Kenton, Ohio has 
            to offer.  
          </p>
          <p>
            This nationally-recognized historical building in our downtown district is an elegant and artistic 
            approach to wedding receptions.  We are within walking distance of several area churches. Offer your 
            guests a chance to attend a wedding with a small-town feel, and avoid the big-city budgets and 
            headaches.
          </p>
          <p>
            This reception site can handle over 350 guests, and offers a unique balcony level for added space and 
            comfort.  Call to schedule your tour today!  Date Availability is subject to change.
          </p>
          <CallToAction
            heading='Ready To Save The Date?'
            details='Click Below To Check Date Availability Or Reserve A Date For Your Next Event'
            links={links}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Receptions;