import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import TourGuideCard from '../components/TourGuideCard';
// import Modal from '../components/Modal';
// import avatar1 from '../../img/user_1.jpg';
// import TourGuideActions from '../actions/MyAction';
import MyStore from '../stores/MyStore';
// import MyAction from '../actions/MyAction';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default class TourGuides extends Flux.View {
    constructor(){
        super();
        this.state = {
            showModal: false  ,
            tourguides: [
                {id: '1', name:'john', title: 'Learn to Cook', oneliner: 'Learn to cook traditional Miami dishes at my restaurant ' ,image: 'https://placeimg.com/640/480/people?t=1530318401281', category: '', age: '', guests: '', cost: '', gender: '' },
                {id: '2', name:'jane', title: 'Photography Lesson', oneliner: 'Walk around Miamis most scenic spots and learn how to capture them with a camera' ,image: 'https://placeimg.com/640/480/people?t=1530318434719', category: '', age: '', guests: '', cost: '', gender: '' },
                {id: '3', name:'jim', title: 'Cigar Factory Tour', oneliner: 'Tour a cuban style cigar factory with me and the owner of Miami Cigars ' ,image: 'https://randomuser.me/api/portraits/men/1.jpg', category: '', age: '', guests: '', cost: '', gender: '' }
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
                    <NavBar activeNavbar="TWM" />
                </div>
                <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/952842/pexels-photo-952842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
                    <div className="containertwm">
                        <h1 className="display-4">Tour With Me</h1>
                        <p className="lead">Because friends dont let friends take corporate tours</p>
                    </div>
                </div>
                <div className="card-colums row mx-auto">
                    {tourguidesInHTML}
                </div>   
                <Footer />
            </div>
    
    );
  }
}
