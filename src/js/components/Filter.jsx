import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Nouislider from 'react-nouislider';


class Filter extends React.Component{
    
    render(){
        return (
            <div className="filters">
                <span className="borderaa border-info">
                    <div className="pickADate">Pick a date
                        <input type="date" className="pick-a-date"/>
                        <select className="custom-select-guests">
                            <option value="0">Guests</option>
                            <option value="1">1-2</option>
                            <option value="2">2-4</option>
                            <option value="2">4-6</option>
                            <option value="2">6+</option>
                            <option value="2">Any</option>
                        </select>
                        <select className="custom-select-length">
                            <option value="0">Tour Length</option>
                            <option value="1">1-2 hrs</option>
                            <option value="2">3-4 hrs</option>
                            <option value="2">5-6 hrs</option>
                            <option value="2">6+ hrs</option>
                            <option value="2">Any</option>
                        </select>
                    
                    Costs
                    
                        <input type="range" list="tickmarks" />
                        <datalist id="tickmarks">
                            <option value="0" label="0%" />
                            <option value="10" />
                        </datalist>
                    
                    </div>
                </span>
            </div>
            
            
            
                
            
            

            
        );
    }
}

  

export default Filter;