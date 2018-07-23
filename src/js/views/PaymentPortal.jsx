import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class PaymentPortal extends React.Component {
    render() {
        return (
            <div>
            <NavBar />
            
            <div className="row">    
                <div className="col-75">
                    <div className="container">
                        <form action="/action_page.php">

                            <div className="row">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com"></input>
                                    <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                                    <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="New York"></input>
                                      <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="NY"></input>
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="10001"></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label htmlFor="fname">Accepted Cards</label>
                                    <div className="icon-container">
                                        <i className="fa fa-cc-visa" style={{ color:"navy"}}></i>
                                        <i className="fa fa-cc-amex" style={{ color:"blue"}}></i>
                                        <i className="fa fa-cc-mastercard" style={{ color:"red"}}></i>
                                        <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
                                    </div>
                                    <label htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                                    <label htmlFor="ccnum">Credit card number</label>
                                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                                    <label htmlFor="expmonth">Exp Month</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="expyear">Exp Year</label>
                                            <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                            </label>
                        </form>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                          Continue to checkout
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                               <p> Are you sure you want to book Explore the Best Parks Miami Has To Offer?</p>
                               <p> Category: Outdoors</p>
                               <p> Tour Guide : Jamie Smithers</p>
                               <p> Date: July 27, 2018</p>
                               <p> Number of guest per tour: 1</p>
                               <p> Cost: $45.00</p>
                               <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary">Yes, continue</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-25">
                    <div className="container">
                        <h4>Cart 
                            <span className="price" style={{color:"black"}}>
                                <i className="fa fa-shopping-cart"></i> 
                                <b>1</b>
                            </span>
                        </h4>
                        <p><a href="#">Tour</a> <span className="price">$45</span></p>
                        <hr></hr>
                        <p>Total <span className="price" style={{color:"black"}}><b>$45</b></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

      


        );
    }
}

export default PaymentPortal;
