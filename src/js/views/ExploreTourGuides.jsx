import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class ExploreTourGuides extends React.Component {
  render() {
    return (
        <div className="exploreTourGuides">
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
    
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/952842/pexels-photo-952842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                <div className="container">
                    <h1 className="display-4">Tour With Me</h1>
                    <p className="lead">Because friends dont let friends take corporate tours</p>
                </div>
            </div>
        
            <div className="dropdown">
                <button className="btn btn-info btn-lg btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter Tour Guides
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Dates</a>
                    <a className="dropdown-item" href="#">Category</a>
                    <a className="dropdown-item" href="#">Price</a>
                    <a className="dropdown-item" href="#">Gender</a>
                    <a className="dropdown-item" href="#">Age</a>
                    <a className="dropdown-item" href="#"># of guests</a>
                    <a className="dropdown-item" href="#">length of tour</a>
                </div>
            </div>
        
            <div className="row mx-auto">
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/108148/pexels-photo-108148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">Come with me on a tour of Miamis most scenic locations & learn how to photograph them.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me</button>
                            </p>    
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/1022473/pexels-photo-1022473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">Spend a day with me in Miamis most artistic town...Wynwood.I will show you all my favorite spots. </p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me</button>
                            </p>   
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/892699/pexels-photo-892699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">If you are a beginner surfer,the waves of Miami beach are the perfect place to start learning.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me</button>
                            </p>   
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row mx-auto" id="secondrow">
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/157622/woman-bench-stand-by-blonde-157622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me</button>
                            </p>   
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/1004799/pexels-photo-1004799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me</button>
                            </p>   
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me </button>
                            </p>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-auto" id="thirdrow">
                <div className="col-4">
                    <div className="card" style={{width: "18rem;"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me </button>
                            </p>   
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/681294/pexels-photo-681294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me</button>
                            </p>   
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://images.pexels.com/photos/1019413/pexels-photo-1019413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <p className="booknow">
                                <button type="button" className="btn btn-primary">Book Me</button>
                            </p>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

         );
    }
  }

export default ExploreTourGuides;