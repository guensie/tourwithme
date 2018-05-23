import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class TouristSignUp extends React.Component {
  render() {
    return (
        <div>
            <div id="TouristSignup" className="tab-pane fade"> 
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Full Name</label>
                        <input type="text" className="form-control" placeholder=""></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input type="password" className="form-control" placeholder=""> </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Confirm Password</label>
                        <input type="password" className="form-control" placeholder=""></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Email Address</label>
                        <input type="password" className="form-control" placeholder=""> </input>
                    </div>
                    <div className="form-check">
                        <button type="submit" className="btn btn-login float-right">REGISTER</button>
                    </div>
                </form>
            </div>
        </div>
      
       
    );
  }
}

export default TouristSignUp;



