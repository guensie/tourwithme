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
       
          <div id="TouristSignup" className="tab-pane fade"> 
              <form className="login-form">
                <div className="form-group">
                  <label for="exampleInputEmail1" class="text-uppercase">Full Name</label>
                  <input type="text" className="form-control" placeholder=""></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-uppercase">Password</label>
                  <input type="password" class="form-control" placeholder=""> </input>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-uppercase">Confirm Password</label>
                  <input type="password" className="form-control" placeholder=""></input>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" class="text-uppercase">Email Address</label>
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

// ReactDOM.render(
//     <Home 
//     />,
//     document.querySelector('#app')
// );

