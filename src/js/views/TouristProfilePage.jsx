import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class TouristProfilePage extends React.Component {
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
            <div className="TouristProfilePage">  
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" id="profileImage" src="https://images.pexels.com/photos/972884/pexels-photo-972884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                    <div className="card-body">   
                        <p className="card-text">My name is Ashley, I love to travel to Miami to escape the the harsh weather in Alaska:).</p>
                    </div>   
                </div>
                <ul className="list-group">
                    <li className="list-group-item">Name: Jody-ann Johnson </li>
                    <li className="list-group-item">Age: 28 years old </li>
                    <li className="list-group-item">Gender: Female </li>
                    <li className="list-group-item">Job Description: Business Systems Analyst</li>
                    <li className="list-group-item">Hobbies: Travelling, computer coding, surfing and latin dancing </li>
                    <li className="list-group-item"> Favourite Quote: Seize the moment everytime...</li>
                    <li><button type="button" className="btn btn-info">Edit Profile</button></li>
                </ul>  
            </div> 
        </div>  
      

         );
    }
  }

export default TouristProfilePage;