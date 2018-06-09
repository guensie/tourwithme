import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class TourGuideSignUp extends React.Component {
  render() {
    return (
        <div className="tour-guide-signup">
            <NavBar />
            
            <form action="action_page.php">
                <div className="container">
                    <h1>Sign up as a Tour Guide</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="name"><b>Full Name</b></label>
                    <input type="text" placeholder="Enter Full Name" name="name" required />
                    
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                
                    <label htmlForfor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                
                    <label htmlForfor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                    <hr></hr>

                    <p> By creating an account you agree to our <a href="/TermsAndPrivacy">Terms & Privacy</a>.</p>
                    <button type="submit" className="registerbtn">Register</button>
                </div>

                <div className="container signin">
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </div>
            </form>
            
        </div>
      
          );
  }
}

export default TourGuideSignUp;
