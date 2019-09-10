import React, { Component } from "react"
import "./Result.css"

class Result extends Component {
  constructor(props){
    super(props);
  }

  handleClick = () => {
    this.props.onClick(this.props);
  }

  render(){
  return (
    <li className='results-container' onClick={this.handleClick} id={this.props.id}>
      <img src={this.props.src} className='listing-image' />
      <div className='listing-body'>
        <h3 className='listing-headline'>{this.props.headline}</h3>
        <p className='listing-location'>{this.props.location}</p>
      </div>
    </li>
    
  )
  }
}

export default Result
