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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" id="twm" href="/home">TWM</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/exploretourguides">Explore Tour Guides <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/becomeatourguide">Become a Tour Guide</a>
                        <a className="nav-item nav-link" href="/touristsignup">Tourist Signup</a>
                        <a className="nav-item nav-link" href="/tourguideprofilepage">My Tourguide Profile</a>
                        <a className="nav-item nav-link" href="/touristprofilepage">My Tourist Profile</a>
                    </div>   
                </div>
            </nav>
            <div className="tourguideprofilejumbotron">
                <h1 className="display-4">Surfing Experience</h1>
                <p className="lead"><b>Hosted by Adam Lake</b></p>
                <img className="card-img-top" id="profileImage" src="https://expertbeacon.com/sites/default/files/advice_for_men_on_selecting_your_online_dating_profile_photo.jpg" alt="Card image cap"></img>
                <hr className="my-4"></hr>
                <p><b>About your host</b> - I was fortunate to b.e born and raised in Miami.
                   I started surfing at a very young age, and later, after realizing I wanted to share my passion for surfing with other people, 
                   I became specialized in teaching this amazing sport.</p>
            </div>
            <div className="tourguideprofilejumbotron">
                <p><b>What we will do </b> - On the day of the experience,
                   we will choose the best place to sufer according to the weather conditions of the sea and your level, 
                   then we will go to the beach and have a save and fun two (2) hour surf lesson.</p>
                <ul className="list-group">
                    <li className="list-group-item"><b>Length of tour:</b> 2 hrs </li>
                    <li className="list-group-item"><b>Language(s):</b> English, Spanish </li>
                    <li className="list-group-item"><b>Cost:</b> $15 </li>
                    <li className="list-group-item"> <b>Number of guests:</b> Six</li>
                    <li className="list-group-item"> <b>Who can come:</b> Guests ages 10 and up can attend.</li>
                    <li className="list-group-item"> <b> Upcoming Availability</b></li>
                </ul>
            </div>
            <div class="container">
                <div class="row">
                    <div class="span12">
    	               table class="table-condensed table-bordered table-striped">
                <thead>
                    <tr>
                      <th colspan="7">
                        <span class="btn-group">
                            <a class="btn"><i class="icon-chevron-left"></i></a>
                        	<a class="btn active">February 2012</a>
                        	<a class="btn"><i class="icon-chevron-right"></i></a>
                        </span>
                      </th>
                    </tr>
                    <tr>
                        <th>Su</th>
                        <th>Mo</th>
                        <th>Tu</th>
                        <th>We</th>
                        <th>Th</th>
                        <th>Fr</th>
                        <th>Sa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="muted">29</td>
                        <td class="muted">30</td>
                        <td class="muted">31</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td class="btn-primary"><strong>20</strong></td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td class="muted">1</td>
                        <td class="muted">2</td>
                        <td class="muted">3</td>
                    </tr>
                </tbody>
            </table>
            <input type="book" value="BOOK">
        </div>
	</div>
</div>

</div>
          


      
         );
    }
  }

export default TourguideProfilePage;