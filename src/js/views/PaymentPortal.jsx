import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class PaymentPortal extends React.Component {
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
            <form className="needs-validation" novalidate>
                <div className="form-row">
                    <div className="col-md-4 mb-3">      
                        <label for="validationCustom01">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" required></input>
                        <div className="valid-feedback">
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required></input>
                        <div className="valid-feedback">
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required></input>
                            <div className="invalid-feedback">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom03">City</label>
                        <input type="text" className="form-control" id="validationCustom03" placeholder="City" required></input>
                        <div className="invalid-feedback">
                        </div>    
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom04">State</label>
                        <input type="text" className="form-control" id="validationCustom04" placeholder="State" required></input>
                        <div className="invalid-feedback">
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationCustom05">Zip</label>
                        <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required></input>
                        <div className="invalid-feedback">
                        </div>
                    </div>
                </div>   
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                        <label className="form-check-label" for="invalidCheck">
                        </label>
                        <div className="invalid-feedback">
                        </div>
                    </div>
                </div>
            </form>
            <script>
             (function() {
              window.addEventListener('load', function() {
                var forms = document.getElementsByClassName('needs-validation');
                var validation = Array.prototype.filter.call(forms, function(form) {
                  form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                  }, false);
                });
              }, false)
            })();
            </script>
            <div className="panel panel-default credit-card-box">
                <div className="panel-heading display-table" >
                    <div className="row display-tr" >
                        <h3 className="panel-title display-td" >Payment Details</h3>
                        <div className="display-td" >                            
                            <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"></img>
                        </div>
                    </div>                    
                </div>
                <div className="panel-body">
                    <form role="form" id="payment-form" method="POST" action="javascript:void(0);">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label for="cardNumber">CARD NUMBER</label>
                                    <div className="input-group">
                                        <input 
                                            type="tel"
                                            className="form-control"
                                            name="cardNumber"
                                            placeholder="Valid Card Number"   
                                            autocomplete="cc-number"
                                            require autofocus 
                                        />
                                        <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                                    </div>
                                </div>                            
                            </div>     
                        </div>
                        <div className="row">
                            <div className="col-xs-7 col-md-7">
                                <div className="form-group">
                                    <label for="cardExpiry"><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                                    <input 
                                        type="telephone" 
                                        className="form-control" 
                                        name="cardExpiry"
                                        placeholder="MM / YY"
                                        autocomplete="cc-exp"
                                        required 
                                    />
                                </div>
                            </div>
                            <div className="col-xs-5 col-md-5 pull-right">
                                <div className="form-group">
                                    <label for="cardCVC">CV CODE</label>
                                    <input 
                                        type="telephone" 
                                        className="form-control"
                                        name="cardCVC"
                                        placeholder="CVC"
                                        autocomplete="cc-csc"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label for="couponCode">COUPON CODE</label>
                                    <input type="text" className="form-control" name="couponCode" />
                                </div>
                            </div>                        
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <button className="subscribe btn btn-success btn-lg btn-block" type="button">BOOK EXPERIENCE</button>
                            </div>
                        </div>
                        <div className="row" style="display:none;">
                            <div className="col-xs-12">
                                <p className="payment-errors"></p>   
                            </div>
                        </div>
                    </form>
                </div>
            </div>            
        </div>


         );
    }
  }

export default PaymentPortal;