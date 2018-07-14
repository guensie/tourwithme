import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class Tour extends React.Component{
    constructor(){
        super();
        this.state = {
            // in
        };
    }
    render(){
        return (


            <div className="tour-jumbotron">
                <h2 className="tourtitle"> My Tour </h2>
                
                <ul className="list-group">
                    <li className="list-group-item"><b>What we will do:</b>{this.props.tour_summary}</li>
                    <li className="list-group-item"><b>Language(s):</b> English, Spanish </li>
                    <li className="list-group-item"><b>Cost:</b> {this.props.cost} </li>
                    <li className="list-group-item"> <b>Number of guests:</b> {this.props.guests}</li>
                    <li className="list-group-item"> <b> Upcoming Availability</b></li>
                </ul>

                <li><button type="button" className="btn btn-info"onClick={() => this.props.history.push("/PaymentPortal")}>BOOK ME</button></li>  
            </div>
               );
    }  
}

Tour.propTypes = {
    tour_summary: PropTypes.string,
    cost: PropTypes.string,
    guests: PropTypes.string,
    category: PropTypes.number
    // title: PropTypes.title
};


export default withRouter(Tour);
        