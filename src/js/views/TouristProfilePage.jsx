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
                    <img className="card-img-top" id="profileImage" src="https://i0.wp.com/tricksmaze.com/wp-content/uploads/2017/04/Stylish-Girls-Profile-Pictures-8.jpg?resize=466%2C604&ssl=1" alt="Card image cap"></img>
                    <div className="card-body">   
                        <p className="card-text">My name is Ashley, I love to travel to Miami to escape the the harsh weather in Alaska:).</p>
                        <p className="upcomingTours"><b>Upcoming Tours:</b> None </p>
                    </div>   
                </div>

                <ul className="list-group">
                    <li className="list-group-item">Name: Ashley Johnson </li>
                    <li className="list-group-item">Age: 28 years old </li>
                    <li className="list-group-item">Gender: Female </li>
                    <li className="list-group-item">Job Description: Business Systems Analyst</li>
                    <li className="list-group-item">Hobbies: Travelling, computer coding, surfing and latin dancing </li>
                    <li className="list-group-item"> Favourite Quote: Seize the moment everytime...</li>
                    <button type="button" className="btn btn-primary btn-block">Update Profile</button>
                </ul>
                </div>
        </div>

        );
    }
}

export default TouristProfilePage;
