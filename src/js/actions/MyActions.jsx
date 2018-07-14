import Flux from '@4geeksacademy/react-flux-dash';
import MyStore from '../stores/MyStore';

class TourGuideActions extends Flux.Action {

    addTourGuide(tourguide) {


        fetch("https://backend-tour-with-me-guensie.c9users.io/tourguide/", {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(tourguide), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json());

        let tourguides = MyStore.getTourGuides();
        tourguides.push(tourguide);
        this.dispatch('MyStore.setTourGuides', tourguides);
    }

    deleteTourGuide(id) {
        var data = {
            id: "3",
            title: "Cooking Class",
            tour_summary: "a fun day of cooking"
        }; // console.log('deleted contact');

        fetch("https://backend-tour-with-me-guensie.c9users.io/tourguide/", {
                method: 'DELETE', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json());


        let tourguides = MyStore.getTourGuides();
        let newArray = tourguides.filter((cont) => {
            return id != cont.id;
        });
        this.dispatch('MyStore.setTourGuides', newArray);
    }



    editTourGuide(editedTourGuide) {


        fetch("https://backend-tour-with-me-guensie.c9users.io/tourguide/" + editedTourGuide.id, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(editedTourGuide), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                let tourguides = MyStore.getTourGuides();

                for (let i = 0; i < tourguides.length; i++) {

                    if (tourguides[i].id === editedTourGuide.id) {
                        tourguides[i] = editedTourGuide;
                    }

                }
                this.dispatch('MyStore.setTourGuides', tourguides);
            });
    }


    allTourGuides() {
        fetch('https://backend-tour-with-me-guensie.c9users.io/tourguide/')
            .then((resp) => {
                return resp.json();
            })
            .then((tourguides) => {
                this.dispatch('MyStore.setTourGuides', tourguides);
            })
            .catch((error) => {
                console.log("There was an error:", error);
            });

    }



    oneTourGuide(oneTourGuide) {
        fetch('https://backend-tour-with-me-guensie.c9users.io/tourguide/' + oneTourGuide.id, {
                method: 'GET', // or 'PUT'
                body: JSON.stringify(oneTourGuide), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((resp) => {
                return resp.json();
            })
            .then((tourguides) => {
                this.dispatch('MyStore.setTourGuides', tourguides);
            })
            .catch((error) => {
                console.log("There was an error:", error);
            });

    }

}
// getTourGuides(){
//     return this.state.tourguides;
// } 





export default new TourGuideActions();
