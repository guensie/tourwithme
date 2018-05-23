import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class App extends React.Component {
  render() {
    return (
        <div className="homepage" id='app'>
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
                
                <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/952842/pexels-photo-952842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                    <div className="container">
                        <h1 className="display-4">Tour With Me</h1>
                        <p className="lead">Because friends dont let friends take corporate tours</p>
                    </div>
                </div>
                <p className="spotlight" style={{backgroundImage: "url('https://images.pexels.com/photos/572487/pexels-photo-572487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}> Tourguides in the Spotlight</p>
                <div className="row mx-auto">
                    <div className="col-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src="https://images.pexels.com/photos/669010/pexels-photo-669010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
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
                            <img className="card-img-top" src="https://images.pexels.com/photos/1013326/pexels-photo-1013326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text">Spend a day with me in Miamis most artistic town...Wynwood.I will show you all my favorite spots. </p>
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
                            <img className="card-img-top" src="https://images.pexels.com/photos/835615/pexels-photo-835615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Card image cap"></img>
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
                            <img className="card-img-top" src="https://images.pexels.com/photos/821069/pexels-photo-821069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"></img>
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
                                <span className="fa fa-star checked"></span>
                                <p className="booknow">
                                    <button type="button" className="btn btn-primary">Book Me </button>
                                </p>   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-auto" id="thirdrow">
                    <div className="col-4">
                        <div className="card" style={{width: "18rem"}}>
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


