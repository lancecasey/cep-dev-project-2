import React from "react"

const Review = props => {
  return (
    <div className='review'>
      <div>{props.name}</div>
      <div>{props.rating}</div>
      <div>{props.review}</div>
      <div>{props.submitted}</div>
    </div>
  )
}

export default Review
