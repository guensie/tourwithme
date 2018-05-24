import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class TourguideProfilePage extends React.Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" id="twm" href="/home">TWM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/exploretourguides">Explore Tour Guides <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/becomeatourguide">Become a Tour Guide</a>
                        <a className="nav-item nav-link" href="/touristsignup">Tourist Signup</a>
                        <a className="nav-item nav-link" href="/tourguideprofilepage">My Tourguide Profile</a>
                        <a className="nav-item nav-link" href="/touristprofilepage">My Tourist Profile</a>
                    </div>
                </div>
            </nav>
            <div className="TourguideProfilePage">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" id="profileImage" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">My experience: Join me to learn how to make authentic Argentinian empanadas. We will meet at my friends restaurant in Little Havana. After class we will enjoy Miami style cafecitos.</p>
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">Length of tour: 1-2 hrs </li>
                    <li className="list-group-item">Language(s): English, Spanish </li>
                    <li className="list-group-item">Category: Cooking Experience  </li>
                    <li className="list-group-item">Gender: Male </li>
                    <li className="list-group-item">Cost: $15 </li>
                    <li className="list-group-item">Number of guests: Two </li>
                    <li className="list-group-item">Upcoming Tours: 0</li>
                    <li><button type="button" className="btn btn-info">Edit Profile</button></li>
                </ul>
            </div> 
        </div>
      

         );
    }
  }

export default TourguideProfilePage;