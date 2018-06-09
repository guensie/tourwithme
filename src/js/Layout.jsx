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

export default class Layout extends Flux.View {
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
                            <Route exact path="/tourguideprofilepage" component={TourguideProfilePage} />
                            <Route exact path="/TermsAndPrivacy" component={TermsAndPrivacy} />
                            <Route exact path="/ThankYouMailingList" component={ThankYouMailingList} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

