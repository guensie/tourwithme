import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class Confirmation extends React.Component {
    render() {
        return (
            <div className="confirmation">
            <div className="confirmation-jumbotron-fluid">
                <h1 className="display-4" id="confirmation">Your Tour Has Been Booked!</h1>
                <p className="lead">Check your inbox for confirmation number and further instructions.</p>
                <hr className="my-4" />
                <p>In the mean time click below to return home</p>
                <button type="button" className="btn btn-info btn-lg btn-block" onClick={() => this.props.history.push("/Home")}>Return to homepage</button>
            </div>

            </div>
        );
    }
}

export default Confirmation;
