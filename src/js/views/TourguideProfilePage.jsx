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
import TourActions from "../actions/TourActions.jsx";
//include images into your bundle
import ButtonComponent from '../components/ButtonComponent.jsx';
// import ExploreTourGuides from '/exploretourguides.html';


export class TourguideProfilePage extends React.Component {
    constructor() {
        console.log('Hello this works');
        super();
        this.state = {


        };



        // this.bindStore(MyStore, () => {
        // this.setState({
        //             tourguides: MyStore.getTourGuides(),
        //             tours: MyStore.getTours()

        //       });

        //  });
    }


    componentDidMount() {

        console.log(this.props.match.params.id);
        console.log(typeof(MyAction.oneTourGuide));
        this.setState({
            tourguide: MyAction.oneTourGuide(this.props.match.params.id),
            // tour: TourActions.oneTour(this.props.match.params.id)

        });



        MyAction.oneTourGuide(this.props.match.params.id, (tourguide) => {
            this.setState({

                oneliner: tourguide.oneliner,
                image: tourguide.image,
                id: tourguide.id,
                gender: tourguide.gender,
                age: tourguide.age,
                name: tourguide.name,
                aboutme: tourguide.aboutme,
                category: tourguide.category,
                title: tourguide.title,
                tour_summary: tourguide.tour_summary,
                cost: tourguide.cost,
                guests: tourguide.guests

            });
        });
        // TourActions.oneTour(this.props.match.params.id, (tour) => {
        //     this.setState({
        //         title: tour.title,
        //         tour_summary: tour.tour_summary,
        //         category: tour.category,
        //         guests: tour.guests,
        //         cost: tour.cost

        //     });
        // });
    }
    // let tours = MyAction.getTours();

    // aboutme: tours.aboutme




    render() {
        // const tours = this.state.tours.map((tours, i) => {
        //     return <Tour key={i} 
        //                         id={tours.id}
        //                         cost={tours.cost}
        //                         // title={tours.title} 
        //                         guests={tours.guests} 
        //                         image={tours.image}
        //                         category={tours.category}
        //                         tour_summary={tours.tour_summary}
        //                         onDelete={(id) => this.deleteTour(id)}/>;
        // });
        return (
            <div>
            <div className="TourguideProfilePage">
                <div>
                    <NavBar activeNavbar="My Profile"/>
                </div>
                <div className="tourguideprofilejumbotron">
                    <h3 className="display-4" id="oneliner">{this.state.oneliner}</h3>
                    <p className="lead name"><b>{this.state.name}</b></p>
                    <img className="card-img-top" id="profileImage" src={this.state.image} alt="Card image cap"></img>
                    <hr className="my-4"></hr>
                    <p className="aboutme"><b>About Me: </b>{this.state.aboutme}</p>
                </div>
                <div className='tourDetails'>
                <div className="tour-jumbotron">
                <h2 className="tourtitle"> About My Tour </h2>
                
                <ul className="list-group" id="makecenter">
                    <li className="list-group-item"><b>{this.state.title}</b></li>
                    <li className="list-group-item" id="width50"><b>What we will do:</b>{this.state.tour_summary}</li>
                    <li className="list-group-item"><b>Cost: </b> {this.state.cost} </li>
                    <li className="list-group-item"> <b>Number of guests: </b> {this.state.guests}</li>
                    <li className="list-group-item"> <b> Category: </b> {this.state.category}</li>
                    
                </ul>

                <li><button type="button" id="makeinfo" className="btn btn-info"onClick={() => this.props.history.push("/PaymentPortal")}>BOOK ME</button></li>  
                </div>
                </div>
                </div>
                
               

            </div>




        );

        //         <div class="container">
        //                 <div class="row">
        //                     <div class="span12">
        //     	               table class="table-condensed table-bordered table-striped">
        //                 <thead>
        //                     <tr>
        //                       <th colspan="7">
        //                         <span class="btn-group">
        //                             <a class="btn"><i class="icon-chevron-left"></i></a>
        //                         	<a class="btn active">February 2012</a>
        //                         	<a class="btn"><i class="icon-chevron-right"></i></a>
        //                         </span>
        //                       </th>
        //                     </tr>
        //                     <tr>
        //                         <th>Su</th>
        //                         <th>Mo</th>
        //                         <th>Tu</th>
        //                         <th>We</th>
        //                         <th>Th</th>
        //                         <th>Fr</th>
        //                         <th>Sa</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     <tr>
        //                         <td class="muted">29</td>
        //                         <td class="muted">30</td>
        //                         <td class="muted">31</td>
        //                         <td>1</td>
        //                         <td>2</td>
        //                         <td>3</td>
        //                         <td>4</td>
        //                     </tr>
        //                     <tr>
        //                         <td>5</td>
        //                         <td>6</td>
        //                         <td>7</td>
        //                         <td>8</td>
        //                         <td>9</td>
        //                         <td>10</td>
        //                         <td>11</td>
        //                     </tr>
        //                     <tr>
        //                         <td>12</td>
        //                         <td>13</td>
        //                         <td>14</td>
        //                         <td>15</td>
        //                         <td>16</td>
        //                         <td>17</td>
        //                         <td>18</td>
        //                     </tr>
        //                     <tr>
        //                         <td>19</td>
        //                         <td class="btn-primary"><strong>20</strong></td>
        //                         <td>21</td>
        //                         <td>22</td>
        //                         <td>23</td>
        //                         <td>24</td>
        //                         <td>25</td>
        //                     </tr>
        //                     <tr>
        //                         <td>26</td>
        //                         <td>27</td>
        //                         <td>28</td>
        //                         <td>29</td>
        //                         <td class="muted">1</td>
        //                         <td class="muted">2</td>
        //                         <td class="muted">3</td>
        //                     </tr>
        //                 </tbody>

        //             <input type="book" value="BOOK" />
        //         </div>
        // 	</div>
        // </div>;






        //  );

    }
}



TourguideProfilePage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
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
