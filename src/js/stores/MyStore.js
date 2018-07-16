import React from 'react';
import Flux from '@4geeksacademy/react-flux-dash';

class MyStore extends Flux.Store {

    constructor() {
        super();
        this.state = {
            tours: [],
            tourguides: [],
            edit_mode: false
        };

    }

    _setTourGuides(updatedTourGuides) {
        this.setStoreState({
            tourguides: updatedTourGuides
        }).emit('change');
    }
    _setTours(updatedTours) {


        this.setStoreState({
            tours: updatedTours
        }).emit('change');
    }


    getTourGuides() {
        return this.state.tourguides;
    }
    getTours() {
        return this.state.tours;
    }
}


export default new MyStore();
