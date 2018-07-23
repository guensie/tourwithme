import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar.jsx';
import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class TouristProfilePage extends React.Component {
    render() {
        return (
            <div>
            <NavBar activeNavbar="TOURIST"/>
            <div className="TouristProfilePage">  
                <div className="card" id="touristcard">
                    <div className="myprofile"><h1>My Profile</h1></div>
                    <img className="card-img-top" id="profileImage" src="https://images.pexels.com/photos/972884/pexels-photo-972884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                    <div className="card-body">   
                        <p className="card-text">My name is Ashley, I love to travel to Miami to escape the the harsh weather in Alaska:).</p>
                        <p className="upcomingTours"><b>Upcoming Tours:</b> None </p>
                    </div>   
                </div>
                <ul className="list-group" id="touristprofile">
                    <li className="list-group-item"><b>Name:</b> Jody-ann Johnson </li>
                    <li className="list-group-item"><b> Age:</b> 28 years old </li>
                    <li className="list-group-item"><b>Gender:</b> Female </li>
                    <li className="list-group-item"><b>Job Description:</b> Business Systems Analyst</li>
                    <li className="list-group-item"><b>Hobbies:</b> Travelling, computer coding, surfing and latin dancing </li>
                    <li className="list-group-item"><b> Favourite Quote:</b> Seize the moment everytime...</li>
                    <li className="list-group-item"><b>Upcoming Tours:</b> None </li>
                    <li><button type="button" className="btn btn-info">Edit Profile</button></li>
                </ul>  
            </div> 
        </div>

        );
    }
}

export default TouristProfilePage;
