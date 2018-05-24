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
                <form>
                    <div className="namefield">
                        <label htmlFor="nameinput">First Name:</label>
                        <input id="nameinput" type="text" className="namefield"></input>
                        <label htmlFor="nameinput">Last Name:</label>
                        <input id="nameinput" type="text" className="namefield"></input>
                    </div>
                    <div clasName="login">
                        <div className="email">
                            <label htmlFor="emailinput">E-Mail:</label>
                            <input id="emailinput" type="text" size="30" maxLength="45" className="emailfield"></input>
                        </div>
                        <div className="user">
                            <span>Username:
                                <input type="text" className="password"></input>
                            </span>   
                        </div>
                        <div className="password">
                            <span>Password:
                                <input type="password" className="password"></input>
                            </span>
                        </div>   
                    </div>   
                    <div className="gender">
                        <label htmlFor="male">Male</label>
                        <input id="male" type="radio" className="gender" value="m"></input>
                        <label htmlFor="female">Female</label>
                        <input id="female" type="radio" className="gender" value="f"></input>
                    </div>
                    <p>Prefered Lanaguage:
                        <select className="colorstyles">
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select>
                    </p>
                    <p>Prefered Currency:
                        <select className="colorstyles">
                            <option value="US Dollars">US$</option>
                            <option value="Pound">Pound</option>
                            <option value="Yen">Yen</option>
                        </select>
                    </p>
                    <div className="messagebox">
                        <label htmlFor="messageinput">Describe Yourself:</label>
                        <textarea className="messagefield"></textarea>
                    </div> 
                    <div className="submit">
                        <input type="submit"></input>
                    </div>
                </form>
            
            </div>
        </div>

         );
    }
  }

export default TouristProfilePage;