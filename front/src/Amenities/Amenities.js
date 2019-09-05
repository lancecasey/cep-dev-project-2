import React from 'react';
import phone from './assets/essentials-20@2x.png'
import coffee from "./assets/essentials-17@2x.png"
import beach from "./assets/summer-14@2x.png"
import "./styles.css"

const Amenities = props => {
  return (
    <div class='container'>
      <h3>Things to look forward to:</h3>
      <div class='amenity'>
        <img class='amenity-img' src={phone} alt='phone' />
        <p class='amenities-text'>free long distance</p>
      </div>
      <div class='amenity'>
        <img class='amenity-img' src={coffee} alt='coffee' />
        <p class='amenities-text'>free coffee</p>
      </div>
      <div class='amenity'>
        <img class='amenity-img' src={beach} alt='beach' />
        <p class='amenities-text'>walking distance to the beach</p>
      </div>
    </div>
  )
}

export default Amenities