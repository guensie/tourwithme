import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class TourguideProfilePage extends React.Component {
  render() {
    return (
        <div>
           
            <div className="TourguideProfilePage">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" id="profileImage" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/uoDvQB0/slow-motion-young-surfer-learning-how-to-surf-on-small-waves_4a2mqf8ag__S0005.jpg" alt="Card image cap"></img>
                    <div className="card-body">
                        <p className="card-text">About your host: My name is John, I am a a level 3 surfing instructor. I have been surfing for the last 25 years mainly in Miami,Florida but also all around the World. Graduated in Sport Sciences and GM of Surf Lisbon - House & School, I will make sure you have the best experience with me and my team!</p>
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">Category: Surfing Instructor  </li>
                    <li className="list-group-item">Length of tour: 1-2 hrs </li>
                    <li className="list-group-item">Language(s): English, Spanish </li>
                    <li className="list-group-item">Category: Surfing Equipment and Transportation included  </li>
                    <li className="list-group-item">Gender: Male </li>
                    <li className="list-group-item">Cost: $15 </li>
                    <li className="list-group-item"> Number of guests: Six</li>
                    <li className="list-group-item"> Who can come: Guests ages 10 and up can attend.</li>
                    <li className="list-group-item"> Upcoming Availability</li>
                </ul>
                <div className="month">      
                </div>
                <ul className="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>
                <ul className="days">  
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li><span className="active">10</span></li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                </ul>
                <li><button type="button" className="btn btn-info">BOOK ME</button></li>  
            </div> 
        </div>
      

         );
    }
  }

export default TourguideProfilePage;