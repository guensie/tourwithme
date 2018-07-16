import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class Filter extends React.Component {
    guestFilter() {

    }
    render() {
        return (
            <div className="filters">
                <h2 className="categoryHeading"> Choose a Category </h2>
                 <button type="button" className="btn" id="entertainment" onClick={()=>this.guestFilter()}>Entertainment</button>
                 <button type="button" className="btn" id="foodAndDrink" onClick={()=>this.guestFilter()}>Food & Drink</button>
                 <button type="button" className="btn" id="outdoors" onClick={()=>this.guestFilter()}>Outdoors</button>
                 <button type="button" className="btn" id="culture" onClick={()=>this.guestFilter()}>Culture</button>
                 <button type="button" className="btn" id="classes" onClick={()=>this.guestFilter()}>Classes</button>
            </div>



        );
    }
}



export default Filter;
