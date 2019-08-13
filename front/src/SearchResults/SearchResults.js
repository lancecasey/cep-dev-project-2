import React, { Component } from "react"
import Result from "./Result/Result"
import NoResult from "./NoResult/NoResult"

export default class SearchResults extends Component {
  state = {
    listings: [
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
    ]
  }

  render() {
    let listingResults
    if (this.state.listings.lenght === 0) {
      listingResults = <NoResult />
    } else {
      listingResults = this.state.listings.map(listing => (
        <Result
          key={listing.id}
          src={listing.imgSrc}
          headline={listing.listingHeadline}
          location={listing.listingLocation}
        />
      ))
    }

    return <ul className='results_container'>{listingResults}</ul>
  }
}
