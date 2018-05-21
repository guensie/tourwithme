import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';

export class BecomeATourGuide extends React.Component {
  render() {
    return (

        <div className="becomeATourGuide">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" id="twm" href="#">TWM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Explore Tour Guides <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Become a Tour Guide</a>
                        <a className="nav-item nav-link" href="#">Login/Signup</a>
                        <a className="nav-item nav-link disabled" href="#">My Profile</a>
                    </div>
                </div>
            </nav>
            <div className="jumbotron1 jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                <div className="container" id="intro1">
                    <h1 className="display-4">Become a tour guide with TWM and share your passion for the city.</h1>
                    <p className="lead">With TWM you can make money on your own terms doing what you love.</p>
                    <button type="button" className="btn btn-info">Sign Up Now</button>
                </div>
            </div>
            <div className="jumbotrona">
                <div className="jumbotron2 jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/346808/pexels-photo-346808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                    <div className="container">
                        <h1 className="display-4">What is Tour With Me?</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        
                    </div>
                </div>
            </div>
            <div className="jumbotronb">
                <div className="jumbotron3 jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/936006/pexels-photo-936006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                    <div className="container"> 
                        <h1 className="display-4">Be a Curator of Cool Experiences.</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
            <div className="jumbotronc">
                <div className="jumbotron4 jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                    <div className="container"> 
                        <h1 className="display-4">What Tour With Me Covers</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <button type="button" className="btn btn-info">Sign Up Now</button>
                    </div>
                </div>
            </div>
        </div>
      
               );
    }
  }

export default BecomeATourGuide;