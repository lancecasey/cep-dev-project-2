import React from "react"
import ReviewForm from "../ReviewForm"
import Header from "../Header/Header"
import "./styles.css"

const Listing = props => {
  return (
    <div class='parent'>
      <header class='header'>
        <Header />
      </header>
      <div class='grid-container'>
        <div class='image'>
          <img src='https://placekitten.com/800/480' />
        </div>
        <div class='main'>
          <h1>(property title from props)</h1>
          <h3>(property location from props)</h3>
          <p>(property desctipion from props)</p>
        </div>
        <div class='amenities'>
          (insert amenities component)
        </div>
        <div class='review'>
          <ReviewForm />
        </div>
      </div>
    </div>
  )
}

export default Listing
