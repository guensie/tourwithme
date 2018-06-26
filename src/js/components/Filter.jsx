import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';



class Filter extends React.Component{
    
    render(){
        return (
            <div className="filters">
                <span className="borderaa border-info">
                    <div className="pickADate">Pick a date
                        <input type="date" className="pick-a-date"/>
                        <select className="custom-select-guests">
                            <option value="0" className="guests-label">Guests</option>
                            <option value="1">1-2</option>
                            <option value="2">2-4</option>
                            <option value="2">4-6</option>
                            <option value="2">6+</option>
                            <option value="2">Any</option>
                        </select>
                    </div>
                </span>
                
                <select className="custom-select-length">
                    <option value="0">Tour Length</option>
                    <option value="1">1-2 hrs</option>
                    <option value="2">3-4 hrs</option>
                    <option value="2">5-6 hrs</option>
                    <option value="2">6+ hrs</option>
                    <option value="2">Any</option>
                </select>
                
                <span className="costRange">
                    <label htmlFor="customRange2" className="rangeLabel">Cost($)</label>
                    <input type="range" onChange={(e)=>document.querySelector(".custombadge").innerHTML = e.target.value}  className="custom-range" min="0" max="100" defaultValue="0" id="customRange2"></input>
                    <span className="custombadge badge badge-dark">0</span>
                </span>   
                
                
            </div>
            
            
            
                
            
            

            
        );
    }
}

  

export default Filter;