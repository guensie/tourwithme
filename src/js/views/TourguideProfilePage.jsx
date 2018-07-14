import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
import MyStore from '../stores/MyStore';
import TourGuideCard from '../components/TourGuideCard';
import Tour from '../components/Tour';
import Footer from '../components/Footer.jsx';
import MyAction from "../actions/MyActions.jsx";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';

export class TourguideProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            tourguides: [
                { id: '', name: 'john', title: 'Learn to Cook', oneliner: 'Learn to cook traditional Miami dishes at my restaurant ', aboutme: '', image: 'https://placeimg.com/640/480/people?t=1530318401281', age: '', gender: '' }
            ]
        };
        this.state = {
            showModal: false,
            tours: [
                { cost: 100, guests: 2, tour_summary: 'Learn to cook traditional Miami dishes at my restaurant ', category: '', image: 'https://placeimg.com/640/480/people?t=1530318401281' }
            ]
        };


        // this.bindStore(MyStore, () => {
        // this.setState({
        //             tourguides: MyStore.getTourGuides(),
        //             tours: MyStore.getTours()

        //       });

        //  });
    }


    componentDidMount() {
        this.setState({
            tourguides: MyAction.oneTourGuide(),
            tours: MyStore.getTours()
        });



        let tourguides = MyStore.oneTourGuide();
        let tours = MyStore.getTours();
        let tourguideToEdit = this.setState({
            title: tourguides.title,
            // title: tours.title,
            oneliner: tourguides.oneliner,
            image: tourguides.image,
            id: tourguides.id,
            // id: tours.id,
            category: tours.category,
            gender: tourguides.gender,
            age: tourguides.age,
            guests: tours.guests,
            cost: tours.cost,
            name: tourguides.name,
            aboutme: tours.aboutme
        });
    }



    render() {
        const tours = this.state.tours.map((tours, i) => {
            return <Tour key={i} 
                                id={tours.id}
                                cost={tours.cost}
                                // title={tours.title} 
                                guests={tours.guests} 
                                image={tours.image}
                                category={tours.category}
                                tour_summary={tours.tour_summary}
                                onDelete={(id) => this.deleteTour(id)}/>;
        });
        return (
            <div>
            <div className="TourguideProfilePage">
                <div>
                    <NavBar activeNavbar="BECOME"/>
                </div>
                <div className="tourguideprofilejumbotron">
                    <h1 className="display-4">{this.props.oneliner}</h1>
                    <p className="lead"><b>{this.props.name}</b></p>
                    <img className="card-img-top" id="profileImage" src={this.props.image} alt="Card image cap"></img>
                    <hr className="my-4"></hr>
                    <p><b>About Me:</b>{this.props.aboutme}</p>
                </div>
                <Tour />
                

            </div>

        
        </div>
        );
    }
}

TourguideProfilePage.propTypes = {
    image: PropTypes.string,
    // title: PropTypes.string,
    tour_summary: PropTypes.string,
    rating: PropTypes.number,
    name: PropTypes.string,
    oneliner: PropTypes.string,
    aboutme: PropTypes.string,
    cost: PropTypes.number,
    guests: PropTypes.number,
    category: PropTypes.string
};


export default TourguideProfilePage;
