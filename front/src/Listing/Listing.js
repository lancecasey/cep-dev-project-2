import React from "react"
import ReviewForm from "../ReviewForm"
import Header from "../Header/Header"
import Amenities from "../Amenities"
import "./styles.css"

const baseListingUri =
  "http://localhost:8000/api/listings?id="
  

function _arrayBufferToBase64(buffer) {
  var binary = ""
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}
class Listing extends React.Component {
  constructor(props){
    super(props);

    //this.handleListingClick = this.handleListingClick.bind(this);
    

  }
  state = {
    listing: {},
    listingImg: '',
    reviews: [],
    isLoading: false
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    // fetch(baseListingUri + "5d72a402987d7973255734c1") //TODO replace hardcoded id with prop
    //   .then(data => data.json())
    //   .then(data => {
    //     console.log(data)
    //     this.setState({
    //       listing: data[0],
    //       isLoading: false,
    //       listingImg:
    //         "data:image/png;base64," +
    //         _arrayBufferToBase64(data[0].image.data.data)
    //     })
    //   })
  }

  render() {
    return (
      <div className='parent'>
        <div className='grid-container'>
          <div className='image'>
            <img src={this.props.src} alt='listing' />
          </div>

          <section>
            <h1>{this.props.headline}</h1>
            <div className='meat'>
              <div className='main'>
                <h3>{this.props.location}</h3>
                <p>{this.props.description}</p>
              </div>
              <div className='amenities'>
                <Amenities />
              </div>
            </div>
          </section>

          <div className='review'>
            <h4>How was your stay?</h4>
            <ReviewForm id={this.props.id} />
          </div>
        </div>
      </div>
    )
  }
}

export default Listing;