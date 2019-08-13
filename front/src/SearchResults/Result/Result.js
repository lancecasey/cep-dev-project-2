import React from "react"
import "./Result.css"

const Result = props => {
  return (
    <li className='results-container'>
      <img src={props.src} className='listing-image' />
      <body className='listing-body'>
        <h3 className='listing-headline'>{props.headline}</h3>
        <p className='listing-location'>{props.location}</p>
      </body>
    </li>
  )
}

export default Result
