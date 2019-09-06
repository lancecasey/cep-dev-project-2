import React from "react"
import ReviewForm from "../ReviewForm"
import Header from "../Header/Header"
import Amenities from "../Amenities"
import "./styles.css"

const baseListingUri = ""
class Listing extends React.Component {
  state = {
    listing: {},
    reviews: [],
    isLoading: false
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    fetch("https://reqres.in/api/users/1")
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({
          listing: data.data,
          isLoading: false
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
            <img src={this.state.listing.avatar} alt='listing' />
          </div>

          <section>
            <h1>{this.state.listing.first_name}</h1>
            <div class='meat'>
              <div class='main'>
                <h3>{this.state.listing.last_name}</h3>
                <p>{this.state.listing.email}</p>
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
