import React from "react"
import ReviewForm from "../ReviewForm"
import Header from "../Header/Header"
import Amenities from "../Amenities"
import "./styles.css"

const Listing = props => {
  return (
    <div class='parent'>
      <header class='header'>
        <Header />
      </header>
      <div class='grid-container'>
        <div class='image'>
          <img src='https://placekitten.com/800/480' alt='listing' />
        </div>

        <section>
          <h1>(property title from props)</h1>
          <div class='meat'>
            <div class='main'>
              <h3>(property location from props)</h3>
              <p>(property desctipion from props)</p>
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

export default Listing
