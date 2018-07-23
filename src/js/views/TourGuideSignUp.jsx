import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
import MyActions from '../actions/MyActions';
import MyStore from '../stores/MyStore';
// import ExploreTourGuides from '/exploretourguides.html';

export class TourGuideSignUp extends React.Component {
    // constructor() {
    //     super();
    //     this.bindStore(MyStore, () => {
    //         // console.log('the bind worked');

    //         this.props.history.push('/tourguideprofilepage/:id');
    //     });
    //     this.state = {
    //         tourguide: [],
    //         name: '',
    //         email: '',
    //         phone: '',
    //         address: '',
    //         id: '',
    //         edit_mode: false
    //     };
    // }

    // createTourguide() {
    //     let tourguide = {};
    //     tourguide.name = this.state.name;
    //     tourguide.email = this.state.email;
    //     tourguide.phone = this.state.phone;
    //     tourguide.address = this.state.address;
    //     tourguide.id = this.state.id;

    //     MyActions.createTourguide(tourguide);
    // }

    // handleChange(propertyName, event) {
    //     const tourguide = this.state.tourguide;
    //     tourguide[propertyName] = event.target.value;
    //     this.setState({ tourguide: tourguide });
    // }


    render() {
        return (
            <div className="tour-guide-signup">
            <NavBar />

            <form action="action_page.php">
                <div className="container">
                    <h1>Sign up as a Tour Guide</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="name"><b>Full Name</b></label>
                    <input type="text" placeholder="Enter Full Name" name="name" required />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required  />

                    <label htmlForfor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label htmlForfor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                    <hr></hr>

                    <p> By creating an account you agree to our <a href="/TermsAndPrivacy">Terms & Privacy</a>.</p>
                    <button onClick={() => this.props.history.push("/thankyoutourguide")} type="submit" className="registerbtn">Register</button>
                </div>

                <div className="container signin">
                    <p>Already have an account? <button onClick={() => this.props.history.push("/Login")} type="submit" className="signinbutton">Sign in</button>.</p>
                </div> 
            </form>

        </div>

        );
    }
}

export default TourGuideSignUp;
