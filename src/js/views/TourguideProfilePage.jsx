import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
import MyStore from '../stores/MyStore';
import TourGuideCard from '../components/TourGuideCard';
import Tour from '../components/Tour';
import Footer from '../components/Footer.jsx';
import MyAction from "../actions/MyActions.jsx";
import TourActions from "../actions/TourActions.jsx";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

