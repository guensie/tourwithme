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
            <div className="tourguideprofilejumbotron">
                <h1 className="display-4">Surfing Experience</h1>
                <p className="lead"><b>Hosted by Adam Lake</b></p>
                <img className="card-img-top" id="profileImage" src="https://expertbeacon.com/sites/default/files/advice_for_men_on_selecting_your_online_dating_profile_photo.jpg" alt="Card image cap"></img>
                <hr className="my-4"></hr>
                <p><b>About your host</b> - I was fortunate to b.e born and raised in Miami.
                   I started surfing at a very young age, and later, after realizing I wanted to share my passion for surfing with other people, 
                   I became specialized in teaching this amazing sport.</p>
            </div>
            <div className="tourguideprofilejumbotron">
                <p><b>What we will do </b> - On the day of the experience,
                   we will choose the best place to sufer according to the weather conditions of the sea and your level, 
                   then we will go to the beach and have a save and fun two (2) hour surf lesson.</p>
                <ul className="list-group">
                    <li className="list-group-item"><b>Length of tour:</b> 2 hrs </li>
                    <li className="list-group-item"><b>Language(s):</b> English, Spanish </li>
                    <li className="list-group-item"><b>Cost:</b> $15 </li>
                    <li className="list-group-item"> <b>Number of guests:</b> Six</li>
                    <li className="list-group-item"> <b>Who can come:</b> Guests ages 10 and up can attend.</li>
                    <li className="list-group-item"> <b> Upcoming Availability</b></li>
                </ul>
            </div>
                  <div className="month">      
                    </div>
                    <ul className="weekdays">
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                        <li>Sun<li>
                    <div className="month">      
                    </div>
                    <ul className="weekdays">
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                        <li>Su</li>
                    </ul>
                    <ul className="days">  
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li><span className="active">10</span></li>
                        <li>11</li>
                        <li>12</li>
                    </ul>
           </div>
        </div>  
      
         );
    }
  }

export default TourguideProfilePage;