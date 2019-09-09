import React, { Component } from "react"
import Result from "./Result/Result"
import NoResult from "./NoResult/NoResult"
import "./SearchResults.css"

export default class SearchResults extends Component {
  constructor(props){
    super(props);

    this.handleListingClick = this.handleListingClick.bind(this);
    

  }
  handleListingClick = (event) => {
    console.log(event.currentTarget.id);
    window.open("_blank");
}

  render() {
    let listingResults
    if (this.props.listings.length === 0) {
      listingResults = <NoResult />
    } else {
      listingResults = this.props.listings.map(listing => (
        <Result
          key={listing.id}
          src={listing.imgSrc}
          headline={listing.listingHeadline}
          location={listing.listingLocation}
          onClick={this.handleListingClick}
          id={listing.id}
        />
      ))
    }

    return <ul className='results_container'>{listingResults}</ul>
  }
}
