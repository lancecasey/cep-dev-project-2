import React from "react"
import "./styles.css"

import Review from "./Review"

const RecentReviews = props => {
  return (
    <div>
      {props.reviews.map(review => (
        <Review
          key={review._id}
          name={review.name}
          rating={review.rating}
          review={review.review}
          subtmitted={review.submitted}
        />
      ))}
    </div>
  )
}

export default RecentReviews
