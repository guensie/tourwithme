import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home.jsx";
import Product from "./views/Product.jsx";
import BecomeATourGuide from "./views/BecomeATourGuide.jsx";
import ExploreTourGuides from "./views/ExploreTourGuides.jsx";
import { TouristSignUp } from './views/TouristSignUp.jsx';
import { TourGuideSignUp } from './views/TourGuideSignUp.jsx';
import { TouristProfilePage } from './views/TouristProfilePage.jsx';
import { TourguideProfilePage } from './views/TourguideProfilePage.jsx';
import { TermsAndPrivacy } from './views/TermsAndPrivacy.jsx';
import { ThankYouMailingList } from './views/ThankYouMailingList.jsx';
import { PaymentPortal } from './views/PaymentPortal.jsx';
import TourGuides from './views/TourGuides.jsx';
import MyAction from "./actions/MyActions.jsx";
import CreateProfile from "./views/CreateProfile.jsx";
import TourActions from "./actions/TourActions.jsx";

                            

export default class Layout extends Flux.View {
    constructor() {
        super();
        // MyAction.allTourGuides(); 
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/exploretourguides" component={ExploreTourGuides} />
                            <Route exact path="/becomeatourguide" component={BecomeATourGuide} />
                            <Route exact path="/touristsignup" component={TouristSignUp} />
                            <Route exact path="/tourguidesignup" component={TourGuideSignUp} />
                            <Route exact path="/touristprofilepage" component={TouristProfilePage} />
                            <Route exact path="/tourguideprofilepage/:id" component={TourguideProfilePage} />
                            <Route exact path="/TermsAndPrivacy" component={TermsAndPrivacy} />
                            <Route exact path="/ThankYouMailingList" component={ThankYouMailingList} />
                            <Route exact path="/PaymentPortal" component={PaymentPortal} />
                            
                            <Route exact path="/edit/:id" component={CreateProfile} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
