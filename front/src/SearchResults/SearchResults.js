import React, { Component } from "react"
import Result from "./Result/Result"
import NoResult from "./NoResult/NoResult"
import Listing from "../Listing/Listing"
import "./SearchResults.css"

export default class SearchResults extends Component {
  constructor(props){
    super(props);
    this.handleListingClick = this.handleListingClick.bind(this);
  }

  state = {
    SelectedListing: null
  }

  handleListingClick = (value) => {

    let modalObj = document.querySelector(".modal");

    if(value.selected){
      this.props.listings.map(listing => {
        if(listing.id === value.id){
          listing.selected = false;
        }
      })
    } else {
      this.props.listings.map(listing => {
        if(listing.id === value.id){
          listing.selected = true;
        }
      })      
      let newListing = {
        id: value.id,
        src: value.src,
        headline: value.headline,
        location: value.location
      }
      this.setState({ SelectedListing: newListing });
      console.log(this.state.SelectedListing);
    }

    modalObj.style.display = "block";

  }

  modalCloser = (event) => {
    let modalObj = document.querySelector(".modal");
    modalObj.style.display = "none";
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
          selected={false}
        />
      ))
    }

    let chosenOne
    if(this.state.SelectedListing){
      chosenOne = (
        <Listing 
        key={this.state.SelectedListing.id}
        src={this.state.SelectedListing.src}
        headline={this.state.SelectedListing.headline}
        location={this.state.SelectedListing.location}
        id={this.state.SelectedListing.id}
        />
      )
    }

    return <section className='results_outerContainer'>
              <ul className='results_container'>{listingResults}</ul>
              <div className="modal">
              <span onClick={this.modalCloser} className="close">&times;</span>
              {chosenOne}</div>
          </section>
  }
}
