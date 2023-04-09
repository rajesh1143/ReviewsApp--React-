import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeIndex} = this.state

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  RenderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state

    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const currentReviewIndex = reviewsList[activeIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="arrow-button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.RenderActiveReview(currentReviewIndex)}
          <button
            type="button"
            className="arrow-button"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
