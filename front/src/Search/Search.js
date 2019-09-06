import React, { Component } from "react"
import SearchResults from "../SearchResults/SearchResults"
import "./Search.css"

class Search extends Component {
  state = {
    listings: []
  }

  onSearchHandler = event => {
    // AJAX call to get info from Mongo
    let term = event.target.value

    fetch("http://localhost:8000/api/listings", {
      mode: "cors"
    })
      .then(res => res.json())
      .then(
        res => {
          //make it lowercase for comparison
          term = term.toLowerCase()
          //initialize empty array to push results into
          let newState = []
          let listingsArr = res
          //        map over array object
          listingsArr.map(listing => {
            //grab the location for searching
            console.log(listing)
            let location = listing.city
            //lower case for comparison
            location = location.toLowerCase()
            function _arrayBufferToBase64(buffer) {
              var binary = ""
              var bytes = new Uint8Array(buffer)
              var len = bytes.byteLength
              for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i])
              }
              return window.btoa(binary)
            }
            //compare that bitch and check for common letters/substring!
            if (location.indexOf(term, 0) !== -1 && term.length > 0) {
              //if found, create a new object out of the array information
              let imageSource = listing.image.data.data
              let newListing = {
                id: listing.id,
                imgSrc:
                  "data:image/png;base64," + _arrayBufferToBase64(imageSource),
                listingHeadline: listing.title,
                listingLocation: listing.city
              }
              //push it to the empty array
              newState.push(newListing)
            }
          })
          console.log(newState)
          return this.setState({ listings: newState })
        },
        error => {
          console.log(error)
        }
      )
  }

  render() {
    return (
      <div className='searchBar_container'>
        <input
          className='searchBar_input'
          placeholder='Search by Location'
          type='text'
          onChange={this.onSearchHandler}
        />

        <button className='searchBar_button' type='submit'>
          SEARCH
        </button>
        <SearchResults listings={this.state.listings} />
      </div>
    )
  }
}

export default Search
