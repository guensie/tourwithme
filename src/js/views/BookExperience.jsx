import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class BookExperience extends React.Component {
  render() {
    return (
        <div className="BookExperience">
            <NavBar />
            
            <h1>Shopping Cart</h1>

            <div class="shopping-cart">

                <div class="column-labels">
                    <label class="product-image">Image</label>
                    <label class="product-details">Experience</label>
                    <label class="product-price">Price</label>
                    <label class="product-quantity">Quantity</label>
                    <label class="product-removal">Remove</label>
                    <label class="product-line-price">Total</label>
                </div>

                <div class="product">
                    <div class="product-image">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.Ef0M_LMLN8gfhRuFSinJVwHaE8&pid=15.1&P=0&w=239&h=160"></img>
                    </div>
                    <div class="product-details">
                        <div class="product-title">Surfing Experience</div>
                        <p class="product-description">.</p>
                    </div>
                    <div class="product-price">15.00</div>
                    <div class="product-quantity">
                        <input type="number" value="1" min="1"></input>
                    </div>
                    <div class="product-removal">
                        <button class="remove-product"> Remove </button>
                    </div>
                    <div class="product-line-price">15.00</div>
                </div>

                <div class="product">
                    <div class="product-image">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.1qIrr18ZZUQdPvLPF1f2UgHaE8&pid=15.1&P=0&w=253&h=169"></img>
                    </div>
                    <div class="product-details">
                        <div class="product-title">Surfing Experience</div>
                    </div>
                    <div class="product-price">30.00</div>
                    <div class="product-quantity">
                        <input type="number" value="1" min="1"></input>
                    </div>
                    <div class="product-removal">
                        <button class="remove-product">Remove</button>
                    </div>
                </div>
                <div class="total">
                    <div class="total-item">
                        <label>Subtotal</label>
                        <div class="total-value" id="cart-subtotal">15.00</div>
                    </div>
                    <div class="total-item">
                        <label>Tax (5%)</label>
                        <div class="total-value" id="cart-tax">0.75</div>
                    </div>
                    <div class="total-item">
                        <label>Shipping</label>
                        <div class="total-value" id="cart-shipping">15.00</div>
                    </div>
                    <div class="total-item totals-item-total">
                        <label>Grand Total</label>
                        <div class="total-value" id="cart-total">30.00</div>
                    </div>
                </div> 
                <button class="checkout">Checkout</button>

            </div>
        </div>
      
          );
  }
}

export default BookExperience();
