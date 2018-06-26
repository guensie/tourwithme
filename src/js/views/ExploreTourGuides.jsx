import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
import TourGuideCard from '../components/TourGuideCard';
import NavBar from '../components/NavBar';
import Filter from '../components/Filter';
import Footer from '../components/Footer';


// import ExploreTourGuides from '/exploretourguides.html';

export class ExploreTourGuides extends React.Component {
  render() {
    return (
        <div className="exploreTourGuides">
            <div>
                <NavBar activeNavbar="EXPLORE" />
            </div>    
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/952842/pexels-photo-952842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                <div className="containertwm">
                    <h1 className="display-4">Tour With Me</h1>
                    <p className="lead">Because friends dont let friends take corporate tours</p>
                </div>
            </div>
            <div>
                <Filter />
            </div>
                
            <div className="row mx-auto">
                
                
                <div className="col-4"><TourGuideCard img="https://images.pexels.com/photos/1022473/pexels-photo-1022473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></div>
                <div className="col-4"><TourGuideCard img="https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></div>
                <div className="col-4"><TourGuideCard img="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></div>
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

export default ExploreTourGuides;