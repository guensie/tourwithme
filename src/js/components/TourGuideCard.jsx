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
                <img className="card-img-top" src={this.props.image} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="oneliner">{this.props.oneliner} </h5>
                    <h3 className="cardHeading">{this.props.name} </h3>
                    <p className="card-text">{this.props.tour_summary} </p>
                    <FontAwesomeIcon icon={solidFaStar} />
                    <FontAwesomeIcon icon={solidFaStar} />
                    <FontAwesomeIcon icon={solidFaStar} />
                    <FontAwesomeIcon icon={faStarHalf} />
                    <FontAwesomeIcon icon={faStar} />
                    <p className="booknow">
                        <button className="btn-info" onClick={() => this.props.history.push("/tourguideprofilepage")}>Book Me</button>
                    </p>   
                </div>
            </div>
        );
    }
}

TourGuideCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    tour_summary: PropTypes.string,
    rating: PropTypes.number, 
    name: PropTypes.string,
    oneliner: PropTypes.string
};


export default withRouter(TourGuideCard);