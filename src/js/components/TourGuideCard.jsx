import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';


class TourGuideCard extends React.Component{
    
    render(){
        return (
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={this.props.img} alt="Card image cap"></img>
                <div className="card-body">
                    <p className="card-text">Spend a day with me in Miamis most artistic town...Wynwood.I will show you all my favorite spots. </p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <p className="booknow">
                        <button onClick={() => this.props.history.push("/paymentportal")}>Book Me</button>
                    </p>   
                </div> 
            </div>
        );
    }  
}
export default withRouter(TourGuideCard);