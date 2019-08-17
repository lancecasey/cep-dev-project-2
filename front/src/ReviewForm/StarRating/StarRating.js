import React from "react"
import Star from "./Star"
import "./StarRating.css"

const StarRating = props => {
  const renderStars = () => {
    let stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          isSelected={props.value > i}
          setRating={() => props.handleChange(i + 1)}
          key={i}
          starNumber={i+1}
        />
      )
    }
    return stars
  }

  return (
    <ul className='review--stars'>
      {renderStars()}
    </ul>)
}

export default StarRating
