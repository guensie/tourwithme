import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-regular';
import { faStar as solidFaStar, faStarHalf } from '@fortawesome/fontawesome-free-solid';

const Stars = ({ rating, jobCount }) => {
    const whole = Math.floor(rating);
    var decimalPart = rating - whole;
    let lis = [];
    for (let i = 0; i < whole; i++) lis.push(<FontAwesomeIcon icon={solidFaStar} />);
    return (<div className="starrating">
        {
            (lis.length > 0) ? lis : <small>No rating available</small>
        }
        {
            (decimalPart > 0) ? <FontAwesomeIcon icon={faStarHalf} /> : ''
        }
        {
            (jobCount) ? 
                <span className="jobs">in {jobCount} jobs completed</span>
            :
                ''
        }
    </div>);
};

Stars.propTypes = {
    rating: PropTypes.number.isRequired,
    jobCount: PropTypes.number
};


export default Stars;
