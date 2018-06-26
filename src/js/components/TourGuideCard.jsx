import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-regular';
import { faStar as solidFaStar, faStarHalf } from '@fortawesome/fontawesome-free-solid';

class TourGuideCard extends React.Component{
    constructor(){
        super();
        this.state = {
            // in
        };
    }
    render(){
        return (
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={this.props.img} alt="Card image cap"></img>
                <div className="card-body">
                    <h2 className="cardHeading">{this.props.title} Title </h2>
                    <p className="card-text">{this.props.summary} Summary explaining my tour </p>
                    <FontAwesomeIcon icon={solidFaStar} />
                    <FontAwesomeIcon icon={solidFaStar} />
                    <FontAwesomeIcon icon={solidFaStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                    <FontAwesomeIcon icon={faStar} />
                    <p className="booknow">
                        <button className="btn-info" onClick={() => this.props.history.push("/paymentportal")}>Book Me</button>
                    </p>   
                </div>
            </div>
        );
    }
}

TourGuideCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string
    // rating: PropTypes.object
};


export default withRouter(TourGuideCard);