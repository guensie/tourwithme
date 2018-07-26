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
import MyActions from '../actions/MyActions';
// import ExploreTourGuides from '/exploretourguides.html';

export default class TourGuides extends Flux.View {
    constructor() {
        super();
        this.state = {
            showModal: false,
            renderedtourguides: [],
            tourguides: [
                { id: '', name: 'john', title: 'Learn to Cook', oneliner: 'Learn to cook traditional Miami dishes at my restaurant ', image: 'https://placeimg.com/640/480/people?t=1530318401281', category: '', age: '', guests: '', cost: '', gender: '' },
                { id: '', name: 'jane', title: 'Photography Lesson', oneliner: 'Walk around Miamis most scenic spots and learn how to capture them with a camera', image: 'https://placeimg.com/640/480/people?t=1530318434719', category: '', age: '', guests: '', cost: '', gender: '' },
                { id: '', name: 'lacy', title: 'Cigar Factory Tour', oneliner: 'Tour a cuban style cigar factory with me and the owner of Miami Cigars ', image: 'https://randomuser.me/api/portraits/men/1.jpg', category: '', age: '', guests: '', cost: '', gender: '' }
            ]
        };

        this.bindStore(MyStore, () => {
            this.setState({
                tourguides: MyStore.getTourGuides(),
                renderedtourguides: MyStore.getTourGuides()
            });

        });
    }

    filter(category) {
        this.setState({
            renderedtourguides: this.state.tourguides.filter(tourguide => tourguide.category == category || category == 'all')
        });
    }




    // Function that takes in filter options, that resets new array Write it Here!!!!


    componentDidMount() {
        this.setState({
            tourguides: MyStore.getTourGuides(),
            renderedtourguides: MyStore.getTourGuides()
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

    // deleteTourGuide(id){
    //     MyAction.deleteTourGuide(id);
    // }

    // editContact(id){
    //     MyAction.editTourGuide(id);  
    // }

    // foodFilter() {
    //         let tourguides = MyStore.getTourGuides();
    //         if (tourguides.category === 'Food and drink') {
    //             tourguides.push(tourguides);

    //         }
    //     }


    render() {

        const tourguidesInHTML = this.state.renderedtourguides.map((tourguide, i) => {
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
                                rating={tourguide.rating}
                                name={tourguide.name}
                                onDelete={(id) => this.deleteTourGuide(id)}/>;


        });
        return (
            <div className="exploreTourGuides" id='app'>
            <div className="navbar">
                <NavBar activeNavbar="EXPLORE" />
            </div>
            <div className="jumbotron jumbotron-fluid" style = { { backgroundImage: "url('https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg?auto=compress&cs=tinysrgb&h=350')" } }>
                <div className="containertwm">
                    <h1 className="white display-4">Tour With Me</h1>
                    <p className="white lead">Because friends dont let friends take corporate tours</p>
                </div>
            </div>
            <Filter applyFilter={(category)=>this.filter(category)} clearFilter={(category)=>this.filter(category)} />
            <div className="card-columns row mx-auto">
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
