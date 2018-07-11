import React from 'react';
import Flux from '@4geeksacademy/react-flux-dash';

class MyStore extends Flux.Store{
    
    constructor(){
        super();
        this.state = {
    
            tourguides: [] ,
            edit_mode: false
        };
    
    }
    
    _setTourGuides(updatedTourGuides){
        
        
        this.setStoreState({
            tourguides: updatedTourGuides
        }). emit('change');
    }
    
    getTourGuides(){
        return this.state.tourguides;
    }
}
    
    
export default new MyStore();