import React from "react"
import ReviewForm from "../ReviewForm"
import Header from "../Header/Header"
import Amenities from "../Amenities"
import "./styles.css"

const Listing = props => {        

class Listing extends React.Component {
  state = {
    listing: {},
    listingImg: '',
    reviews: [],
    isLoading: false
  }

const baseListingUri =
  "http://localhost:8000/api/listings?id="
  

function _arrayBufferToBase64(buffer) {
  let binary = ""
  let bytes = new Uint8Array(buffer)
  let len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

  componentDidMount() {
    this.setState({ isLoading: true })

    fetch(baseListingUri + "5d72a402987d7973255734c1") //TODO replace hardcoded id with prop
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({
          listing: data[0],
          isLoading: false,
          listingImg:
            "data:image/png;base64," +
            _arrayBufferToBase64(data[0].image.data.data)
        })
      })
  }

  render() {
    return (
      <div class='parent'>
        <header class='header'>
          <Header />
        </header>
        <div class='grid-container'>
          <div class='image'>
            <img src={this.state.listingImg} alt='listing' />
          </div>

          <section>
            <h1>{this.state.listing.title}</h1>
            <div class='meat'>
              <div class='main'>
                <h3>{this.state.listing.location}</h3>
                <p>{this.state.listing.description}</p>
              </div>
              <div class='amenities'>
                <Amenities />
              </div>
            </div>
          </section>

          <div class='review'>
            <h4>How was your stay?</h4>
            <ReviewForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Listing
