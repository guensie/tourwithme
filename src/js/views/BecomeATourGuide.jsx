import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
import TourGuideCard from '../components/TourGuideCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export class BecomeATourGuide extends React.Component {
  render() {
    return (

        <div className="becomeATourGuide">
            <div>
                <NavBar />
            </div> 
            <div className="jumbotron1 jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                <div className="container" id="intro1">
                    <h1 className="display-4">Become a tour guide with TWM and share your passion for the city.</h1>
                    <p className="lead">With TWM you can make money on your own terms doing what you love.</p>
                    <button onClick={() => this.props.history.push("/tourguidesignup")}>Sign up Now</button>
                </div>
            </div>
            <div className="jumbotrona">
                <div className="jumbotron2 jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/346808/pexels-photo-346808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                    <div className="container">
                        <h1 className="display-4">What is Tour With Me?</h1>
                        <p className="lead">Tour With Me is the best local tour company by locals for tourists.</p>
                        
                    </div>
                </div>
            </div>
            <div className="jumbotronb">
                <div className="jumbotron3 jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/936006/pexels-photo-936006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                    <div className="container"> 
                        <h1 className="display-4">Be a Curator of Cool Experiences.</h1>
                        <p className="lead">You will be responsibe for creating cool experiences and do the tours that you have agreed to do in a friendly manner, keeping your calendar up to date, and responding to booking requests in a timely manner.</p>
                    </div>
                </div>
            </div>
            <div className="jumbotronc">
                <div className="jumbotron4 jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                    <div className="container"> 
                        <h1 className="display-4">What Tour With Me Covers</h1>
                        <p className="lead">Tour With Me will provide marketing, admin, payment collection, and the tools you need to create an attractive profile and get you on your way to earning money as a tour guide.</p>
                        <button onClick={() => this.props.history.push("/tourguidesignup")}>Sign up Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
      
               );
    }
  }

export default BecomeATourGuide;