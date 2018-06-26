import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class Footer extends React.Component{
    
    render(){
        return (
            <footer className="bg-dark text-white mt-4">
                <div className="container-fluid py-3">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Sitemap</h5></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <nav className="nav flex-column">
                                <a className="nav-link active" href="/Home">Home</a>
                                <a className="nav-link" href="/touristsignup">Sign Up as a tourist</a>
                                <a className="nav-link" href="/exploretourguides">Explore Tour Guides</a>
                                <a className="nav-link" href="/becomeatourguide">Become A Tour Guide</a>
                            </nav>
                            <span className="small" href="#"><br /> Privacy Policy</span></div>
                        <span className="join-list">
                            <div className="col-md-3"></div>
                            <div className="input-group mb-3">
                                <div>
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-secondary" type="button"><a className="nav-link" href="/ThankYouMailingList">Join Our Mailing List</a></button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="email address" aria-label="" aria-describedby="basic-addon1" />
                                    <p className="list-text">Sign up to get the latest news and up to date information.</p>
                                </div>
                            </div>
                        </span>
                        <span className="copyright"><div className="col-md-3 text-right small align-self-end">©2018 Tour With Me Miami, Inc.</div></span>
                    </div>
                </div>
            </footer>
                );
    }
}

  

export default Footer;