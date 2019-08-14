import React, { Component } from "react"
import Star from "./Star"
import "./StarRating.css"

export default class StarRating extends Component {
  // Temp state until backend setup
  state = {
    rating: 0
  }

  renderStars = () => {
    let stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          setRating={() => this.handleSetRating(i + 1)}
          key={i}
        />
      )
    }
    return stars
  }

  handleSetRating = rating => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 })
    } else {
      this.setState({ rating })
    }
  }

  render() {
    return <ul className='review--stars'>{this.renderStars()}</ul>
  }
}
