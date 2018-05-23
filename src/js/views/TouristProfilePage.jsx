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
        <div className="TouristProfilePage">
            <form>
                <div className="namefield">
                    <label for="nameinput">First Name:</label>
                    <input id="nameinput" type="text" className="namefield"></input>
                    <label for="nameinput">Last Name:</label>
                    <input id="nameinput" type="text" className="namefield"></input>
                </div>
                <div clasName="login">
                    <div className="email">
                        <label for="emailinput">E-Mail:</label>
                        <input id="emailinput" type="text" size="30" maxlength="45" className="emailfield"></input>
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
                    <label for="male">Male</label>
                    <input id="male" type="radio" className="gender" value="m"></input>
                    <label for="female">Female</label>
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
                    <label for="messageinput">Describe Yourself:</label>
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

export default TouristProfilePage;