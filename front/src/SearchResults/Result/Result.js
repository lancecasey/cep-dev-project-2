import React from "react"
import "./Result.css"

const Result = props => {
  return (
    <li className='results-container' onClick={props.onClick} id={props.id}>
      <img src={props.src} className='listing-image' />
      <div className='listing-body'>
        <h3 className='listing-headline'>{props.headline}</h3>
        <p className='listing-location'>{props.location}</p>
      </div>
    </li>
    
  )
}

export default Result
