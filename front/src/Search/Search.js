import React, { Component }  from 'react';
import SearchResults from '../SearchResults/SearchResults';
import './Search.css';

class Search extends Component {
    
    state = {
        listings: []
    };
    
      

    onSearchHandler = (event) => {
        /*
        listingsArr is going to be replaced with the payload response from the DB.
        This is a temporary data array for testing purposes
        Hopefully thats not going to cause too much headache down the line...
        */
        let listingsArr = [
            {
                id: 1,
                imgSrc: "https://www.placecage.com/800/600",
                listingHeadline: "Listing 1",
                listingLocation: "Austin, TX"
            },
            {
                id: 2,
                imgSrc: "https://baconmockup.com/800/600",
                listingHeadline: "Listing 2",
                listingLocation: "New York, NY"
            },
            {
                id: 3,
                imgSrc: "https://www.fillmurray.com/800/600",
                listingHeadline: "Listing 3",
                listingLocation: "Miami, FL"
            }
        ];
        //Grab the input in the field
        let term = event.target.value;
        //make it lowercase for comparison
        term = term.toLowerCase();
        //initialize empty array to push results into
        let newState = [];
        //map over array object
        listingsArr.map(listing => {
            //grab the location for searching
            let location = listing.listingLocation;
            //lower case for comparison
            location = location.toLowerCase();
            //compare that bitch and check for common letters/substring!
            if(location.indexOf(term, 0) !== -1 && term.length > 0){
                //if found, create a new object out of the array information
                let newListing = {
                    id: listing.id,
                    imgSrc: listing.imgSrc,
                    listingHeadline: listing.listingHeadline,
                    listingLocation: listing.listingLocation
                }
                //push it to the empty array
                newState.push(newListing);
            }
        });
        //update state
        return this.setState({listings: newState});
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