import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class Thankyoutourguide extends React.Component {
    render() {
        return (
            <div className="thank-you">
            <div className="thank-you-tourguide-jumbotron-fluid">
                <h1 className="display-4">Thank You For Signing Up!</h1>
                <p className="lead"> Check your inbox for a link to login or click here to log in.</p>
                <button className="btn btn-info sendtologin"onClick={() => this.props.history.push("/Login")}> Login </button>
                <hr className="my-4" />
            </div>
      
        </div>
        );
    }
}

export default Thankyoutourguide;
