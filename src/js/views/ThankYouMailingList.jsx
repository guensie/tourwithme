import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class ThankYouMailingList extends React.Component {
  render() {
    return (
        <div className="thank-you">
            <div className="thank-you-jumbotron-fluid">
                <h1 className="display-4">Thank You For Joining Our Mailing List!</h1>
                <p className="lead">Check your inbox for the lastest updates and upcoming promotions.</p>
                <hr className="my-4" />
                <p>In the mean time feel free to hit the back button and explore more of Tour With Me</p>
            </div>
      
        </div>
                );
  }
}

export default ThankYouMailingList;
