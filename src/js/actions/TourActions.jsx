import Flux from '@4geeksacademy/react-flux-dash';
import MyStore from '../stores/MyStore';

class TourActions extends Flux.Action{
    
    addTour(tour){
      
       
      fetch("https://backend-tour-with-me-guensie.c9users.io/tour/", {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(tour), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
        })
            .then(res => res.json());
        
        let tours = MyStore.getTours();
        tours.push(tour);
        this.dispatch('MyStore.setTours',tour);
    }

    deleteTour(id){
        var data= {
        id: "3",
        title: "Cooking Class",
        tour_summary: "a fun day of cooking",
        cost: "100",
        guests: 2,
        image:"https://images.pexels.com/photos/1217607/pexels-photo-1217607.jpeg?auto=compress&cs=tinysrgb&h=350"
      };    // console.log('deleted contact');
        
        fetch("https://backend-tour-with-me-guensie.c9users.io/tour/", {
        method: 'DELETE', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
        })
            .then(res => res.json());
        
        
            let tours = MyStore.getTours();
            let newArray = tours.filter((cont) => {
                return id != cont.id;
            });
            this.dispatch('MyStore.setTours',newArray);
    }
    


    editTour(editedTour){
    
    
    fetch("https://backend-tour-with-me-guensie.c9users.io/tourguide/" +editedTour.id, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(editedTour), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        }
        })
            .then(res => res.json())
            .then(data => {
              let tours = MyStore.getTours();
 
                for (let i =0; i< tours.length; i++){
            
                    if (tours[i].id === editedTour.id){
                        tours[i] = editedTour;
                    }
                    
                }
                this.dispatch('MyStore.setTours',tours);
          });

        
}
        
        
 
 
    allTours() {
     fetch('https://backend-tour-with-me-guensie.c9users.io/tour/')
        .then((resp) =>{
            return resp.json();
        })
        .then((tours) =>{
            this.dispatch('MyStore.setTours',tours);
        })
        .catch((error) =>{ 
                console.log("There was an error:",error);
        });
        
 }
        
 }

 
    // getTours(){
    //     return this.state.tourguides;
    // } 





export default new TourActions();
