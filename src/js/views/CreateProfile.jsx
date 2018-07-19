import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TourGuideCard from '../components/TourGuideCard';
import MyStore from '../stores/MyStore';
import { Link } from "react-router-dom";
import ButtonComponent from '../components/ButtonComponent.jsx';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TourGuideActions from '../actions/MyActions.jsx';

export default class TourGuides extends Flux.View {
    constructor(){
        super();
        this.bindStore(MyStore, () => {
            // console.log('the bind worked');
            
            this.props.history.push('/tourguides');
        });
        this.state={
            tourguides: [],
            image: '',
            name:'',
            tour_summary: '',
            category: '',
            tour_length: '',
            id: '',
            gender: '',
            cost: '',
            guests: '',
            edit_mode: false
        };
    }
    componentDidMount(){
        this.setState({
            tourguides: MyStore.getTourGuides()
        });
       if (this.props.match.params.id){
            let tourguides =  MyStore.getTourGuides();
            for (let tourguide_edit = 0; tourguide_edit < tourguides.length; tourguide_edit++) {
                if (tourguides[tourguide_edit].id == this.props.match.params.id)
                    this.setState({
                        edit_mode: true,
                        name: tourguides[tourguide_edit].name,
                        tour_summary: tourguides[tourguide_edit].tour_summary,
                        category: tourguides[tourguide_edit].category,
                        tour_length: tourguides[tourguide_edit].tour_length,
                        id: tourguides[tourguide_edit].id,
                        gender: tourguides[tourguide_edit].gender,
                        cost: tourguides[tourguide_edit].cost,
                        guests: tourguides[tourguide_edit].guests
                    });
            }
       } 
    }
           
    
        
    addTourGuide(){
        let tourguide = {};
        tourguide.name = this.state.full_name;
        tourguide.tour_summary = this.state.tour_summary;
        tourguide.category = this.state.category;
        tourguide.tour_length = this.state.tour_length; 
        tourguide.id = this.state.id;
        tourguide.gender = this.state.gender,
        tourguide.cost = this.state.cost,
        tourguide.guests = this.state.guests,
        TourGuideActions.addTourGuide(tourguide);
    }
    
    editTourGuide(){
        let tourguide = {};
        tourguide.name = this.state.full_name;
        tourguide.tour_summary = this.state.tour_summary;
        tourguide.category = this.state.category;
        tourguide.tour_length = this.state.tour_length; 
        tourguide.id = this.state.id;
        tourguide.gender = this.state.gender,
        tourguide.cost = this.state.cost,
        tourguide.guests = this.state.guests,
        TourGuideActions.addTourGuide(tourguide);
    }
    
    
   
    handleChange(propertyName, event) {
    const tourguide = this.state.tourguide;
    tourguide[propertyName] = event.target.value;
    this.setState({ tourguide: tourguide });
    }
    
    render() {
        return (
            <div className="container">
            this is the tourguide profile page 
            </div>
        );
    }
}