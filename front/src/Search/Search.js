import React, { Component }  from 'react';
import SearchResults from '../SearchResults/SearchResults';
import './Search.css';

class Search extends Component {
    
    state = {
        listings: []
    };
    
      

    onSearchHandler = (event) => {
        console.log("fired");
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
        let term = event.target.value;
        term = term.toLowerCase();
        let newState = [];
        listingsArr.map(listing => {
            let location = listing.listingLocation;
            location = location.toLowerCase();
            if(location.indexOf(term, 0) !== -1 && term.length > 0){
                let newListing = {
                    id: listing.id,
                    imgSrc: listing.imgSrc,
                    listingHeadline: listing.listingHeadline,
                    listingLocation: listing.listingLocation
                }
                newState.push(newListing);
            }
        });
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