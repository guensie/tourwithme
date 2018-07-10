import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class TouristSignUp extends React.Component {
  render() {
    return (
        
        <div>
            <NavBar />

            <div id="TouristSignup" className="tab-pane"> 
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Full Name</label>
                        <input type="text" className="form-control" placeholder=""></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input type="password" className="form-control" placeholder=""></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Confirm Password</label>
                        <input type="password" className="form-control" placeholder=""></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Email Address</label>
                        <input type="password" className="form-control" placeholder=""></input>
                    </div>
                    <div className="form-check">
                        <button type="submit" className="btn btn-login float-right">REGISTER</button>
                    </div>
                </form>
            </div>
            <form>
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
                <p>Prefered Cuurency:
                    <select className="Prefered Currency">
                        <option value="Argentine Peso"></option>
                        <option value="Brazillian real">Brazillian real</option>
                        <option value="Pound Sterling">Pound Sterling</option>
                        <option value="Saudi Arabian riyal">Saudi Arabian riyal</option>
                        <option value="United States Dollars">United States Dollars</option>
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

export default TouristSignUp;


