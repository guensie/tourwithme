import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-regular';
import { faStar as solidFaStar, faStarHalf } from '@fortawesome/fontawesome-free-solid';
import Stars from './Stars';

class TourGuideCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //in

        };
    }
    render() {

        return (
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={this.props.image} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="oneliner">{this.props.oneliner} </h5>
                    <h3 className="cardHeading">{this.props.name} </h3>
                    <p className="card-text">{this.props.tour_summary} </p>
                    <p><Stars rating={this.props.rating} /></p>
                    <p className="booknow">
                        <Link className="btn btn-info" to={"/tourguideprofilepage/" + this.props.id} >Book Me </Link>
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
    name: PropTypes.string,
    oneliner: PropTypes.string,
    aboutme: PropTypes.string,
    rating: PropTypes.number.isRequired,
    jobCount: PropTypes.number
};





export default withRouter(TourGuideCard);
