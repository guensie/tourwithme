import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MyStore from '../stores/MyStore';
import MyActions from '../actions/MyActions';
import { Link } from "react-router-dom";
//include images into your bundle
import TourGuideCard from '../components/TourGuideCard';
// import ButtonComponent from '../components/ButtonComponent.jsx';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export default class TourGuides extends Flux.View {
    constructor() {
        super();
        this.state = {
            showModal: false,
            tourguides: [
                { id: '', name: 'john', title: 'Learn to Cook', oneliner: 'Learn to cook traditional Miami dishes at my restaurant ', image: 'https://placeimg.com/640/480/people?t=1530318401281', category: '', age: '', guests: '', cost: '', gender: '' },
                { id: '', name: 'jane', title: 'Photography Lesson', oneliner: 'Walk around Miamis most scenic spots and learn how to capture them with a camera', image: 'https://placeimg.com/640/480/people?t=1530318434719', category: '', age: '', guests: '', cost: '', gender: '' },
                { id: '', name: 'lacy', title: 'Cigar Factory Tour', oneliner: 'Tour a cuban style cigar factory with me and the owner of Miami Cigars ', image: 'https://randomuser.me/api/portraits/men/1.jpg', category: '', age: '', guests: '', cost: '', gender: '' }
            ]
        };
        // Telling the store to let me know when something changes
        this.bindStore(MyStore, () => {
            // Execute this, when the stores emits!
            this.setState({
                tourguides: MyStore.getTourGuides()
            });

        });
    }

    /**
     *  This is call when the component its showing
     */
    componentDidMount() {
        this.setState({
            tourguides: MyStore.getTourGuides()
        });

        MyActions.allTourGuides();

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
        });
    }

    goToTourGuideProfile(id) {

        MyActions.oneTourGuide(id);
        //<button className="btn-info" onClick={() => this.props.history.push("/tourguideprofilepage")}>Book Me</button>
    }

    // deleteTourGuide(id){
    //     MyAction.deleteTourGuide(id);
    // }

    // editContact(id){
    //     MyAction.editTourGuide(id);  
    // }

    render() {

        const tourguidesInHTML = this.state.tourguides.map((tourguide, i) => {
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
                                onDelete={(id) => this.deleteTourGuide(id)} 
                                onButtonClick={() => this.goToTourGuideProfile()} 
                                />;
        });
        return (
            <div className="homepage" id='app'>
            <div className="navbar">
                <NavBar activeNavbar="TWM" />
            </div>
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "url('https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg?auto=compress&cs=tinysrgb&h=350')"}}>
                <div className="containertwm">
                    <h1 className="white display-4">Tour With Me</h1>
                    <p className="white lead">Because friends dont let friends take corporate tours</p>
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


// ReactDOM.render(
//     <Home
//     />,
//     document.querySelector('#app')
// );
