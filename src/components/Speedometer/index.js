import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="description">Speed is {speed}mph</h1>
        <p className="caption">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="apply-brakes"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
