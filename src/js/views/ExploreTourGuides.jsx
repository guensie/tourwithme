import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MyStore from '../stores/MyStore';
import { Link } from "react-router-dom";
//include images into your bundle
import TourGuideCard from '../components/TourGuideCard';
import ButtonComponent from '../components/ButtonComponent.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Filter from '../components/Filter.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export default class TourGuides extends Flux.View {
    constructor(){
        super();
        this.state = {
            showModal: false  ,
            tourguides: [
                {id: '1', title: 'Learn to Cook', tour_summary: 'Learn to cook traditional Miami dishes at my restaurant ' ,image: 'https://placeimg.com/640/480/people?t=1530318401281', category: '', age: '', guests: '', cost: '', gender: '' },
                {id: '2', title: 'Photography Lesson', tour_summary: 'Walk around Miamis most scenic spots and learn how to capture them with a camera' ,image: 'https://placeimg.com/640/480/people?t=1530318434719', category: '', age: '', guests: '', cost: '', gender: ''},
                {id: '3', title: 'Cigar Factory Tour', tour_summary: 'Tour a cuban style cigar factory with me and the owner of Miami Cigars ' ,image: 'https://randomuser.me/api/portraits/men/1.jpg', category: '', age: '', guests: '', cost: '', gender: '' }
                ]
        };
        this.bindStore(MyStore, () => {
            this.setState({
                tourguides: MyStore.getTourGuides()
            });
            
        });
    }
    
    
    componentDidMount(){
        this.setState({
            tourguides: MyStore.getTourGuides()
        });
        
        
        
        let tourguides = MyStore.getTourGuides();
        let tourguideToEdit = this.setState({
            title: tourguides.title,
            oneliner: tourguides.oneliner,
            image: tourguides.image,
            id: tourguides.id,
            category: tourguides.category,
            gender: tourguides.gender,
            age: tourguides.age,
            guests: tourguides.guests,
            cost: tourguides.cost,
            name: tourguides.name
        }
            );
    }

    // deleteTourGuide(id){
    //     MyAction.deleteTourGuide(id);
    // }
        
    // editContact(id){
    //     MyAction.editTourGuide(id);  
    // }
    

  
  render() {
    
    const tourguidesInHTML = this.state.tourguides.map((tourguide, i) =>{
            return <TourGuideCard key={i} 
                                id={tourguide.id}
                                title={tourguide.title} 
                                oneliner={tourguide.oneliner} 
                                image={tourguide.image}
                                category={tourguide.category}
                                gender={tourguide.gender}
                                age={tourguide.age}
                                guests={tourguide.guests}
                                cost={tourguide.cost}
                                name={tourguide.name}
                                onDelete={(id) => this.deleteTourGuide(id)}/>;
    });
    return (
        <div className="homepage" id='app'>
            <div className="navbar">
                <NavBar activeNavbar="ExploreTourGuides" />
            </div>
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/952842/pexels-photo-952842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                <div className="containertwm">
                    <h1 className="display-4">Tour With Me</h1>
                    <p className="lead">Because friends dont let friends take corporate tours</p>
                </div>
            </div>
            <Filter />
            <div className="card-columns row mx-auto">
                {tourguidesInHTML}
            </div>   
            <Footer />
        </div>
    
    );
    
}}


// ReactDOM.render(
//     <Home
//     />,
//     document.querySelector('#app')
// );


