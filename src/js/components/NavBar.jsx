import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends React.Component{
    
    getActive(tag){
        if(tag === this.props.activeNavbar) {
            return " active";
        } else {
            return "";
        }
    }
    render(){
       
        
        return (
            <span className="thenavbar" role="tablist" id="navbuttons">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className={"navbar-brand"+ this.getActive("TWM")} id="twm" role="tab" href="/home">TWM</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className={"nav-item nav-link navbtn" + this.getActive("EXPLORE")} aria-pressed="true" role="button" href="/exploretourguides">Explore Tour Guides <span className="sr-only">(current)</span></a>
                            <a className={"nav-item nav-link navbtn"+ this.getActive("BECOME")} href="/becomeatourguide">Become a Tour Guide</a>
                            <div className="dropdown">
                                <button className="btn-light dropdown-toggle navbtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Signup/Login
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/touristsignup">I am a tourist </a>
                                    <a className="dropdown-item" href="/tourguidesignup">I am a tour guide </a>
                                </div>
                            </div>
                                
                            <a className={"nav-item nav-link navbtn" + this.getActive("TOURGUIDE")} href="/tourguideprofilepage">My Tourguide Profile</a>
                            <a className={"nav-item nav-link navbtn" + this.getActive("TOURIST")} href="/touristprofilepage">My Tourist Profile</a>
                               
                        </div>

                           

                    </div>
                   
                </nav>
            </span>
            
        );
    }
}


export default NavBar;