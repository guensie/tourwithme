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
        <div className="TourguideProfilePage">
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
                    <select className="language">
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                    </select>
                </p>
                <p>Category:
                    <select className="Category">
                        <option value="Wine Tasting">Wine Tasting</option>
                        <option value="Yoga Class">Yoga Class</option>
                        <option value="Cooking Experience">Cooking Experience</option>
                        <option value="Culture Walk">Culture Walk</option>
                        <option value="Shopping with a Stylist">Shopping with a Stylist</option>
                        <option value="Music Lessons">Music Lessons</option>
                    </select>
                </p>
                <p>Prefered Price per Guest:
                    <select className="currency">
                        <option value="$5.00">$5.00</option>
                        <option value="$10.00">$10.00</option>
                        <option value="$15.00">$15.00</option>
                    </select>
                </p>
                <p>Prefered Number of Guest:
                    <select className="Number of Guest">
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                        <option value="Four">Four</option>
                        <option value="Five">Five</option>
                        <option value="Six">Six</option>
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
      

         );
    }
  }

export default TourguideProfilePage;