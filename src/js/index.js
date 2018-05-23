//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Layout from './Layout.jsx';
import { App } from './views/Home.jsx';
import { ExploreTourGuides } from './views/ExploreTourGuides.jsx';

// import { ExploreTourGuides } from './views/ExploreTourGuides.jsx';
//render your react application


import { TouristSignUp } from './views/TouristSignUp.jsx';
import { TourguideSignUp } from './views/TourguideSignUp.jsx';
import { TouristProfilePage } from './views/TouristProfilePage.jsx';
import { TourguideProfilePage } from './views/TourguideProfilePage.jsx';

ReactDOM.render(
    <Layout />,
       document.querySelector('#app')
);
//render your react application
// ReactDOM.render(
//     <ExploreTourGuides />,
//     <TouristSignUp />,
//     <TourguideSignUp />,
//     <TouristProfilePage />,
//     <TourguideProfilePage />,
    
    

