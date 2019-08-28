import React, { Component } from "react"
import Input from "./Input"
import "./styles.css"
import StarRating from "./StarRating/StarRating"

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      message: "",
      stars: 0
    }
  }

  handleSubmit = e => {
    console.log(
      `${this.state.name} said ${this.state.message} and gave the property ${
        this.state.stars
      } stars.`
    )
    console.log(this.state)
    e.preventDefault()
    this.setState({
      name: "",
      message: "",
      stars: 0
    })
  }

  handleInput = e => {
    let value = e.target.value
    let name = e.target.name

    this.setState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  handleSetRating = rating => {
    if (this.state.stars === rating) {
      this.setState(prevState => {
        return {
          ...prevState,
          stars: 0
        }
      })
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          stars: rating
        }
      })
    }
  }

  render() {
    return (
      <form className='review-form' onSubmit={this.handleSubmit}>
        {/*stars component*/}
        <StarRating
          name={"stars"}
          value={this.state.stars}
          handleChange={this.handleSetRating}
        />
        {/*name input*/}
        <Input
          type={"text"}
          name={"name"}
          value={this.state.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />
        {/*message input*/}
        <Input
          type={"textarea"}
          name={"message"}
          value={this.state.message}
          placeholder={"How was your stay?"}
          handleChange={this.handleInput}
        />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
export default ReviewForm
