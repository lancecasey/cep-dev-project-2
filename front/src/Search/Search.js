import React, { Component }  from 'react';
import SearchResults from '../SearchResults/SearchResults';
import './Search.css';

class Search extends Component {
    
    state = {
        listings: []
    };
    
      

    onSearchHandler = (event) => {
        // AJAX call to get info from Mongo
        let term = event.target.value;

        fetch("http://localhost:8000/api/listings", {
            mode: 'cors'
        }).then(res => res.json())
      .then(res => {
        //make it lowercase for comparison
        term = term.toLowerCase();
        //initialize empty array to push results into
        let newState = [];
        let listingsArr = [];
        console.log(res);
        listingsArr.push(res);
//        map over array object
        listingsArr.map(listing => {
            //grab the location for searching
            let location = listing.city;
            //lower case for comparison
            location = location.toLowerCase();
            //compare that bitch and check for common letters/substring!
            if(location.indexOf(term, 0) !== -1 && term.length > 0){
                //if found, create a new object out of the array information
                let newListing = {
                    id: listing.id,
                    imgSrc: listing.image,
                    listingHeadline: listing.title,
                    listingLocation: listing.city
                }
                //push it to the empty array
                newState.push(newListing);
            }            
        });  
        console.log(res);
        return this.setState({listings: newState});         
        },
        (error) => {
        
        console.log(error);
        }
      )
    
        /*
        listingsArr is going to be replaced with the payload response from the DB.
        This is a temporary data array for testing purposes
        Hopefully thats not going to cause too much headache down the line...
        */
        // let listingsArr = [
        //     {
        //         id: 1,
        //         imgSrc: "https://www.placecage.com/800/600",
        //         listingHeadline: "Listing 1",
        //         listingLocation: "Austin, TX"
        //     },
        //     {
        //         id: 2,
        //         imgSrc: "https://baconmockup.com/800/600",
        //         listingHeadline: "Listing 2",
        //         listingLocation: "New York, NY"
        //     },
        //     {
        //         id: 3,
        //         imgSrc: "https://www.fillmurray.com/800/600",
        //         listingHeadline: "Listing 3",
        //         listingLocation: "Miami, FL"
        //     }
        // ];
        //Grab the input in the field
        
    }
    
    render(){

    return (
        <div className="searchBar_container">
            <input className="searchBar_input" placeholder="Search by Location" type="text" onChange={this.onSearchHandler} />
           
            <button className="searchBar_button" type="submit">SEARCH</button>
            <SearchResults listings={this.state.listings} />                 
        </div>
    )
}
}

export default Search;