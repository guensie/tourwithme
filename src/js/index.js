//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/fontawesome-free-solid';
// import { far } from '@fortawesome/fontawesome-free-regular';
// // import { fab } from '@fortawesome/fontawesome-free-brands';
// library.add(fas, far);

//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';
import '../styles/filter.scss';
import '../styles/_home.scss';
import '../styles/_becomeatourguide.scss';
import '../styles/_exploretourguides.scss';
import '../styles/_footer.scss';
import '../styles/_touristsignup.scss';
import '../styles/_tourguidesignup.scss';
import '../styles/_termsandprivacy.scss';
import '../styles/_thankyoumailinglist.scss';
import '../styles/_paymentportal.scss';
import '../styles/tourguideprofilepage.scss';
import '../styles/touristprofilepage.scss';



//import your own components  
import Layout from './Layout.jsx';
import { App } from './views/Home.jsx';
import { ExploreTourGuides } from './views/ExploreTourGuides.jsx';




//render your react application


import { TouristSignUp } from './views/TouristSignUp.jsx';
import { TourGuideSignUp } from './views/TourGuideSignUp.jsx';
import { TouristProfilePage } from './views/TouristProfilePage.jsx';
import { TourguideProfilePage } from './views/TourguideProfilePage.jsx';
import { TermsAndPrivacy } from './views/TermsAndPrivacy.jsx';
import { ThankYouMailingList } from './views/ThankYouMailingList.jsx';
import { PaymentPortal } from './views/PaymentPortal.jsx';
import { TourGuides } from './views/TourGuides.jsx';
import { CreateProfile } from './views/CreateProfile.jsx';
import MyAction from "./actions/MyActions.jsx";
import TourActions from "./actions/TourActions.jsx";


ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);
