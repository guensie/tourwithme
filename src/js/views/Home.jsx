import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import TourGuideCard from '../components/TourGuideCard';
import ButtonComponent from '../components/ButtonComponent.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class App extends React.Component {
  render() {
    return (
        <div className="homepage" id='app'>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/952842/pexels-photo-952842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                <div className="container">
                    <h1 className="display-4">Tour With Me</h1>
                    <p className="lead">Because friends dont let friends take corporate tours</p>
                </div>
            </div>
            <div className="card-colums row mx-auto">
                <div className="col-4"><TourGuideCard img="https://images.pexels.com/photos/1022473/pexels-photo-1022473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></div>
                <div className="col-4"><TourGuideCard /></div>
                <div className="col-4"><TourGuideCard /></div>
                <div className="col-4"><TourGuideCard /></div>
                <div className="col-4"><TourGuideCard /></div>
                <div className="col-4"><TourGuideCard /></div>
                <div className="col-4"><TourGuideCard /></div>
                <div className="col-4"><TourGuideCard /></div>
                <div className="col-4"><TourGuideCard /></div>
            </div>
            <Footer />
        </div>
    
    );
  }
}

export default App; 

// ReactDOM.render(
//     <Home
//     />,
//     document.querySelector('#app')
// );


