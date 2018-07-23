import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ExploreTourGuides } from '../views/ExploreTourGuides.jsx';


class Filter extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <div className="filters">
                <h2 className="categoryHeading"> Choose a Category </h2>
                 <button type="button" className="btn" id="clear" onClick={()=>this.props.applyFilter('all')}><b>All Tourguides</b></button>
                 <button type="button" className="btn" id="entertainment" onClick={()=>this.props.applyFilter('Entertainment')}><b>Entertainment</b></button>
                 <button type="button" className="btn" id="foodAndDrink" onClick={()=>this.props.applyFilter('Food and drink')}><b>Food & Drink</b></button>
                 <button type="button" className="btn" id="outdoors" onClick={()=>this.props.applyFilter('Outdoors')}><b>Outdoors</b></button>
                 <button type="button" className="btn" id="culture" onClick={()=>this.props.applyFilter('Culture')}><b>Culture</b></button>
                 <button type="button" className="btn" id="classes" onClick={()=>this.props.applyFilter('Classes')}><b>Classes</b></button>
            </div>



        );
    }
}



export default Filter;
